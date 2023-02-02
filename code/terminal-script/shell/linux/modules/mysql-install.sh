#!/bin/bash
set -e 

MYSQL_DIR=$WORKSPACE
MYSQL_TAR=mysql-5.7.31-el7-x86_64.tar.gz
MYSQL_WORKSPACE=$MYSQL_DIR/mysql
MYSQL_CONF_DIR=$CONF_DIR/mysql

cd $PACKAGE_DIR

####################################################################################################################################

echo "[1]开始安装mysql"
# echo "[1]创建mysql工作空间"
# # mkdir -p $MYSQL_DIR
# mkdir -p $MYSQL_WORKSPACE

####################################################################################################################################

echo "[2]开始解压..."
tar -zxf $PACKAGE_DIR/$MYSQL_TAR -C $MYSQL_DIR
mv $MYSQL_DIR/mysql-5.7.31-el7-x86_64 $MYSQL_WORKSPACE

####################################################################################################################################

echo "[3]拷贝mysql配置&数据库脚本文件"
if [ -e $MYSQL_CONF_DIR ];then
	cp $MYSQL_CONF_DIR/* $MYSQL_WORKSPACE/
fi

####################################################################################################################################

echo "[4]生成配置文件"
cd $MYSQL_WORKSPACE
# BASE_PATH=$PWD
if [ -e $MYSQL_WORKSPACE/my.cnf ];then
	rm -f $MYSQL_WORKSPACE/my.cnf
fi
echo "[client]" > $MYSQL_WORKSPACE/my.cnf
echo port=3306 >> $MYSQL_WORKSPACE/my.cnf
echo socket=$MYSQL_WORKSPACE/mysql.sock >> $MYSQL_WORKSPACE/my.cnf
echo "[mysqld]" >> $MYSQL_WORKSPACE/my.cnf
echo "port=3306" >> $MYSQL_WORKSPACE/my.cnf
echo "basedir=$MYSQL_WORKSPACE" >> $MYSQL_WORKSPACE/my.cnf
echo "datadir=$MYSQL_WORKSPACE/data" >> $MYSQL_WORKSPACE/my.cnf
echo "pid-file=$MYSQL_WORKSPACE/mysql.pid" >> $MYSQL_WORKSPACE/my.cnf
echo "socket=$MYSQL_WORKSPACE/mysql.sock" >> $MYSQL_WORKSPACE/my.cnf
echo "log_error=$MYSQL_WORKSPACE/error.log" >> $MYSQL_WORKSPACE/my.cnf
echo "server_id=100" >> $MYSQL_WORKSPACE/my.cnf

####################################################################################################################################

echo "[5]开始安装mysql"

bin/mysqld \
--defaults-file=$MYSQL_WORKSPACE/my.cnf \
--initialize \
--user=test \
--basedir=$MYSQL_WORKSPACE \
--datadir=$MYSQL_WORKSPACE/data
