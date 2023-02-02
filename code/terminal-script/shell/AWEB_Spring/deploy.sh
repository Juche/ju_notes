#!/bin/bash


WORKSPACE=~/webide
LOGS_DIE=$WORKSPACE/logs
PACKAGE_DIR=$WORKSPACE/packages
SCRIPT_DIR=$WORKSPACE/script
PM2_DIR=$SCRIPT_DIR/pm2
PROJECT_PACKAGE_DIR=$WORKSPACE/projectPackages
export SCRIPT_DIR=$WORKSPACE/script/modules

clear

#####################################################################################################################################

deploySpring(){
	if [ -e $WORKSPACE/AWEB_Spring ];then
		echo "清空原有文件内容"
		rm -rf $WORKSPACE/AWEB_Spring/**
	else
		echo "创建AWEB_Spring工作空间"
		mkdir -p $WORKSPACE/AWEB_Spring 
	fi	

	if [ -e $PROJECT_PACKAGE_DIR/AWEB_Spring_7.0.tar.gz ];then
		tar -zxf $PROJECT_PACKAGE_DIR/AWEB_Spring_7.0.tar.gz  -C $WORKSPACE/AWEB_Spring/ 
		echo "资源部署结束，位置:$WORKSPACE/AWEB_Spring"
	else
		echo "错误：找不到$PROJECT_PACKAGE_DIR/AWEB_Spring_7.0.tar.gz"
	fi
}


startVSO(){
	cd $PM2_DIR
	pm2 delete vscode-online
	pm2 start ./vscode-online.json	
}


#####################################################################################################################################

printf "#######################################################################\n"
printf "                      WEBIDE 部署脚本\n"
printf "#######################################################################\n"
printf "%-5s %-10s\n" 1 部署AWEB_Spring_7\.0;
printf "%-5s %-10s\n" ;
printf "%-5s %-10s\n" 2 启动vscode-online\(pm2\);


echo -n "请输入:"
read number
echo "输入选项为:$number"


case $number in
	1)
		deploySpring
		;;
	2)
		startVSO
		;;
	*)
		echo "无效输入"
	;;

esac

