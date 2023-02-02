#!/bin/bash
set -e 

cd $PACKAGE_DIR
####################################################################################################################################

echo "开始安装redis"
if [ -e $REDIS_DIR ];then
	echo "移除原有redis文件夹"
	rm -rf $REDIS_DIR
fi

####################################################################################################################################

echo "[1]创建redis工作空间"
mkdir -p $REDIS_DIR
# 创建一些目录防止后续报错
mkdir -p $REDIS_DIR/conf
mkdir -p $REDIS_DIR/pid
mkdir -p $REDIS_DIR/data
mkdir -p $REDIS_DIR/data/{7000..7005}

####################################################################################################################################

echo "[2]开始解压..."
tar -zxf $PACKAGE_DIR/$REDIS_TAR -C $REDIS_DIR

####################################################################################################################################

echo "[3]开始编译"
cd $REDIS_WORKSPACE
make
echo "[4]编译完成"
if [ -e $REDIS_CONF_DIR/conf/ ];then
	echo "[5]拷贝配置文件"
	cp $REDIS_CONF_DIR/conf/* $REDIS_DIR/conf/
fi

####################################################################################################################################

echo "[6]添加至环境变量" 

# if [ -e $TEMP_FILE ];then
# 	rm -f $TEMP_FILE
# fi
cp -f $ENV_FILE $TEMP_FILE
sed -i "/export REDIS_HOME=$REDIS_PATH/d" $TEMP_FILE
sed -i "/export REDIS_PATH=$REDIS_PATH\/src/d" $TEMP_FILE
sed -i "/PATH=\${REDIS_PATH}:\$PATH/d" $TEMP_FILE
sed -i "s/export PATH/export REDIS_HOME=$REDIS_PATH\nexport REDIS_PATH=$REDIS_PATH\/src\nPATH=\${REDIS_PATH}:\$PATH\nexport PATH/g" $TEMP_FILE

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
