# uni-app 开发小程序

> vue,微信小程序,mpvue

## 一个 uni-app 工程，默认包含如下目录及文件

┌─uniCloud 云空间目录，阿里云为 uniCloud-aliyun,腾讯云为 uniCloud-tcb（详见 uniCloud）
│─components 符合 vue 组件规范的 uni-app 组件目录
│ └─comp-a.vue 可复用的 a 组件
├─hybrid App 端存放本地 html 文件的目录，详见
├─platforms 存放各平台专用页面的目录，详见
├─pages 业务页面文件存放的目录
│ ├─index
│ │ └─index.vue index 页面
│ └─list
│ └─list.vue list 页面
├─static 存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─uni_modules 存放[uni_module](/uni_modules)规范的插件。
├─wxcomponents 存放小程序组件的目录，详见
├─main.js Vue 初始化入口文件
├─App.vue 应用配置，用来配置 App 全局样式以及监听 应用生命周期
├─manifest.json 配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json 配置页面路由、导航条、选项卡等页面类信息，详见

## 使用 uni-app 开发微信小程序

- **注意：如果是第一次使用，需要先配置小程序 ide 的相关路径，才能运行成功。如下图，需在输入框输入微信开发者工具的安装路径。 若 HBuilderX 不能正常启动微信开发者工具，需要开发者手动启动，然后将 uni-app 生成小程序工程的路径拷贝到微信开发者工具里面，在 HBuilderX 里面开发，在微信开发者工具里面就可看到实时的效果。**

1. 配置微信小程序 AppID `wx0a5f435728b8fd24`
2. 配置小程序开发工具路径
3. 微信小程序中开启服务端口

- 否则报错: `[error] 工具的服务端口已关闭。要使用命令行调用工具，请在下方输入 y 以确认开启，或手动打开工具 -> 设置 -> 安全设置，将服务端口开启。
详细信息: https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html`

## 使用 vue3 开发 uni-app

> [uni-app 项目支持 vue 3.0 介绍，及升级指南](https://ask.dcloud.net.cn/article/37834)

```sh
# 使用 cli 方式创建支持 vue3 默认模板项目
# 步骤 1: 全局安装vue-cli
npm install -g @vue/cli
# 步骤 2: 用如下的命令创建vue3工程
vue create -p dcloudio/uni-preset-vue#vue3 my-vue3-project
# 步骤 3: 创建好工程后，进入对应目录
cd my-vue3-project
# 步骤 4: 将项目跑到微信平台
npm run dev:mp-weixin
# 需要将编译后的文件dist/dev/mp-weixin导入微信开发者工具运行，也可将项目拖入 HbuildX 中运行，方便运行到各个平台
```

## 常用 API

> 测试 api: https://api.muxiaoguo.cn/api/dujitang

- 路由跳转 `uni.navigateTo()`
- 数据请求 `uni.request({url: 'https://api.muxiaoguo.cn/api/dujitang', success: (res) => {}})`

## 小程序域名申请 & 备案

> https://www.jianshu.com/p/7cd246f888d8
