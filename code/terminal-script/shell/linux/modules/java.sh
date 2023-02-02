#!/bin/bash
set -e

cd $PACKAGE_DIR
echo "开始安装JDK"
if [ -e $JAVA_WORKSPACE ];then
       echo "清理已存在$JAVA_WORKSPACE"	
	rm -rf $JAVA_WORKSPACE 
fi	

####################################################################################################################################

echo "[1]创建java工作空间"
mkdir -p $JAVA_WORKSPACE

####################################################################################################################################

echo "[2]开始解压..."
tar -zxf $JAVA_TAR -C $JAVA_WORKSPACE

####################################################################################################################################

echo "[3]添加至环境变量" 
cp -f $ENV_FILE $TEMP_FILE
sed -i "/export JAVA_HOME=$JAVA_PATH/d" $TEMP_FILE
sed -i "/export JRE_HOME=$JAVA_PATH\/jre/d" $TEMP_FILE
sed -i "/export CLASSPATH=\${JAVA_HOME}\/lib:\${JRE_HOME}\/lib/d" $TEMP_FILE
sed -i "/export JAVA_PATH=\${JAVA_HOME}\/bin:\${JRE_HOME}\/bin/d" $TEMP_FILE
sed -i "/PATH=\${JAVA_PATH}:\$PATH/d" $TEMP_FILE
sed -i "s/export PATH/export JAVA_HOME=$JAVA_PATH\nexport JRE_HOME=$JAVA_PATH\/jre\nexport CLASSPATH=\${JAVA_HOME}\/lib:\${JRE_HOME}\/lib\nexport JAVA_PATH=\${JAVA_HOME}\/bin:\${JRE_HOME}\/bin\nPATH=\${JAVA_PATH}:\$PATH\nexport PATH/g" $TEMP_FILE

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
	source $ENV_FILE
	echo "[5]配置完成,脚本结束"
	echo "关闭重新打开终端，使环境变量生效。或者手动执行source $ENV_FILE"
fi
rm $TEMP_FILE
