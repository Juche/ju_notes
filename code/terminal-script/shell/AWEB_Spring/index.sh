#!/bin/bash
set -e

export ENV_FILE=~/.bash_profile
export WORKSPACE=~/webide
export PACKAGE_DIR=$WORKSPACE/packages
export PROJECT_PACKAGE_DIR=$WORKSPACE/projectPackages
export SCRIPT_DIR=$WORKSPACE/script/modules
export TEMP_FILE=$PACKAGE_DIR/_temp
export CONF_DIR=$WORKSPACE/conf

clear

#####################################################################################################################################

checkSysInfo(){
	printf "============= /etc/redhat-release ===============\n"
	cat /etc/redhat-release
	printf "=================================================\n"
	printf "============= /proc/version =====================\n"
	cat /proc/version
	printf "=================================================\n"
}

#####################################################################################################################################

printf "#######################################################################\n"
printf "                      WEBIDE 部署脚本\n"
printf "#######################################################################\n"
printf "%-5s %-10s\n" 1 查看系统信息;
printf "%-5s %-10s\n" ;
printf "%-5s %-10s\n" 2 安装jdk;
printf "%-5s %-10s\n" 3 安装maven;
printf "%-5s %-10s\n" 4 安装vscode-online;
printf "%-5s %-10s\n" 5 安装node;
printf "%-5s %-10s\n" 6 安装git\(需要root权限\);
printf "%-5s %-10s\n" ;
printf "%-5s %-10s\n" 7 安装pm2-logrotate\(请先确认已经安装了node，已及存在pm2命令\)
printf "%-5s %-10s\n" 8 安装vscode-online插件\(请先确认已经安装了vscode-online，已及已经运行过\)

echo -n "请输入:"
read number
echo "输入选项为:$number"


case $number in
	1)
		clear
		echo "系统信息"
		checkSysInfo
		;;
	2)
		clear
		sh $SCRIPT_DIR/java.sh
		;;
	3)
		clear
		sh $SCRIPT_DIR/maven.sh
		;;
	4)
		clear
		sh $SCRIPT_DIR/vscode-online.sh
		;;
	5)
		clear
		sh $SCRIPT_DIR/node.sh
		;;
	6)
		clear
		sh $SCRIPT_DIR/git.sh
		;;
	7)
		clear
		sh $SCRIPT_DIR/pm2-logrotate.sh
		;;
	8)
		clear
		sh $SCRIPT_DIR/vsix.sh
		;;
	*)
		echo "无效输入"
		;;
esac

