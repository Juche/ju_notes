const path = require("path");
const config = {
  V2SUAL_PATH: path.join(__dirname, "..", "..","pm2", "largeScreen-v2sual.json"),
  // WEBIDE_PATH: path.join(__dirname, "..", "..","..", "conf","webide","webide.json"),
  WEBIDE_PATH: path.join(__dirname, "..", "..","..", "..", "webide","config","webide.json"),
  // const NGINX_CONF_PATH='~/aweb/nginx/nginx.conf';
  NGINX_CONF_PATH: path.join(__dirname, "..", "..","..","conf","nginx", "nginx.conf"),
  BFF_CONF_PATH:path.join(__dirname, "..", "..", "..","conf","bff","application.yml"),
  SCREEN_CONF_PATH:path.join(__dirname, "..", "..", "..","conf","aweb_screen","application.yml"),
};
module.exports = config;
