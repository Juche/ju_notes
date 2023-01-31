import process from 'node:process';
import { viteBundler } from '@vuepress/bundler-vite';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { defineUserConfig, defaultTheme } from 'vuepress';

import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { shikiPlugin } from '@vuepress/plugin-shiki';
// import { defaultTheme } from '@vuepress/theme-default';
import { getDirname, path } from '@vuepress/utils';

// import { head, navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs/index.js';
import { navbar, sidebar } from './config/index.js';

const __dirname = getDirname(import.meta.url);
const isProd = process.env.NODE_ENV === 'production';

export default defineUserConfig({
  // set site base to default value
  base: '/',

  title: "Juching's Note",
  lang: 'zh-CN',
  description: '📔',
  // extra tags in `<head>`
  // head,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    // ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', async: '' }]
  ],

  // site-level locales config
  // locales: {
  //   '/': {
  //     lang: 'en-US',
  //     title: 'VuePress',
  //     description: 'Vue-powered Static Site Generator',
  //   },
  //   '/zh/': {
  //     lang: 'zh-CN',
  //     title: 'VuePress',
  //     description: 'Vue 驱动的静态网站生成器',
  //   },
  // },

  // specify bundler via environment variable
  // bundler: process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),

  // configure default theme
  theme: defaultTheme({
    logo: '/logo.png',
    //   repo: 'vuepress/vuepress-next',
    docsDir: 'docs',
    // navbar
    navbar: navbar,
    // sidebar
    sidebar: sidebar,
    //   // theme-level locales config
    //   locales: {
    //     /**
    //      * English locale config
    //      *
    //      * As the default locale of @vuepress/theme-default is English,
    //      * we don't need to set all of the locale fields
    //      */
    //     '/': {
    //       // page meta
    //       editLinkText: 'Edit this page on GitHub',
    //     },
    //     /**
    //      * Chinese locale config
    //      */
    //     '/zh/': {
    //       // navbar
    //       navbar: [
    //         // { text: '指引', link: '/guide/' },
    //         // { text: '配置', link: '/config/' },
    //         {
    //           text: '指南',
    //           ariaLabel: '指南',
    //           items: [
    //             {
    //               text: 'index',
    //               link: '/Guide/index',
    //             },
    //             {
    //               text: 'Markdown 示例',
    //               link: '/Guide/markdown',
    //             },
    //           ],
    //         },
    //         {
    //           text: '笔记',
    //           ariaLabel: '笔记',
    //           items: [
    //             {
    //               text: 'index',
    //               link: '/Note/index',
    //             },
    //             {
    //               text: '开发环境',
    //               link: '/Note/1.开发环境',
    //             },
    //             {
    //               text: '服务器环境',
    //               link: '/Note/2.服务器环境',
    //             },
    //             {
    //               text: 'Dell服务器',
    //               link: '/Note/3.Dell服务器',
    //             },
    //             {
    //               text: 'docker笔记',
    //               link: '/Note/4.docker笔记',
    //             },
    //           ],
    //         },
    //         {
    //           text: '知识点整理',
    //           ariaLabel: '知识点整理',
    //           items: [
    //             {
    //               text: '01_html',
    //               link: '/知识点整理/01_html',
    //             },
    //             {
    //               text: '02_css',
    //               link: '/知识点整理/02_css',
    //             },
    //             {
    //               text: '03_js',
    //               link: '/知识点整理/03_js',
    //             },
    //             {
    //               text: '04_vue',
    //               link: '/知识点整理/04_vue',
    //             },
    //             {
    //               text: '性能',
    //               link: '/知识点整理/性能',
    //             },
    //             {
    //               text: '浏览器',
    //               link: '/知识点整理/浏览器',
    //             },
    //             {
    //               text: '算法',
    //               link: '/知识点整理/算法',
    //             },
    //             {
    //               text: '网络',
    //               link: '/知识点整理/网络',
    //             },
    //             {
    //               text: '设计模式',
    //               link: '/知识点整理/设计模式',
    //             },
    //           ],
    //         },
    //         {
    //           text: '开发',
    //           ariaLabel: '开发',
    //           items: [
    //             {
    //               text: 'index',
    //               link: '/Develop/index',
    //             },
    //             {
    //               text: '产品和功能清单',
    //               link: '/Develop/1.产品和功能清单',
    //             },
    //             {
    //               text: 'vue项目模板',
    //               link: '/Develop/2.vue项目模板',
    //             },
    //           ],
    //         },
    //         {
    //           text: '文档',
    //           ariaLabel: '文档',
    //           items: [
    //             {
    //               text: 'index',
    //               link: '/Doc/index',
    //             },
    //           ],
    //         },
    //         {
    //           text: '百科',
    //           ariaLabel: '百科',
    //           items: [
    //             {
    //               text: 'index',
    //               link: '/Wiki/index',
    //             },
    //           ],
    //         },
    //         {
    //           text: '问题',
    //           ariaLabel: '问题',
    //           items: [
    //             {
    //               text: 'index',
    //               link: '/Issue/index',
    //             },
    //           ],
    //         },
    //         {
    //           text: '会议',
    //           ariaLabel: '会议',
    //           items: [
    //             {
    //               text: 'index',
    //               link: '/Meeting/index',
    //             },
    //             {
    //               text: '会议20210607',
    //               link: '/Meeting/1.会议20210607',
    //             },
    //           ],
    //         },
    //         {
    //           text: '相关链接',
    //           items: [
    //             {
    //               text: 'Awesome Vite',
    //               link: 'https://github.com/vitejs/awesome-vite',
    //             },
    //             {
    //               text: '更新日志',
    //               link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md',
    //             },
    //           ],
    //         },
    //         {
    //           text: '更多',
    //           items: [
    //             {
    //               text: 'AAA',
    //               link: '',
    //             },
    //             {
    //               text: 'BBB',
    //               link: '',
    //             },
    //           ],
    //         },
    //       ],
    //       selectLanguageName: '简体中文',
    //       selectLanguageText: '选择语言',
    //       selectLanguageAriaLabel: '选择语言',
    //       // sidebar
    //       sidebar: {
    //         // '/': [],
    //         // '/config': 'auto',
    //         // '/plugins': 'auto',
    //         // '/markdown': 'auto',
    //         '/Guide/index': [
    //           {
    //             text: 'Juching',
    //             children: [
    //               {
    //                 text: '首页',
    //                 link: '/Guide/index',
    //               },
    //               {
    //                 text: 'MD',
    //                 link: '/Guide/markdown',
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //       // page meta
    //       editLinkText: '在 GitHub 上编辑此页',
    //       lastUpdatedText: '上次更新',
    //       contributorsText: '贡献者',
    //       // custom containers
    //       tip: '提示',
    //       warning: '注意',
    //       danger: '警告',
    //       // 404 page
    //       notFound: [
    //         '这里什么都没有',
    //         '我们怎么到这来了？',
    //         '这是一个 404 页面',
    //         '看起来我们进入了错误的链接',
    //       ],
    //       backToHome: '返回首页',
    //       // a11y
    //       openInNewWindow: '在新窗口打开',
    //       toggleColorMode: '切换颜色模式',
    //       toggleSidebar: '切换侧边栏',
    //     },
    //   },
    //   themePlugins: {
    //     // only enable git plugin in production mode
    //     git: isProd,
    //     // use shiki plugin in production mode instead
    //     prismjs: !isProd,
    //   },
  }),

  // configure markdown
  // markdown: {
  //   importCode: {
  //     handleImportPath: (str) =>
  //       str.replace(/^@vuepress/, path.resolve(__dirname, '../../ecosystem')),
  //   },
  // },

  // use plugins
  // plugins: [
  //   docsearchPlugin({
  //     appId: '34YFD9IUQ2',
  //     apiKey: '9a9058b8655746634e01071411c366b8',
  //     indexName: 'vuepress',
  //     searchParameters: {
  //       facetFilters: ['tags:v2'],
  //     },
  //     locales: {
  //       '/zh/': {
  //         placeholder: '搜索文档',
  //         translations: {
  //           button: {
  //             buttonText: '搜索文档',
  //             buttonAriaLabel: '搜索文档',
  //           },
  //           modal: {
  //             searchBox: {
  //               resetButtonTitle: '清除查询条件',
  //               resetButtonAriaLabel: '清除查询条件',
  //               cancelButtonText: '取消',
  //               cancelButtonAriaLabel: '取消',
  //             },
  //             startScreen: {
  //               recentSearchesTitle: '搜索历史',
  //               noRecentSearchesText: '没有搜索历史',
  //               saveRecentSearchButtonTitle: '保存至搜索历史',
  //               removeRecentSearchButtonTitle: '从搜索历史中移除',
  //               favoriteSearchesTitle: '收藏',
  //               removeFavoriteSearchButtonTitle: '从收藏中移除',
  //             },
  //             errorScreen: {
  //               titleText: '无法获取结果',
  //               helpText: '你可能需要检查你的网络连接',
  //             },
  //             footer: {
  //               selectText: '选择',
  //               navigateText: '切换',
  //               closeText: '关闭',
  //               searchByText: '搜索提供者',
  //             },
  //             noResultsScreen: {
  //               noResultsText: '无法找到相关结果',
  //               suggestedQueryText: '你可以尝试查询',
  //               reportMissingResultsText: '你认为该查询应该有结果？',
  //               reportMissingResultsLinkText: '点击反馈',
  //             },
  //           },
  //         },
  //       },
  //     },
  //   }),
  //   googleAnalyticsPlugin({
  //     // we have multiple deployments, which would use different id
  //     id: process.env.DOCS_GA_ID ?? '',
  //   }),
  //   // registerComponentsPlugin({
  //   //   componentsDir: path.resolve(__dirname, './components'),
  //   // }),
  //   // only enable shiki plugin in production mode
  //   isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  // ],
});
