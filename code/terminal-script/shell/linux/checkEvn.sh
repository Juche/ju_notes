#! /bin/bash

clear

printEnvRes() {
    if [ $2 = "y" ]; then
        echo -e "\033[32m[环境存在]\033[0m $1"

    else
        echo -e "\033[31m[缺少环境]\033[0m $1"
    fi
}

isCmdExist() {
    local cmd="$1"

    if ! type "$cmd" >/dev/null 2>&1; then
        printEnvRes $1 "n"
    else
        printEnvRes $1 "y"
    fi

    # if [ -z "$cmd" ]; then
    #     echo "Usage isCmdExist yourCmd"
    #     return 1
    # fi

    # # which "$cmd" >/dev/null 2>&1
    # # if [ $? -eq 0 ]; then
    # if which "$cmd" >/dev/null 2>&1; then
    #     printEnvRes $1 "y"
    # else
    #     printEnvRes $1 "n"
    # fi
}

checkDB() {
    local check_results=`rpm -qa | grep $1`
    if [[ $check_results =~ $1 ]]; then
        echo -e "\033[32m[环境存在]\033[0m $1\n[$check_results]"
    else
        echo -e "\033[31m[缺少环境]\033[0m $1"
    fi
}

checkSysctl() {
    SYSCTL_PATH=/etc/sysctl.conf
    printInfo() {
        echo -e "sudo echo fs.inotify.max_user_watches = 99999999 | sudo tee -a /etc/sysctl.conf"
        echo -e "sudo sysctl -p"
    }
    if [ -e $SYSCTL_PATH ]; then
        local SYSCTL_STR=$(cat /etc/sysctl.conf)
        # CUR_NUM=$(grep -E "fs.inotify.max_user_watches.*" -o ./test.txt | sed 's/.*fs.inotify.max_user_watches.*=\(.*\).*/\1/g')
        CUR_NUM=$(grep -E "fs.inotify.max_user_watches.*" -o /etc/sysctl.conf | sed 's/.*fs.inotify.max_user_watches.*=\(.*\).*/\1/g')
        if [ -n "$CUR_NUM" ]; then
            if [ $CUR_NUM -gt 99999998 ]; then
                echo -e "\033[32m[检测通过]\033[0m 当前读写限制为$CUR_NUM"
            else
                echo -e "\033[33m[需要确认]\033[0m 当前读写限制为$CUR_NUM,可能会导致应用运行报错。用root选项执行以下命令解决："
                printInfo
            fi
        else
            echo -e "\033[31m[需要配置]\033[0m /etc/sysctl.conf中缺少文件监视程序限制配置，可能会导致应用运行报错。用root选项执行以下命令解决："
            printInfo
        fi
    else
        echo -e "\033[31m[需要配置]\033[0m /etc/sysctl.conf中缺少文件监视程序限制配置，可能会导致应用运行报错。用root选项执行以下命令解决："
        printInfo
    fi
}
checkSregex() {
    if [ -e /lib64/libsregex.so.0 ]; then
        echo -e "\033[32m[检测通过]\033[0m 已安装sregex"
    else
        echo -e "\033[31m[缺少环境]\033[0m 未安装sregex依赖，请用root权限安装。"
    fi
}

printf "#######################################################################\n"
printf "                      检测编译环境\n"
echo -e "\033[31m[编译环境请甲方预先提供]\033[0m"
printf "#######################################################################\n"
isCmdExist make
isCmdExist gcc
isCmdExist g++
isCmdExist unzip
printf "#######################################################################\n"
printf "                      文件监视程序限制配置\n"
echo -e "\033[31m[如果\"需要配置\"请按提示操作]\033[0m"
printf "#######################################################################\n"
checkSysctl
printf "#######################################################################\n"
printf "                      使用root权限安装工具\n"
echo -e "\033[31m[以下工具请使用main脚本的选项2(使用root权限安装工具)来安装]\033[0m"
echo -e "\033[31m[安装nginx前需先安装sregex]\033[0m"
echo -e "\033[31m[安装mysql前需先卸载mariadb]\033[0m"
printf "#######################################################################\n"
checkSregex
checkDB mariadb
checkDB mysql
printf "#######################################################################\n"
printf "                      检测基本工具\n"
echo -e "\033[31m[以下工具请使用main脚本的选项3(安装基本工具)来安装]\033[0m"
printf "#######################################################################\n"
isCmdExist node
isCmdExist pm2
isCmdExist java
isCmdExist nginx
isCmdExist redis-cli
# TODO: nginx redis 加入环境变量 || 配置安装路径检测

echo "========================== 脚本结束 =================================="
