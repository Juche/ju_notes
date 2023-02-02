# 使用文档

## 1.自动化部署资源整理

自动化部署资源放在 `aweb/deploySource` 文件夹内
把网盘里的 `packages`, `conf` 和 `script` 个文件夹拷贝至 `aweb/deploySource` 下,
项目资源放在 `aweb/deploySource/projectPackages` 中，项目资源包含 webide.zip, largeScreen.zip, bff.war 和 aweb_screen.war
文件结构应该如下：

```sh
aweb/deploySource
├── conf                # 配置文件
├── packages            # 环境包
├── projectPackages     # 项目包
└── script              # 安装脚本
```

## 2.修改配置 & 安装依赖

1. 根据实际情况修改配置文件

```sh
# 部署位置配置文件(一般不用改动)
script/conf.sh

# 项目及依赖环境相关配置(根据实际情况修改配置)
aweb/deploySource/conf
├── aweb_screen    # 大屏管理端外置的配置文件(数据库,redis,rabbitmq等配置)
├── bash           # 备用的环境变量文件(可不动)
├── bff            # bff外置的配置文件(redis,schema.json)
├── mysql          # 数据库初始脚本
├── nginx          # 前后端资源代理配置
├── redis          # redis单例和集群配置文件
└── ...
```

2. 安装脚本依赖(aweb/deploySource/script/utility用于检测配置文件)

> 提供给市场使用前,需先安装好依赖
在 `aweb/deploySource/script/utility/jsScritps` 目录执行 `npm install` 安装依赖

## 3.安装部署

1.上传资源到服务器

第一次部署: 将全部资源(aweb包)上传到用户更目录 `~`

项目更新部署: 将需更新的资源(webide.zip, largeScreen.zip, bff.war 或 aweb_screen.war)上传到 `~/aweb/deploySource/projectPackages` 中

2.在服务器输入脚本

```sh
bash ~/aweb/deploySource/script/main.sh
```

3.根据输出的选项输入对应的序号进行操作
> NOTES:
> 如果是第一次部署安装,则按从 `1--7` 的顺序依次 **按需** 执行
> 如果是后续项目进行更新则先将需更新的项目放到 `~/aweb/deploySource/projectPackages` 然后执行选项 `8`
> 所有操作都在当前用户(部署项目的用户)下执行脚本
> 选项二需要的root权限使用的sudo命令,在命令提示输管理员密码时输入密码即可(注意输入密码没有回显)

```sh
#######################################################################
                      AWEB大屏管理端脚本
#######################################################################
1     检测环境信息
2     使用root权限安装工具
3     安装基本工具
4     部署应用
5     检测配置文件
6     启动应用
7     停止应用
8     部署更新应用(更新会备份项目)
请输入:
```

---

## 4.补充说明

### 数据库说明

#### 自己安装数据库

如果是自己安装mysql数据库,上述安装部署`使用root权限安装工具`选项里提供了数据库的安装初/始化化/数据导入等操作

#### 使用已有数据库

如果使用已有的mysql数据库,则需要自行建库和导入数据,并修改`aweb_screen/application.yml`的数据库连接配置正确

+ 导入数据库

```sh
mysql -u root -p
# 先创建数据库 aweb_screen
mysql>create DATABASE aweb_screen;
mysql>use aweb_screen;
mysql>source /home/dpusr/aweb/deploySource/conf/mysql/aweb_screen.sql;
# mysql -uroot -p aweb_screen < /home/dpusr/aweb/deploySource/conf/mysql/aweb_screen.sql
```

+ mysql启停

```sh
# 启动
systemctl start mysqld
# 停止
systemctl stop mysqld
# 重启
systemctl restart mysqld
## 查看运行状态
systemctl status mysqld
```

### redis说明

#### redis单例模式

直接使用上述安装部署`启动应用`下的`启动redis单例`选项启动

#### redis集群模式

> 实际生产环境节点部署在不同服务器上
> 下面以开发环境的一台服务器启动不同端口的节点为例

1. 启动节点

```sh
cd ~/aweb/redis/redis-5.0.2/src

./redis-server ../../conf/redis-7000.conf &
./redis-server ../../conf/redis-7001.conf &
./redis-server ../../conf/redis-7002.conf &
./redis-server ../../conf/redis-7003.conf &
./redis-server ../../conf/redis-7004.conf &
./redis-server ../../conf/redis-7005.conf &

```

2.启动集群

```sh
# DEV: 10.8.222.124
# 因为开发环境只有一台服务器部署redis，所以把节点都起在同一台服务器上

cd ~/aweb/redis/redis-5.0.2/src

# DEV
./redis-cli --cluster create 10.8.222.124:7000 10.8.222.124:7001 10.8.222.124:7002 10.8.222.124:7003 10.8.222.124:7004 10.8.222.124:7005 --cluster-replicas 1

# 查看集群状态
## 先登录一个节点
./redis-cli -p 7000
## 查看节点主从信息
cluster nodes
```

3.关闭节点

```sh
cd ~/aweb/redis/redis-5.0.2/src
# 关闭节点
./redis-cli -p 7000 shutdown
./redis-cli -p 7001 shutdown
./redis-cli -p 7002 shutdown
./redis-cli -p 7003 shutdown
./redis-cli -p 7004 shutdown
./redis-cli -p 7005 shutdown

```

4.重置配置

```sh
cd ~/aweb/redis/redis-5.0.2/src
# 在对应的节点重置数据
redis-cli -p 7000
# 重置数据
127.0.0.1:7000> CLUSTER RESET
# 检查状态
127.0.0.1:7000> cluster info

#  缓存文件位置
cd ~/aweb/redis/data/节点端口对应文件夹
```

5.redis节点报错

```sh
# cluster reset can't be called with master nodes containing keys
# node {ip}:{port} is not empty ...

1.先关闭redis节点
2.删除节点对应的 appendonly.aof  dump.rdb  nodes-7000.conf 文件
3.重启节点和集群
```

### pm2使用说明

列出所有应用：pm2 list 查看每个应用的 名称、id、状态等

停止某个应用：pm2 stop app_name / app_id
停止所有应用：pm2 stop all

删除某个应用：pm2 delete app_name / app_id
删除所有应用：pm2 delete all

重启某个应用：pm2 restart app_name / app_id
重启所有应用：pm2 restart all

查看某个应用的日志：pm2 logs app_name / app_id
查看所有应用的日志：pm2 logs

查看应用的信息 pm2 info app_name / app_id
