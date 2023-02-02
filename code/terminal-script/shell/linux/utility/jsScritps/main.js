const chalk = require("chalk");

const nginxIns = require("./analyzeNginxConf");
const v2sualIns = require("./analyzeV2sual");
const webidelIns = require("./analyzeWebide");
const warIns = require("./analyzeWar");
class Main {
  constructor() {
    this.webideRes = webidelIns.getConf();
    this.v2sualRes = v2sualIns.getConf();
    this.bffRes = warIns.getBffConf();
    this.screenRes = warIns.getScreenConf();
    this.nginxRes = nginxIns.getConf();
    this.verify();
  }

  verify = () => {
    console.log("============================== 检测结果 =====================================");
    let webidePort = this.webideRes.port;
    let bffPort = this.bffRes.port;
    let flag = true;
    if (!this.webideRes) {
      flag = false;
      console.log(chalk.red("[错误]"), "缺少webide配置");
    }
    if (!this.v2sualRes) {
      flag = false;
      console.log(chalk.red("[错误]"), "缺少v2sual配置");
    } else {
      if (this.v2sualRes.sp != webidePort) {
        flag = false;
        console.log(chalk.red("[错误]"), "v2sual配置中webide端口与配置不符");
      }
    }

    for (let item of this.nginxRes) {
      if (item.namespace === "/") {
        flag = false;
        const nginxWebide = item.content.match(/:([0-9]+)/)[1];
        if (nginxWebide != webidePort) {
          console.log(chalk.red("[错误]"), "nginx配置中webide映射端口与配置不符");
        }
      }

      if (item.namespace.replace(/\//g, "") == "v1") {
        flag = false;
        const nginxV1 = item.content.match(/:([0-9]+)/)[1];
        if (!this.v2sualRes || nginxV1 != this.v2sualRes.cp) {
          console.log(chalk.red("[错误]"), "nginx配置中v2sual映射端口与配置不符");
        }
      }

      if (item.namespace.replace(/\//g, "") == "bff-api") {
        flag = false;
        const nginxBff = item.content.match(/:([0-9]+)/)[1];
        if (nginxBff != this.bffRes.port) {
          console.log(chalk.red("[错误]"), "nginx配置中bff映射端口与配置不符");
        }
      }

      if (item.namespace.replace(/\//g, "") == "aweb-api") {
        flag = false;
        const nginxScreen = item.content.match(/:([0-9]+)/)[1];
        if (nginxScreen != this.screenRes.port) {
          console.log(chalk.red("[错误]"), "nginx配置中aweb_screen映射端口与配置不符");
        }
      }
    }
    if (flag) console.log(chalk.green("检测通过"));
  };
}
new Main();
