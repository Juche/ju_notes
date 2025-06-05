# vite构建vue-ts-ant项目

```sh
# 1. 创建项目
yarn create vite
# 2. 安装 & 使用 ant
yarn add ant-design-vue@next
## 使用 ant(放到 vite.config.js 中通过 vite-plugin-components 按需引入)
  # # 1. 在 mian 入口文件引入
  # import Antd from 'ant-design-vue'
  # import 'ant-design-vue/dist/antd.css'
  # createApp(App).use(Antd).mount('#app')
  # # import DatePicker from "ant-design-vue/lib/date-picker"; // 加载 JS
  # # import "ant-design-vue/lib/date-picker/style/css"; // 加载 CSS

  # # 2. 使用 babel-plugin-import 进行按需加载
  # yarn add babel-plugin-import -D

  # // .babelrc or babel-loader option
  # {
  #   "plugins": [
  #     ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
  #   ]
  # }

  ## 3. 使用 vite-plugin-components 进行按需加载
  yarn add vite-plugin-components -D
  // vite.config.js
  import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';

  export default {
    plugins: [
      /* ... */
      ViteComponents({
        customComponentResolvers: [AntDesignVueResolver()],
      }),
    ],
  };

# 3. 令安装 Sass
yarn add sass sass-loader -D

# 4. 安装 postcss postcss-loader autoprefixer -D
yarn add postcss postcss-loader autoprefixer -D

# 新建 & 配置 postcss.config.js
module.exports = {
    plugins: [
        // 配置 Autoprefixer 插件
        require('autoprefixer')({
            // 游览器最近的两个版本
            'overrideBrowserslist': ['last 2 versions']
        })
    ],
};

# 5. 安装 & 配置 vue-router
yarn add vue-router@4

# 6. 安装 & 配置 vuex
yarn add vuex@next

```
