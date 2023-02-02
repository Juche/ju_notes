#!/bin/bash
set -e

clear

#####################################################################################################################################

autoInstall() {
		clear
		echo '======================= 安装nodejs ==========================='
		sh $SCRIPT_MODULES_DIR/node.sh
		clear
		echo '======================= 安装java ============================='
		sh $SCRIPT_MODULES_DIR/java.sh
		clear
		echo '=================== 安装vscode-online ========================'
		sh $SCRIPT_MODULES_DIR/vscode-online.sh
		clear
		echo '======================= 安装nginx ============================'
		sh $SCRIPT_MODULES_DIR/nginx.sh
}

#####################################################################################################################################

printf "#######################################################################\n"
printf "                      大屏相关环境安装脚本\n"
printf "#######################################################################\n"
# printf "%-5s %-10s\n" 1 自动安装
# printf "%-5s %-10s\n" 2 手动安装
printf "%-5s %-10s\n"
printf "自动安装:%-5s %-10s\n"
printf "%-5s %-10s\n" 1 一键安装node/jdk/vscode-online/nginx/redis
printf "%-5s %-10s\n"
printf "手动安装:%-5s %-10s\n"
printf "%-5s %-10s\n" 2 安装node
printf "%-5s %-10s\n" 3 安装jdk
printf "%-5s %-10s\n" 4 安装vscode-online
printf "%-5s %-10s\n" 5 安装nginx\(请先确认已经安装好gcc、g++和sregex\)
printf "%-5s %-10s\n" 6 安装redis\(请先确认已经安装好gcc和g++\)
printf "%-5s %-10s\n"
echo -n "请输入:"
read number
case $number in
1)
	autoInstall
	;;
# 2)
# 	manualInstall
# 	;;
2)
	clear
	source $SCRIPT_MODULES_DIR/node.sh
	;;
3)
	clear
	source $SCRIPT_MODULES_DIR/java.sh
	;;
4)
	clear
	source $SCRIPT_MODULES_DIR/vscode-online.sh
	;;
5)
	clear
	source $SCRIPT_MODULES_DIR/nginx.sh
	;;
6)
	clear
	source $SCRIPT_MODULES_DIR/redis.sh
	;;
*)
	echo '无效输入'
	;;
esac
echo "脚本结束"
#####################################################################################################################################
