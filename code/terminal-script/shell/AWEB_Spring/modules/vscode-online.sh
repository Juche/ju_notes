#!/bin/bash
set -e

VSO_DIR=$WORKSPACE/vscode-online
VSO_TAR=vscode-online.tar.gz
CODD_LOCAL_DIR=~/.local/share/code-server

cd $PACKAGE_DIR
echo "开始安装vscode-online"
if [ -e $VSO_DIR ];then
       echo "清理已存在$VSO_DIR"	
	rm -rf $VSO_DIR
fi	
if [ -e $CODD_LOCAL_DIR ];then
       echo "清理已存在$CODD_LOCAL_DIR"	
	rm -rf $CODD_LOCAL_DIR
fi	

####################################################################################################################################

echo "[1]创建vscode-online"
mkdir -p $VSO_DIR

####################################################################################################################################

echo "[2]开始解压..."
tar -zxf $VSO_TAR -C $VSO_DIR
echo "[3]解压完成"

####################################################################################################################################

echo "[4]开始安装vscode插件"
sh  $SCRIPT_DIR/vsix.sh
