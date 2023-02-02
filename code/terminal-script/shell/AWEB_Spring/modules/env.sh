#!/bin/bash
set -e

ENV_DIR=$PACKAGE_DIR/envPackages
MONGODB_ENV_DIR=$ENV_DIR/mongodb-env


cd $ENV_DIR
if [ ! -e $MONGODB_ENV_DIR ];then
	echo "[1/4]解压文件"
	tar -zxf mongodb.env.tar
fi
echo "[2/4]安装依赖"
rpm -ivh $MONGODB_ENV_DIR/*.rpm --force --nodeps
echo "[3/4]清理文件"
rm -rf  $MONGODB_ENV_DIR
echo "[4/4]脚本结束"
