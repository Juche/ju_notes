#!/bin/bash
set -e

NODE_TAR=node.tar.gz
NODE_WORKSPACE=$WORKSPACE/node
NODE_PATH="~\/webide\/node"

cd $PACKAGE_DIR
if [ -e $NODE_WORKSPACE ];then
       echo "清理已存在$NODE_WORKSPACE"	
	rm -rf $NODE_WORKSPACE
fi	

####################################################################################################################################

echo "[1]创建node工作空间"
mkdir -p $NODE_WORKSPACE

####################################################################################################################################

echo "[2]开始解压..."
tar -zxf ./node.tar.gz -C $NODE_WORKSPACE

####################################################################################################################################

echo "[3]添加至环境变量" 
cp -f $ENV_FILE $TEMP_FILE
sed -i "/PATH=$NODE_PATH\/nodejs\/bin:$NODE_PATH\/global_modules\/bin:\$PATH/d" $TEMP_FILE
sed -i "s/export PATH/PATH=$NODE_PATH\/nodejs\/bin:$NODE_PATH\/global_modules\/bin:\$PATH\nexport PATH/g" $TEMP_FILE

####################################################################################################################################

echo "[4]生成配置，请确认文件是否正确" 
echo "===================== $ENV_FILE =========================" 
cat $TEMP_FILE
echo "=========================================================" 
echo "是否开始让新环境变量生效【Y/N】:"
read comfire
if [ $comfire == y ]||[ $comfire == Y ];
then
	cp -f $TEMP_FILE $ENV_FILE
	echo "[5]配置完成,脚本结束"
	echo "关闭重新打开终端，使环境变量生效。或者手动执行source $ENV_FILE"
fi
rm -f $TEMP_FILE
