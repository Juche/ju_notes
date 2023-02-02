#!/bin/bash
set -e

PACKAGES_PATH=~/webide/packages
CODE_WORKSPACE=~/webide/vscode-online/code-server-*
CODE_PATH=~/.local/share/code-server
EXTENSIONS_PATH=$CODE_PATH/extensions

if [ ! -e $EXTENSIONS_PATH ];then
	echo "创建$EXTENSIONS_PATH"
	mkdir -p $EXTENSIONS_PATH
fi

echo "解压vsix插件..."
tar -zxf $PACKAGES_PATH/vsix.tar.gz -C $EXTENSIONS_PATH
echo "脚本结束"
