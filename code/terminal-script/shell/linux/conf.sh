
####################################################################################################################################
#脚本相关
####################################################################################################################################

# 工作空间名称
WORKSPACE=~/aweb
# 部署资源地址
DEPLOYSOURCE_WORKSPACE=$WORKSPACE/deploySource
# 部署配置资源地址
CONF_DIR=$DEPLOYSOURCE_WORKSPACE/conf
# 部署脚本地址
SCRIPTS_DIR=$DEPLOYSOURCE_WORKSPACE/script
SCRIPT_MODULES_DIR=$SCRIPTS_DIR/modules
# 部署应用资源地址
PROJECT_PACKAGE_DIR=$DEPLOYSOURCE_WORKSPACE/projectPackages
# pm2脚本地址
SCRIPT_PM2_DIR=$DEPLOYSOURCE_WORKSPACE/script/pm2
# 环境变量文件地址
ENV_FILE=~/.bash_profile
# ENV_FILE=~/.bashrc
# 部署依赖资源地址
PACKAGE_DIR=$DEPLOYSOURCE_WORKSPACE/packages
# 临时文件存放地址
TEMP_DIR=$PACKAGE_DIR/_temp
TEMP_FILE=$DEPLOYSOURCE_WORKSPACE/_temp

####################################################################################################################################
#node安装相关
#########################################o###########################################################################################

NODE_TAR=node.tar.gz
NODE_WORKSPACE=$WORKSPACE/node
NODE_PATH="~\/aweb\/node"
TEMP_FILE=$DEPLOYSOURCE_WORKSPACE/_temp

####################################################################################################################################
#java安装相关
#########################################o###########################################################################################

JAVA_TAR=jdk.tar.gz
JAVA_WORKSPACE=$WORKSPACE/java
JAVA_PATH="~\/aweb\/java\/jdk1.8.0_161"

####################################################################################################################################
#nginx安装相关
#########################################o###########################################################################################

NGINX_TAR=nginx.tar.gz
NGINX_DIR=nginx-1.18.0
REPLACE_FILTER_TAR=replace-filter-nginx-module.tar.gz
REPLACE_FILTER_DIR=replace-filter-nginx-module
NGINX_WORKSPACE=$WORKSPACE/nginx
OFFLINE_DIR=$PACKAGE_DIR/offline-package
NGINX_CONF_DIR=$CONF_DIR/nginx
NGINX_PATH="~\/aweb\/nginx"

####################################################################################################################################
#redis安装相关
####################################################################################################################################

REDIS_DIR=$WORKSPACE/redis
REDIS_TAR=redis.tar.gz
REDIS_WORKSPACE=$REDIS_DIR/redis-5.0.2
REDIS_CONF_DIR=$CONF_DIR/redis
REDIS_PATH="~\/aweb\/redis\/redis-5.0.2"

####################################################################################################################################
#mysql安装相关
####################################################################################################################################

MYSQL_CONF_DIR=$CONF_DIR/mysql

####################################################################################################################################
#应用相关
####################################################################################################################################

SCRIPT_BACKEND_DIR=$DEPLOYSOURCE_WORKSPACE/script/backend
SCRIPT_MODULES_DIR=$DEPLOYSOURCE_WORKSPACE/script/modules
AWEB_SCREEN_CONF_DIR=$CONF_DIR/aweb_screen
BFF_CONF_DIR=$CONF_DIR/bff

####################################################################################################################################
#应用更新备份相关
####################################################################################################################################

SCHEMA_CONF_DIR=$CONF_DIR/bff
AWEB_SCREEN_WORKSPACE=$WORKSPACE/aweb_screen
BFF_WORKSPACE=$WORKSPACE/bff
# 项目备份文件夹
ORDER_DIR=~/older
