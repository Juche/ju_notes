# pm2

## 安装 `npm install pm2 -g`

## pm2 配置文件示例

```json
{
  "apps": [
    {
      "name": "vscode-online",
      "cwd": "../../../vscode-online",
      "script": "./code-server-3.5.0-linux-x86_64/node",
      "args": "./code-server-3.5.0-linux-x86_64/out/node/entry.js --port 10242 --host 0.0.0.0 --auth none",
      "out_file": "~/aweb/logs/vscode-online-app.log", //记录标准输出流
      "error_file": "~/aweb/logs/vscode-online-err.log" //记录标准错误流
    }
  ]
}
```

## pm2 使用说明

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
