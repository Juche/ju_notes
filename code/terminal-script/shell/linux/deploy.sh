#!/bin/bash
set +e 

clear

#####################################################################################################################################

deployWebide() {
	if [ -e $PROJECT_PACKAGE_DIR/webide.zip ]; then
		if [ -e $WORKSPACE/webide ]; then
			echo [1]清空原有资源
			rm -rf $WORKSPACE/webide/
		else
			echo [1]创建webide工作空间
			mkdir -p $WORKSPACE/webide
		fi

		cd $PROJECT_PACKAGE_DIR
		echo [2]解压webide.zip
		unzip webide.zip -d $WORKSPACE/webide >/dev/null 2>&1

		# 检查路径,将文件放到正确的位置
		echo [3]检查目录嵌套情况
		if [ -e $WORKSPACE/webide/webide ]; then
			echo [4]处理嵌套路径
			mv $WORKSPACE/webide/webide/* $WORKSPACE/webide/
			rm -rf $WORKSPACE/webide/webide/
		else
			echo [4]文件路径正确
		fi

		echo [5] 检查项目依赖是否为压缩包node_modules.zip
		if [ -e $WORKSPACE/webide/node_modules.zip ]; then
			echo [6]解压依赖node_modules.zip之后删除压缩包
			unzip $WORKSPACE/webide/node_modules.zip -d $WORKSPACE/webide
			rm $WORKSPACE/webide/node_modules.zip
		else
			echo [6]依赖文件不是压缩包
		fi

		echo [7]清除登陆界面默认用户名密码
		if [ -e $WORKSPACE/webide/dist/js/app.js ]; then
			sed -i "s/account:\"admin\",checkPass:\"123456\"/account:\"\",checkPass:\"\"/g" $WORKSPACE/webide/dist/js/app.js
		else
			echo 错误：找不到$WORKSPACE/webide/dist/js/app.js
		fi
		

	else
		echo 错误：找不到$PROJECT_PACKAGE_DIR/webide.zip
	fi
}
deployLargeScreen() {
	if [ -e $PROJECT_PACKAGE_DIR/largeScreen.zip ]; then
		if [ -e $WORKSPACE/largeScreen ]; then
			echo [1]清空原有资源
			rm -rf $WORKSPACE/largeScreen/**
		else
			echo [1]创建largeScreen工作空间
			mkdir -p $WORKSPACE/largeScreen
		fi

		cd $PROJECT_PACKAGE_DIR
		echo [2]解压largeScreen.zip
		unzip largeScreen.zip -d $WORKSPACE/largeScreen > /dev/null 2>&1
		# unzip largeScreen.zip -d $WORKSPACE/
		# 检查路径,将文件放到正确的位置
		echo [3]检查目录嵌套情况
		if [ -e $WORKSPACE/largeScreen/largeScreen ]; then
			echo [4]处理嵌套路径
			mv $WORKSPACE/largeScreen/largeScreen/* $WORKSPACE/largeScreen/
			rm -rf $WORKSPACE/largeScreen/largeScreen/
		else
			echo [4]文件路径正确
		fi

		echo [5] 检查项目依赖是否为压缩包node_modules.zip
		if [ -e $WORKSPACE/largeScreen/node_modules.zip ]; then
			echo [6]解压依赖node_modules.zip之后删除压缩包
			unzip $WORKSPACE/largeScreen/node_modules.zip -d $WORKSPACE/largeScreen
			rm $WORKSPACE/largeScreen/node_modules.zip
		else
			echo [6]依赖文件不是压缩包
		fi
	else
		echo 错误：找不到$PROJECT_PACKAGE_DIR/largeScreen.zip
	fi
}
deployBackend() {
	AWEB_SCREEN_WORKSPACE=$WORKSPACE/aweb_screen
	BFF_WORKSPACE=$WORKSPACE/bff

	echo 部署aweb_screen.war包
	if [ -e $PROJECT_PACKAGE_DIR/aweb_screen.war ]; then
		if [ -e $AWEB_SCREEN_WORKSPACE ]; then
			echo [1]清空原有资源
			rm -rf $AWEB_SCREEN_WORKSPACE/**
		else
			echo [1]创建aweb_screen工作空间
			mkdir -p $AWEB_SCREEN_WORKSPACE
		fi

		echo [2]拷贝aweb_screen.war到$AWEB_SCREEN_WORKSPACE
		cp -f $PROJECT_PACKAGE_DIR/aweb_screen.war $AWEB_SCREEN_WORKSPACE/

		echo [3]拷贝aweb_screen相关配置到$AWEB_SCREEN_WORKSPACE
		cp -f $AWEB_SCREEN_CONF_DIR/* $AWEB_SCREEN_WORKSPACE/

	else
		echo 错误：找不到aweb_screen.war文件
	fi

	echo 部署bff.war包
	if [ -e $PROJECT_PACKAGE_DIR/bff.war ]; then
		if [ -e $BFF_WORKSPACE ]; then
			echo [1]清空原有资源
			rm -rf $BFF_WORKSPACE/**
		else
			echo [1]创建bff工作空间
			mkdir -p $BFF_WORKSPACE
		fi

		echo [2]拷贝bff.war到$BFF_WORKSPACE
		cp -f $PROJECT_PACKAGE_DIR/bff.war $BFF_WORKSPACE/

		echo [3]拷贝bff相关配置到$BFF_WORKSPACE
		cp -f $BFF_CONF_DIR/* $BFF_WORKSPACE/

	else
		echo 错误：找不到bff.war文件
	fi
}

deployAllProj() {
	deployWebide
	deployLargeScreen
	deployBackend
}

#####################################################################################################################################

printf "#######################################################################\n"
printf "                      大屏相关环境项目部署启动脚本\n"
printf "#######################################################################\n"
printf "%-5s %-10s\n"
printf "%-5s %-10s\n" 1 一键部署\(webide,largeScreen,aweb_screen,bff\)
printf "%-5s %-10s\n"
printf "%-5s %-10s\n" 2 部署webide
printf "%-5s %-10s\n" 3 部署largeScreen
printf "%-5s %-10s\n" 4 部署后端资源\(aweb_screen,bff\)
printf "%-5s %-10s\n"
echo -n "请输入:"
read number
echo "输入选项为:$number"

case $number in
1)
	deployAllProj
	;;
2)
	deployWebide
	;;
3)
	deployLargeScreen
	;;
4)
	deployBackend
	;;
;;
*)
	echo "无效输入"
	;;

esac
echo "脚本结束"
