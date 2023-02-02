const fse = require("fs-extra");
const chalk = require("chalk");
const config = require("./config");
const ConfigParser = require("@webantic/nginx-config-parser");
const parser = new ConfigParser();

const NGINX_CONF_PATH = config.NGINX_CONF_PATH;

class Nginx {
  constructor() {}

  getHost = (nginxConf) => {
    if (nginxConf && nginxConf.http && nginxConf.http.server && nginxConf.http.server.listen) {
      return { port: nginxConf.http.server.listen, ip: nginxConf.http.server.server_name };
    } else {
      return false;
    }
  };

  getLocation = (nginxConf) => {
    if (nginxConf && nginxConf.http) {
      const res = [];
      const confHttp = nginxConf.http;
      const confServer = confHttp.server;
      for (let i in confHttp) {
        if (i.indexOf("location") !== -1 && confHttp[i].proxy_pass) {
          res.push({ namespace: i.replace("location", "").trim(), content: confHttp[i].proxy_pass });
        }
      }
      for (let i in confServer) {
        if (i.indexOf("location") !== -1 && confServer[i].proxy_pass) {
          res.push({ namespace: i.replace("location", "").trim(), content: confServer[i].proxy_pass });
        }
      }
      return res;
    } else {
      return false;
    }
  };

  getConf = () => {
    console.log("============================== NGINX配置 =====================================");
    if (fse.pathExistsSync(NGINX_CONF_PATH)) {
      const nginxConf = parser.readConfigFile(NGINX_CONF_PATH, {
        parseIncludes: false,
      });
      const locationConf = this.getLocation(nginxConf);
      const portConf = this.getHost(nginxConf);
      this.printRes({ location: locationConf, port: portConf.port, ip: portConf.ip });
      return locationConf;
    } else {
      console.log(chalk.red("[错误]"), "找不到nginx配置文件:", NGINX_CONF_PATH);
      return false;
    }
  };

  printRes = ({ location, port, ip }) => {
    if (port) {
      console.log(chalk.green("[检测]"), "nginx端口:", port);
    } else {
      console.log(chalk.red("[错误]"), "找不到nginx配置端口");
    }
    if (ip) {
      console.log(chalk.green("[检测]"), "nginx ip:", ip);
    } else {
      console.log(chalk.red("[错误]"), "找不到nginx配置ip");
    }

    for (let item of location) {
      console.log(chalk.green("[检测]"), item.namespace, "代理至：", item.content);
    }
  };
}
const nginxIns = new Nginx();
module.exports = nginxIns;
