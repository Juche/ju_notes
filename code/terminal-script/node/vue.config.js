const path = require('path');
const config = require('./config/config.json');
const chalk = require('chalk');
const serve = config.serve;
const dataSource = config.dataSource;
let proxy = {};
if (dataSource) {
  dataSource.proxy.map((config) => {
    proxy[dataSource.base + config.source] = config;
  });
}

module.exports = {
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: serve.port,
    disableHostCheck: true,
    hot: true,
    proxy: {
      '/mock': {
        target: `http://localhost:${serve.mockPort}`,
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false, // 设置支持https协议的代理
        ws: false,
        bypass: function (req, res, proxyOptions) {
          console.log(chalk.magentaBright(`\n > ${req.url}`));
        },
        pathRewrite: {},
      },
      '/asset': {
        target: `https://gallerybox.echartsjs.com/asset`,
        // target: `http://127.0.0.1:8066/aweb-api`,
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false, // 设置支持https协议的代理
        ws: true,
        bypass: function (req, res, proxyOptions) {
          console.log(chalk.magentaBright(`\n > ${req.url}`));
        },
        pathRewrite: {
          '^/asset': '',
        },
      },
      '/aweb-api': {
        // target: `https://vue-api.awebide.com/aweb-api`,
        // target: `https://screen.aui2.cn/aweb-api`,
        target: `https://screen.awebide.com/aweb-api/`,
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false, // 设置支持https协议的代理
        ws: true,
        bypass: function (req, res, proxyOptions) {
          console.log(chalk.magentaBright(`\n > ${req.url}`));
        },
        pathRewrite: {
          '^/aweb-api': '',
        },
      },
      ...proxy,
    },
    after(app) {},
  },
  chainWebpack(config) {
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        return {
          ...options,
          esModule: false,
        };
      });
    config.module
      .rule('compile')
      .test(/\.js$/)
      .include.add(path.resolve(__dirname, 'node_modules/@v2-lib'))
      .add(path.resolve(__dirname, 'node_modules/element-ui/src/utils/dom.js'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .options({
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
        ],
      });

    if (!(process.argv.includes('--target') && process.argv.includes('lib'))) {
      config.module
        .rule('import-rule')
        .test(/_spa_import\.js/g)
        .use(
          path.resolve(
            __dirname,
            './node_modules/@v2-lib/vue.spa.plugin/loaders/import_loader.js'
          )
        )
        .loader(
          path.resolve(
            __dirname,
            './node_modules/@v2-lib/vue.spa.plugin/loaders/import_loader.js'
          )
        )
        .end();
    }
  },
  filenameHashing: false,
  css: {
    modules: false,
    extract: true,
    sourceMap: false,
    loaderOptions: {
      sass: {
        // 向全局sass样式传入共享的全局变量(这里同时引入了element-ui的全局变量 && 项目的变量)
        data:
          '@import "~@/scss/element-variables.scss"; @import "~@/scss/project-variables.scss";',
      },
    },
  },
};
