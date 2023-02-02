#!/bin/bash

clear

#####################################################################################################################################
#####################################################################################################################################

# 	DATE = `date'+%Y%m%d%H%M%S%'`
# 	mkdir ~/older
# 	mkdir ~/older/$DATE
# 	zip -qry ~/older/日期/webide.zip /usr/local/nginx

if [ -e $ORDER_DIR ];then
	echo [1]已有备份目录~/older
else
	echo [1]创建备份目录~/older
	mkdir -p $ORDER_DIR
fi

echo [1]创建备份文件夹$ORDER_DIR/`date +%Y%m%d`/
mkdir -p $ORDER_DIR/`date +%Y%m%d`

#####################################################################################################################################

## webide 和 largeScreen 为 zip 包
updateWebide(){
	if [ -e $PROJECT_PACKAGE_DIR/webide.zip ];then

		if [ -e $WORKSPACE/webide ];then
			echo [1]备份webide到目录$ORDER_DIR/`date +%Y%m%d`/
			# mv $WORKSPACE/webide $WORKSPACE/_webide
			# cp -rf $WORKSPACE/webide/* $WORKSPACE/_webide
			zip -qry $ORDER_DIR/`date +%Y%m%d`/webide.zip $WORKSPACE/webide
		else
			echo [2]创建webide工作空间
			mkdir -p $WORKSPACE/webide
		fi

		cd $PROJECT_PACKAGE_DIR
		echo [3]解压webide.zip
		unzip webide.zip -d $WORKSPACE/webide
		# unzip webide.zip -d $WORKSPACE/
		# 检查路径,将文件放到正确的位置
		if [ -e $WORKSPACE/webide/webide ];then
			echo [4]处理嵌套路径
			cp -rf $WORKSPACE/webide/webide/* $WORKSPACE/webide
			rm -rf $WORKSPACE/webide/webide
		else
			echo [4]文件路径正确
		fi

		echo [5] 检查项目依赖是否为压缩包node_modules.zip
		if [ -e $WORKSPACE/webide/node_modules.zip ];then
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
updateLargeScreen(){
	if [ -e $PROJECT_PACKAGE_DIR/largeScreen.zip ];then

		if [ -e $WORKSPACE/largeScreen ];then
			echo [1]备份largeScreen到目录$ORDER_DIR/`date +%Y%m%d`/
			# mv $WORKSPACE/largeScreen $WORKSPACE/_largeScreen
			# cp -rf $WORKSPACE/largeScreen/* $WORKSPACE/_largeScreen
			zip -qry $ORDER_DIR/`date +%Y%m%d`/largeScreen.zip $WORKSPACE/largeScreen
		else
			echo [1]创建largeScreen工作空间
			mkdir -p $WORKSPACE/largeScreen
		fi

		echo [2]创建largeScreen临时工作空间largeScreen-temp
		mkdir -p $WORKSPACE/largeScreen-temp

		cd $PROJECT_PACKAGE_DIR
		echo [3]解压largeScreen.zip到临时文件夹largeScreen-temp
		unzip largeScreen.zip -d $WORKSPACE/largeScreen-temp
		# unzip largeScreen.zip -d $WORKSPACE/
		# 检查路径,将文件放到正确的位置
		if [ -e $WORKSPACE/largeScreen-temp/largeScreen ];then
			echo [4]处理嵌套路径
			cp -rf $WORKSPACE/largeScreen-temp/largeScreen/* $WORKSPACE/largeScreen-temp
			rm -rf $WORKSPACE/largeScreen-temp/largeScreen
		else
			echo [4]文件路径正确
		fi

		echo [5]将大屏临时文件夹里的内容移动到largeScreen目录

		if [ -e $WORKSPACE/largeScreen/public ];then
			mv $WORKSPACE/largeScreen-temp/public/** $WORKSPACE/largeScreen/public/
			rm -rf $WORKSPACE/largeScreen-temp/public
		fi

		if [ -e $WORKSPACE/largeScreen/src ];then
			mv $WORKSPACE/largeScreen-temp/src/** $WORKSPACE/largeScreen/src/
			rm -rf $WORKSPACE/largeScreen-temp/src
		fi

		if [ -e $WORKSPACE/largeScreen/webidelib ];then
			mv $WORKSPACE/largeScreen-temp/webidelib/** $WORKSPACE/largeScreen/webidelib/
			rm -rf $WORKSPACE/largeScreen-temp/webidelib
		fi

		mv $WORKSPACE/largeScreen-temp/** $WORKSPACE/largeScreen/
		rm -rf $WORKSPACE/largeScreen-temp

		echo [6] 检查项目依赖是否为压缩包node_modules.zip
		if [ -e $WORKSPACE/largeScreen/node_modules.zip ];then
			echo [7]解压依赖node_modules.zip之后删除压缩包
			unzip $WORKSPACE/largeScreen/node_modules.zip -d $WORKSPACE/largeScreen
			rm $WORKSPACE/largeScreen/node_modules.zip
		else
			echo [7]依赖文件不是压缩包
		fi

		echo [8]依赖文件可执行文件添加执行权限
		chmod 755 $WORKSPACE/largeScreen/node_modules/.bin/*

	else
		echo 错误：找不到$PROJECT_PACKAGE_DIR/largeScreen.zip
	fi
}
updateBackend(){
	echo 部署aweb_screen.war包
	if [ -e $PROJECT_PACKAGE_DIR/aweb_screen.war ];then
		if [ -e $AWEB_SCREEN_WORKSPACE ];then
			echo [1]备份aweb_screen到目录$ORDER_DIR/`date +%Y%m%d`/
			mv $AWEB_SCREEN_WORKSPACE/*.war $ORDER_DIR/`date +%Y%m%d`/
		else
			echo [1]创建aweb_screen工作空间
			mkdir -p $AWEB_SCREEN_WORKSPACE
		fi

		echo [2]更新aweb_screen.war到$AWEB_SCREEN_WORKSPACE
		cp -f $PROJECT_PACKAGE_DIR/aweb_screen.war $AWEB_SCREEN_WORKSPACE/

	else
		echo 错误：找不到aweb_screen.war文件
	fi

	echo 部署bff.war包
	if [ -e $PROJECT_PACKAGE_DIR/bff.war ];then
		if [ -e $BFF_WORKSPACE ];then
			echo [1]备份bff到目录$ORDER_DIR/`date +%Y%m%d`/
			mv $BFF_WORKSPACE/*.war $ORDER_DIR/`date +%Y%m%d`/
		else
			echo [1]创建bff工作空间
			mkdir -p $BFF_WORKSPACE
		fi

		echo [2]更新bff.war到$BFF_WORKSPACE
		cp -f $PROJECT_PACKAGE_DIR/bff.war $BFF_WORKSPACE/

		# echo [3]拷贝schema.json配置到$BFF_WORKSPACE
		# cp -f $SCHEMA_CONF_DIR/* $BFF_WORKSPACE/
	else
		echo 错误：找不到bff.war文件
	fi
}

#####################################################################################################################################

# startWebide(){
# 	cd $SCRIPT_PM2_DIR
# 	# pm2 delete webide
# 	pm2 start ./webide.json
# }
# startLargeScreenV2sual(){
# 	cd $SCRIPT_PM2_DIR
# 	# pm2 delete largeScreen-v2sual
# 	pm2 start ./largeScreen-v2sual.json
# }
# startLargeScreenBackend(){
# 	if [ -e $AWEB_SCREEN_WORKSPACE/aweb_screen.war ];then
# 		cd $SCRIPT_PM2_DIR
# 		# pm2 delete aweb-screen
# 		pm2 start ./aweb_screen.json
# 	fi
# }
# startBff(){
# 	if [ -e $BFF_WORKSPACE/bff.war ];then
# 		cd $SCRIPT_PM2_DIR
# 		# pm2 delete bff
# 		pm2 start ./bff.json
# 	fi
# }

#####################################################################################################################################

printf "#######################################################################\n"
printf "                      大屏项目资源更新脚本\n"
printf "#######################################################################\n"
printf "%-5s %-10s\n" 1 更新webide;
printf "%-5s %-10s\n" 2 更新largeScreen;
printf "%-5s %-10s\n" 3 更新后端资源;
# printf "%-5s %-10s\n" ;
# printf "%-5s %-10s\n" 4 重启webide\(pm2\);
# printf "%-5s %-10s\n" 5 重启largeScreen-v2sual\(pm2\);
# printf "%-5s %-10s\n" 6 重启aweb_screen\(pm2\);
# printf "%-5s %-10s\n" 7 重启BFF\(pm2\);
printf "%-5s %-10s\n" ;

echo -n "请输入:"
read number
echo "输入选项为:$number"

case $number in
	1)
		updateWebide
	;;
	2)
		updateLargeScreen
	;;
	3)
		updateBackend
	;;
	# 4)
	# 	startWebide
	# ;;
	# 5)
	# 	startLargeScreenV2sual
	# ;;
	# 6)
	# 	startLargeScreenBackend
	# ;;
	# 7)
	# 	startBff
	# ;;
	*)
		echo "无效输入"
	;;

esac
