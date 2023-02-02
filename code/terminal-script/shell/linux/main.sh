#!/bin/bash
set -e

CUR_PATH=$(readlink -f "$(dirname "$0")")
source $CUR_PATH/conf.sh

clear
if [ ! -e $WORKSPACE/logs  ];then
mkdir -p $WORKSPACE/logs
fi

printf "#######################################################################\n"
printf "                      AWEB大屏管理端脚本\n"
printf "#######################################################################\n"
printf "%-5s %-10s\n" 1 检测环境信息
printf "%-5s %-10s\n" 2 使用root权限安装工具
printf "%-5s %-10s\n" 3 安装基本工具
printf "%-5s %-10s\n" 4 部署应用
printf "%-5s %-10s\n" 5 检测配置文件
printf "%-5s %-10s\n" 6 启动应用
printf "%-5s %-10s\n" 7 停止应用
printf "%-5s %-10s\n" 8 部署更新应用\(更新会备份项目\)

echo -n "请输入:"
read number

cd $SCRIPTS_DIR
case $number in
1)
    source ./checkEvn.sh
    ;;
2)
    source ./rootInstall.sh
    ;;
3)
    source ./install.sh
    ;;
4)
    source ./deploy.sh
    ;;
5)
    source ./checkConf.sh
    ;;
6)
    source ./start.sh
    ;;
7)
    source ./stop.sh
    ;;
8)
    source ./update.sh
    ;;
*) 
    echo '无效输入'
;;
esac
