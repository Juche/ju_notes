# docker-mysql

## 操作命令

- 启动MySQL容器 `docker run -it -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=mysqlpw mysql`
- 进入容器内部 `docker exec -it mysql bash`
- 连接MySQL `mysql -uroot -p123456`

```sh
docker run -p 8080:8080 adminer

Open Adminer in your browser at: <http://localhost:8080>.

On the login screen, fill in the following fields:

System: MySQL
Host: host.docker.internal:49155
Username: root
Password: mysqlpw

---

docker exec -it mysql-TReb mysql -pmysqlpw

Now you can enter SQL commands such as show databases; to list databases, use [db_name]; to switch the context to a particular database or create database test; to create a test database.
```
