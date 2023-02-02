#!/bin/bash

WORKSPACE=~/aweb
NGINX_WORKSPACE=$WORKSPACE/nginx

clear

#####################################################################################################################################

stopAll(){
	stopWebide
	stopLargeScreenV2sual
	stopAwebScreen
	stopBff
	stopVSO
	stopNginx
	stopRedisSimple
}
stopWebide(){
	pm2 stop webide
}
stopLargeScreenV2sual(){
	pm2 stop largeScreen-v2sual
}
stopAwebScreen(){
	pm2 stop aweb-screen
}
stopBff(){
	pm2 stop bff
}
stopVSO(){
	pm2 stop vscode-online
}
stopRedisSimple(){
	pm2 stop redis-simple
}
stopNginx(){
	cd $NGINX_WORKSPACE
	if [ -e $NGINX_WORKSPACE/nginx.pid ];
	then
	./sbin/nginx -s stop
	echo "nginx服务停止完成"
	else
	echo "nginx服务未启动"
	fi
}

#####################################################################################################################################

printf "#######################################################################\n"
printf "                      大屏相关服务停止脚本\n"
printf "#######################################################################\n"
printf "%-5s %-10s\n" ;
printf "%-5s %-10s\n" 1 停止开发环境\(webide/largeScreen/aweb_screen/bff/nginx/redis/vscode-online\)\(pm2\)
printf "%-5s %-10s\n"
printf "%-5s %-10s\n" 2 停止nginx
printf "%-5s %-10s\n" 3 停止redis单例\(pm2\)
printf "%-5s %-10s\n"
printf "%-5s %-10s\n" 4 停止webide\(pm2\)
printf "%-5s %-10s\n" 5 停止largeScreen\(pm2\)
printf "%-5s %-10s\n" 6 停止aweb_screen\(pm2\)
printf "%-5s %-10s\n" 7 停止bff\(pm2\)
printf "%-5s %-10s\n"
printf "%-5s %-10s\n" 8 停止vscode-online\(pm2\)
# printf "%-5s %-10s\n" 9 停止mysql\(pm2\)
# printf "%-5s %-10s\n" 10 停止redis集群\(pm2\);
printf "%-5s %-10s\n" ;
echo -n "请输入:"
read number
echo "输入选项为:$number"

case $number in

1)
	stopAll
;;
2)
	stopNginx
	;;
3)
	stopRedisSimple
	;;
4)
	stopWebide
	;;
5)
	stopLargeScreenV2sual
	;;
6)
	stopAwebScreen
	;;
7)
	stopBff
	;;
8)
	stopVSO
	;;
*)
	echo "无效输入"
;;

esac
