#!/bin/bash
set -e 
clear

if [ ! -e  $SCRIPTS_DIR/utility/node ];then 
    echo "生成临时node"
    mkdir -p $SCRIPTS_DIR/utility/node 
    tar -zxf $DEPLOYSOURCE_WORKSPACE/packages/node.tar.gz -C $SCRIPTS_DIR/utility/node
fi

$SCRIPTS_DIR/utility/node/nodejs/bin/node $SCRIPTS_DIR/utility/jsScritps/main.js

echo "========================== 脚本结束 =================================="