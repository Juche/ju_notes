#!/bin/bash
set -e

MAVEN_TAR=maven.tar.gz
MAVEN_WORKSPACE=$WORKSPACE/maven
MAVEN_DIR=$MAVEN_WORKSPACE/apache-maven-3.6.3
MAVEN_PATH="~\/webide\/maven\/apache-maven-3.6.3"
M2_PATH=~/.m2
REPOSITORY_PATH=$M2_PATH/repository 

cd $PACKAGE_DIR
echo "开始安装maven"

if [ -e $MAVEN_WORKSPACE ];then
       echo "清理已存在$MAVEN_WORKSPACE"	
	rm -rf $MAVEN_WORKSPACE
fi	
if [ -e $M2_PATH ];then
       echo "清理已存在$M2_PATH"	
	rm -rf $M2_PATH
fi	

####################################################################################################################################

echo "[1]创建maven工作空间"
mkdir -p $MAVEN_WORKSPACE

####################################################################################################################################

echo "[2]开始解压..."
tar -zxf $MAVEN_TAR -C $MAVEN_WORKSPACE

####################################################################################################################################

echo "[3]添加至环境变量" 
cp -f $ENV_FILE $TEMP_FILE
sed -i "/PATH=$MAVEN_PATH\/bin:\$PATH/d" $TEMP_FILE
sed -i "s/export PATH/PATH=$MAVEN_PATH\/bin:\$PATH\nexport PATH/g" $TEMP_FILE

####################################################################################################################################

if [ -e $CONF_DIR/mvn-settings.xml ];then
	echo "拷贝maven settings.xml"
	cp -f $CONF_DIR/mvn-settings.xml $MAVEN_DIR/conf/settings.xml 
fi

####################################################################################################################################

if [ -e $PACKAGE_DIR/mvn-repository.tar.gz ];then
	echo "拷贝repository"
	if [ ! -e $REPOSITORY_PATH ];then
		mkdir -p $REPOSITORY_PATH 
	fi
	tar -zxf $PACKAGE_DIR/mvn-repository.tar.gz -C $REPOSITORY_PATH
fi

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
rm -f $TEMP_FILE

