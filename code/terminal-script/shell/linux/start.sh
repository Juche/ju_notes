#!/bin/bash
set +e 

clear

#####################################################################################################################################

startWebide() {
	cd $SCRIPT_PM2_DIR
	pm2 delete webide 2>&1 
	pm2 start ./webide.json
}
startVSO() {
	cd $SCRIPT_PM2_DIR
	pm2 delete vscode-online  2>&1 
	pm2 start ./vscode-online.json
}
startLargeScreenV2sual() {
	cd $SCRIPT_PM2_DIR
	pm2 delete largeScreen-v2sual  2>&1 
	pm2 start ./largeScreen-v2sual.json
}
startNginx() {
	cd $NGINX_WORKSPACE
	if [ -e $NGINX_WORKSPACE/nginx.pid ]; then
		echo "nginx服务已启动，正在reload..."
		./sbin/nginx -s reload
	else
		echo "nginx服务正在启动..."
		./sbin/nginx
	fi
	echo "nginx服务启动完成"

}
startAwebScreen() {
	if [ -e $PROJECT_PACKAGE_DIR/aweb_screen.war ]; then
		cd $SCRIPT_PM2_DIR
		pm2 delete aweb-screen
		pm2 start ./aweb_screen.json
	else
		echo "找不到$PROJECT_PACKAGE_DIR/aweb_screen.war"
	fi
}
startBff() {
	if [ -e $PROJECT_PACKAGE_DIR/bff.war ]; then
		cd $SCRIPT_PM2_DIR
		pm2 delete bff
		pm2 start ./bff.json
	else
		echo "找不到$PROJECT_PACKAGE_DIR/bff.war"
	fi
}
# startMysql() {
# 	if [ -e $WORKSPACE/mysql ]; then
# 		cd $SCRIPT_PM2_DIR
# 		# pm2 delete mysql
# 		pm2 start ./mysql.json
# 	fi
# }
startRedisSimple() {
	if [ -e $WORKSPACE/redis ]; then
		cd $SCRIPT_PM2_DIR
		pm2 delete redis-simple
		pm2 start ./redis-simple.json
	fi
}
startAll() {
	startWebide
	startLargeScreenV2sual
	startNginx
	startAwebScreen
	startBff
	startVSO
	# startMysql
	startRedisSimple
}
# startRedisCluster(){
# 	if [ -e $WORKSPACE/redis ];then
# 		cd $SCRIPT_PM2_DIR
# 		pm2 start ./redis-cluster.json
# 	fi
# }

#####################################################################################################################################

printf "#######################################################################\n"
printf "                      大屏相关环境项目部署启动脚本\n"
printf "#######################################################################\n"
printf "%-5s %-10s\n"
printf "%-5s %-10s\n" 1 启动开发环境\(webide/largeScreen/aweb_screen/bff/nginx/redis/vscode-online\)\(pm2\)
printf "%-5s %-10s\n"
printf "%-5s %-10s\n" 2 启动nginx
printf "%-5s %-10s\n" 3 启动redis单例\(pm2\)
printf "%-5s %-10s\n"
printf "%-5s %-10s\n" 4 启动webide\(pm2\)
printf "%-5s %-10s\n" 5 启动largeScreen\(pm2\)
printf "%-5s %-10s\n" 6 启动aweb_screen\(pm2\)
printf "%-5s %-10s\n" 7 启动bff\(pm2\)
printf "%-5s %-10s\n"
printf "%-5s %-10s\n" 8 启动vscode-online\(pm2\)
# printf "%-5s %-10s\n" 9 启动mysql\(pm2\)
# printf "%-5s %-10s\n" 10 启动redis集群\(pm2\);
printf "%-5s %-10s\n"
echo -n "请输入:"
read number
echo "输入选项为:$number"

case $number in
1)
	startAll
;;
2)
	startNginx
	;;
3)
	startRedisSimple
	;;
4)
	startWebide
	;;
5)
	startLargeScreenV2sual
	;;
6)
	startAwebScreen
	;;
7)
	startBff
	;;
8)
	startVSO
	;;
*)
	echo "无效输入"
	;;

esac
echo "脚本结束"
