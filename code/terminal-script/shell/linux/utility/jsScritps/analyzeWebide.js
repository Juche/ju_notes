const fse = require("fs-extra");
const chalk = require("chalk");
const config = require("./config");

const WEBIDE_PATH = config.WEBIDE_PATH;

class Webide {
  constructor() {}
  getConf = () => {
    console.log("============================== webide配置 =====================================");
    if (fse.pathExistsSync(WEBIDE_PATH)) {
      const webideJson = fse.readJsonSync(WEBIDE_PATH);
      if (webideJson && webideJson.server && webideJson.server.port) {
        console.log(
          chalk.green("[检测]"),
          "webide端口:",
          webideJson.server.port
        );
        return { port: webideJson.server.port };
      } else {
        console.log(chalk.red("[错误]"), "找不到webide端口配置");
      }
    } else {
      console.log(chalk.red("[错误]"), "找不到webide配置文件:", WEBIDE_PATH);
    }
    return false;
  };
}

module.exports = new Webide();
