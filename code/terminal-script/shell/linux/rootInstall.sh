#!/bin/bash
set -e

cd $PACKAGE_DIR

####################################################################################################################################

# NOTE: 直接在当前用户使用 sudo 来执行相关命令
# 不要切换到 root 用户执行安装,这样`~`环境路径变量指向的位置不一致导致找不到对应资源

# TODO: 考虑将该安装作为选项加入 nginx 的安装脚本一起

checkDB() {
    printf "#######################################################################\n"
    printf "                      1. 如果mariadb存在请 \033[31m[删除]\033[0m\n"
    printf "                      2. 如果mysql不存在请 \033[32m[安装]\033[0m\n"
    printf "#######################################################################\n"

    local check_results=`rpm -qa | grep $1`

    if [ $1 = "mariadb" ]; then
        if [[ $check_results =~ $1 ]]; then
            echo -e "\033[31m[环境未删除]\033[0m $1\n[$check_results]"
            # 如果mariadb存在,让用户决定是否删除掉
            echo "是否立即卸载$1【Y/N】:"
            read comfire
            if [ $comfire == y ]||[ $comfire == Y ]; then
                sudo rpm -e --nodeps $check_results
                echo "mariadb 完成卸载"
            fi
        else
            echo -e "\033[32m[环境已删除]\033[0m $1"
        fi
    fi

    if [ $1 = "mysql" ]; then

        if [[ $check_results =~ $1 ]]; then
            echo -e "\033[32m[环境存在]\033[0m $1\n[$check_results]"
        else
            echo -e "\033[31m[缺少环境]\033[0m $1"
            # 如果mysql不存在,让用户决定是否安装
            echo "是否立即安装$1【Y/N】:"
            read comfire
            if [ $comfire == y ]||[ $comfire == Y ]; then
                mysqlInstall
                echo "mysql 安装完成"
            fi
        fi

    fi
}

mysqlInstall() {
    echo "开始安装mysql"
    echo [1]解压mysql rpm-bundle资源
    if [ ! -d "./mysql" ]; then
        mkdir mysql
    fi

    tar -xvf mysql-5.7.31-1.el7.x86_64.rpm-bundle.tar -C ./mysql

    echo [2]依次安装rpm包
    sudo rpm -ivh ./mysql/mysql-community-common-5.7.31-1.el7.x86_64.rpm
    sudo rpm -ivh ./mysql/mysql-community-libs-5.7.31-1.el7.x86_64.rpm
    sudo rpm -ivh ./mysql/mysql-community-devel-5.7.31-1.el7.x86_64.rpm
    sudo rpm -ivh ./mysql/mysql-community-libs-compat-5.7.31-1.el7.x86_64.rpm
    sudo rpm -ivh ./mysql/mysql-community-client-5.7.31-1.el7.x86_64.rpm
    sudo rpm -ivh ./mysql/mysql-community-server-5.7.31-1.el7.x86_64.rpm

    echo [4]mysql安装完成
}

initMysql() {
    
    echo [1]启动mysql
    sudo systemctl start mysqld.service

    echo [2]查看mysql运行状态
    sudo systemctl status mysqld.service

    ## mysql初始密码 & 临时密码(一个满足初始安全策略的过渡密码) & 用户设置初始密码
    # 查看mysql预定义的密码
    # 用rpm包安装完的用这种方式
    passwdLog=`sudo grep 'temporary password' /var/log/mysqld.log`
    # 2021-04-19T09:56:20.840417Z 1 [Note] A temporary password is generated for root@localhost: PjkaKsiIq8,)
    # NF:number of field 对应最后一个域
    initPasswd="`echo $passwdLog | awk '{print $NF}'`"
    # echo -e "\033[31m[mysql初始密码]\033[0m $initPasswd"
    tmpPasswd="abcd1234"

    # echo 初始化密码
    echo "请输入要设置的密码:"
    read newPasswd
    echo "设置的密码为: $newPasswd"
    newPasswdLen=${#newPasswd}
    # echo "设置的密码长度为: $newPasswdLen"

    # sudo mysql --connect-expired-password -e "alter user 'root'@'localhost' identified by '$newPasswd';"

    ## 使用默认密码登录 & 修改安全策略
    # Please use --connect-expired-password option or invoke mysql in interactive mode.
    # 登录加上 `--connect-expired-password` 选项
    # 提示用户输入初始密码登录(交互的模式登录)
    # sudo mysql --connect-expired-password -u root -p $initPasswd <<EOF
    echo -e "\033[31m[请输入mysql初始密码]\033[0m $initPasswd"
    sudo mysql --connect-expired-password -u root -p <<EOF

    # Your password does not satisfy the current policy requirements
    # 修改的密码过于简短,不符合密码策略
    # 设置临时密码
    ALTER USER 'root'@'localhost' IDENTIFIED BY '$tmpPasswd';
    # 查看和修改密码策略
    SHOW VARIABLES LIKE 'validate_password%';
    set global validate_password_policy=LOW;
    set global validate_password_length=$newPasswdLen;
    exit
EOF

    ## 使用临时密码登录 & 修改密码 & 添加用户远程登录权限
    echo -e "\033[31m[请输入mysql临时密码]\033[0m $tmpPasswd"
    sudo mysql --connect-expired-password -u root -p <<EOF
    SHOW VARIABLES LIKE 'validate_password%';
    # 设置新密码
    ALTER USER 'root'@'localhost' IDENTIFIED BY '$newPasswd';

    # 添加用户远程登录权限
    # 新建用户远程连接mysql数据库
    grant all on *.* to admin@'%' identified by '123456' with grant option;
    flush privileges;
    # 支持root用户允许远程连接mysql数据库
    grant all privileges on *.* to 'root'@'%' identified by '123456' with grant option;
    flush privileges;
    exit
EOF

    echo -e "\033[32m[密码初始化完成]\033[0m 初始密码为: $newPasswd"
}

initDatabase() {
    if [ -e $MYSQL_CONF_DIR/aweb_screen.sql ];then
        echo -e "\033[31m[请输入mysql密码登陆]\033[0m"
        mysql --connect-expired-password -u root -p <<EOF
        create DATABASE aweb_screen;
        use aweb_screen;
        source $MYSQL_CONF_DIR/aweb_screen.sql;
        exit
EOF
        # mysql -uroot -p aweb_screen < $MYSQL_CONF_DIR/aweb_screen.sql
        echo -e "\033[32m[aweb_screen初始数据库导入完成]\033[0m"
    else
		echo -e "\033[33m[注意]\033[0m 没有找到默认配置文件：$MYSQL_CONF_DIR/aweb_screen.sql"
	fi
}

sregexInstall() {
    if [ -e /lib64/libsregex.so.0 ]; then
        echo "sregex已安装"
    else
        echo "开始安装sregex..."
        tar -zxf ./sregex.tar.gz
        cd ./sregex
        sudo make
        sudo make install
        sudo ln -sv /usr/local/lib/libsregex.so.0.0.1 /lib64/libsregex.so.0
        echo "sresgex安装完成"
    fi
}

allInstall() {
    mysqlInstall
    initMysql
    initDatabase
    sregexInstall
}

# TODO: 添加 root 用户安装 mysql 的脚本和资源包
# TODO: 添加 root 用户安装 mq 的脚本和资源包

printf "#######################################################################\n"
printf "                      大屏相关环境安装脚本\n"
printf "#######################################################################\n"
printf "%-5s %-10s\n" 1 数据库环境检测
printf "%-5s %-10s\n" 2 安装全部\(安装mysql,sregex,初始化mysql,初始化aweb_screen数据库\)
printf "%-5s %-10s\n"
printf "%-5s %-10s\n" 3 安装mysql
printf "%-5s %-10s\n" 4 初始化mysql
printf "%-5s %-10s\n" 5 初始化aweb_screen数据库
printf "%-5s %-10s\n" 6 安装sregex
printf "%-5s %-10s\n"
echo -n "请输入:"
read number
case $number in
1)
	checkDB mariadb
    checkDB mysql
	;;
2)
	allInstall
	;;
3)
	mysqlInstall
	;;
4)
	initMysql
	;;
5)
	initDatabase
	;;
6)
	sregexInstall
	;;
*)
	echo '无效输入'
	;;
esac
echo "脚本结束"
####################################################################################################################################
