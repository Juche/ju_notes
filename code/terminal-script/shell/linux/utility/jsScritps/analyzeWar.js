const yaml = require("yaml");
const chalk = require("chalk");
const config = require("./config");
const fse = require("fs-extra");

const BFF_CONF_PATH = config.BFF_CONF_PATH;
const SCREEN_CONF_PATH = config.SCREEN_CONF_PATH;

class War {
  constructor() {}
  getBffConf = () => {
    console.log("============================== bff配置 =====================================");
    if (fse.pathExistsSync(BFF_CONF_PATH)) {
      const bffConf = yaml.parse(fse.readFileSync(BFF_CONF_PATH, "utf-8"));
      if (bffConf && bffConf.server && bffConf.server.port) {
        console.log(chalk.green("[检测]"), "bff端口:", bffConf.server.port);
        return { port: bffConf.server.port };
      } else {
        console.log(chalk.red("[错误]"), "找不到bff端口配置");
      }
    } else {
      console.log(chalk.red("[错误]"), "找不到bff配置文件:", BFF_CONF_PATH);
    }
    return false;
  };

  getScreenConf = () => {
    console.log("============================== aweb_screen配置 =====================================");
    if (fse.pathExistsSync(SCREEN_CONF_PATH)) {
      const screenConf = yaml.parse(fse.readFileSync(SCREEN_CONF_PATH, "utf-8"));
      if (screenConf && screenConf.server && screenConf.server.port) {
        console.log(chalk.green("[检测]"), "aweb_screen端口:", screenConf.server.port);
        return { port: screenConf.server.port };
      } else {
        console.log(chalk.red("[错误]"), "找不到aweb_screen端口配置");
      }
    } else {
      console.log(chalk.red("[错误]"), "找不到aweb_screen配置文件:", SCREEN_CONF_PATH);
    }
    return false;
  };
}

module.exports = new War();
