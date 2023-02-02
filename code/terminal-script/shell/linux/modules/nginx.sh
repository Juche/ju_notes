#!/bin/bash
set -e 

cd $PACKAGE_DIR

####################################################################################################################################

echo "[1]进入$PACKAGE_DIR"
tar -zxf offline-package.tar.gz
tar -zxf $NGINX_TAR
tar -zxf $REPLACE_FILTER_TAR

####################################################################################################################################

echo "[2]解压完成"
cd $NGINX_DIR

####################################################################################################################################

echo "[3]开始配置"

# TODO:
# [x] 添加可选项,是否安装 replace-filter 模块
# [v] 统一安装该模块,在对应位置给清晰的提示

echo $PACKAGE_DIR
./configure \
	--prefix=$NGINX_WORKSPACE \
	--sbin-path=$NGINX_WORKSPACE/sbin/nginx \
	--conf-path=$NGINX_WORKSPACE/nginx.conf \
	--pid-path=$NGINX_WORKSPACE/nginx.pid \
	--with-pcre=$OFFLINE_DIR/pcre-8.42 \
	--with-zlib=$OFFLINE_DIR/zlib-1.2.11\
	--with-openssl=$OFFLINE_DIR/openssl \
  --add-module=$PACKAGE_DIR/$REPLACE_FILTER_DIR

####################################################################################################################################

echo "[4]开始编译"
make
echo "编译结束是否开始安装 [Y/N] :"
read installPremission
if [ $installPremission == y ]||[ $installPremission == Y ];
then
	make install
	echo "[5]安装完成"
	echo "[6]拷贝配置文件"
	if [ -e $NGINX_CONF_DIR/nginx.conf ];then
		cp -f $NGINX_CONF_DIR/nginx.conf $NGINX_WORKSPACE/nginx.conf
		else
		echo -e "\033[33m[注意]\033[0m 没有找到默认配置文件：$NGINX_CONF_DIR/nginx.conf"
	fi
	if [ -e $NGINX_CONF_DIR/socket.conf ];then
		cp -f $NGINX_CONF_DIR/socket.conf $NGINX_WORKSPACE/socket.conf
		else
		echo -e "\033[33m[注意]\033[0m 没有找到默认配置文件：$NGINX_CONF_DIR/socket.conf"
	fi
fi

rm -rf $PACKAGE_DIR/$NGINX_DIR
rm -rf $OFFLINE_DIR
rm -rf $PACKAGE_DIR/$REPLACE_FILTER_DIR

####################################################################################################################################

echo "[6]添加至环境变量" 
echo "$NGINX_WORKSPACE" 

# if [ -e $TEMP_FILE ];then
# 	rm -f $TEMP_FILE
# fi

cp -f $ENV_FILE $TEMP_FILE
sed -i "/export NGINX_HOME=$NGINX_PATTH/d" $TEMP_FILE
sed -i "/export NGINX_PATH=$NGINX_PATTH\/sbin/d" $TEMP_FILE
sed -i "/PATH=\${NGINX_PATH}:\$PATH/d" $TEMP_FILE
sed -i "s/export PATH/export NGINX_HOME=$NGINX_PATH\nexport NGINX_PATH=$NGINX_PATH\/sbin\nPATH=\${NGINX_PATH}:\$PATH\nexport PATH/g" $TEMP_FILE

####################################################################################################################################

echo "[7]生成配置，请确认文件是否正确" 
echo "===================== $ENV_FILE =========================" 
cat $TEMP_FILE
echo "=========================================================" 
echo "是否开始让新环境变量生效【Y/N】:"
read comfire
if [ $comfire == y ]||[ $comfire == Y ];
then
	cp -f $TEMP_FILE $ENV_FILE
	source $ENV_FILE
	echo "[8]配置完成,脚本结束"
	echo "关闭重新打开终端，使环境变量生效。或者手动执行source $ENV_FILE"
fi
rm $TEMP_FILE
