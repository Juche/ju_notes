#!/bin/bash
set -e

pm2 list
clear

if [ -e ~/.pm2 ];then
	if [ -e $WORKSPACE/conf/pm2.conf ];then
		cd  $PACKAGE_DIR
		echo "[1]正在解压依赖包...."
		tar -zxf ./pm2-logrotate.tar.gz -C ~/.pm2/modules/
		echo "[2]正在复制配置文件...."
		cp -f ../conf/pm2.conf ~/.pm2/module_conf.json
		echo "[3]关闭pm2进程..."
		pm2 kill
		echo "[4]重启pm2..."
		pm2 list
	else
		echo "错误：缺少$WORKSPACE/conf/pm2.conf"
	fi
else
	echo "请先执行pm2 list"
fi
