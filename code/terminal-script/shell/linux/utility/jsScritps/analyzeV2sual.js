const fse = require("fs-extra");
const chalk = require("chalk");
const config = require("./config");

const V2SUAL_PATH = config.V2SUAL_PATH;

class V2sual {
  constructor() {}
  parseSentence = () => {
    console.log("============================== v2sual配置 =====================================");
    if (fse.pathExistsSync(V2SUAL_PATH)) {
      const v2sualJson = fse.readJsonSync(V2SUAL_PATH);
      if (v2sualJson && v2sualJson.scripts && v2sualJson.scripts.v2sual) {
        const configStr = v2sualJson.scripts.v2sual;
        const sp = configStr.match(/sp=([0-9]*)/);
        const cp = configStr.match(/cp=([0-9]*)/);
        const res = {};
        if (sp) {
          console.log(chalk.green("[检测]"), "v2sual连接webide端口,sp:", sp[1]);
          res.sp = sp[1];
        } else {
          console.log(chalk.red("[错误]"), "找不到v2sual scirpts语句");
        }
        if (cp) {
          console.log(chalk.green("[检测]"), "v2sual自身端口,cp:", cp[1]);
          res.cp = cp[1];
        } else {
          console.log(chalk.red("[错误]"), "找不到v2sual scirpts语句");
        }
        return res;
      } else {
        console.log(chalk.red("[错误]"), "找不到v2sual scirpts语句");
        return false;
      }
    } else {
      console.log(chalk.red("[错误]"), "找不到v2sual配置文件:", V2SUAL_PATH);
    }
  };
  getConf() {
    console.log("============================== v2sual配置 =====================================");
    if (fse.pathExistsSync(V2SUAL_PATH)) {
      const v2Json = fse.readJsonSync(V2SUAL_PATH);
      if (v2Json.apps && v2Json.apps[0] && v2Json.apps[0].args) {
        const args = v2Json.apps[0].args;
        const res = {};
        for (let item of args) {
          const sp = item.match(/sp=([0-9]*)/);
          const cp = item.match(/cp=([0-9]*)/);
          if (sp && sp[1]) {
            console.log(chalk.green("[检测]"), "v2sual连接webide端口,sp:", sp[1]);
            res.sp = sp[1];
          }

          if (cp && cp[1]) {
            console.log(chalk.green("[检测]"), "v2sual自身端口,cp:", cp[1]);
            res.cp = cp[1];
          }

        }
          return res;
      } else {
        console.log(chalk.red("[错误]"), "解析配置文件出错");
      }
    } else {
      console.log(chalk.red("[错误]"), "找不到v2sual配置文件:", V2SUAL_PATH);
    }
    return false;
  }
}

module.exports = new V2sual();
