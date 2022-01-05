// @ts-check

const pkg = require('../package.json')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: "Juching's Note",
  lang: 'zh-CN',
  description: '📔',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.png' }],
    // ['script', { src: 'https://cdn.wwads.cn/js/makemoney.js', async: '' }]
  ],
  themeConfig: {
    // repo: pkg.repository,
    // repoLabel: "Gitlab",
    logo: 'logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',

    // algolia: {
    //   apiKey: 'b573aa848fd57fb47d693b531297403c',
    //   indexName: 'vitejs',
    //   searchParameters: {
    //     facetFilters: ['tags:cn']
    //   }
    // },

    nav: [
      // { text: '指引', link: '/guide/' },
      // { text: '配置', link: '/config/' },
      {
        text: "指南",
        ariaLabel: "指南",
        items: [
          {
            text: "index",
            link: "/Guide/index",
          },
          {
            text: "Markdown 示例",
            link: "/Guide/markdown",
          },
        ],
      },
      {
        text: "笔记",
        ariaLabel: "笔记",
        items: [
          {
            text: "index",
            link: "/Note/index",
          },
          {
            text: "开发环境",
            link: "/Note/1.开发环境",
          },
          {
            text: "服务器环境",
            link: "/Note/2.服务器环境",
          },
          {
            text: "Dell服务器",
            link: "/Note/3.Dell服务器",
          },
          {
            text: "docker笔记",
            link: "/Note/4.docker笔记",
          },
        ],
      },
      {
        text: "知识点整理",
        ariaLabel: "知识点整理",
        items: [
          {
            text: "01_html",
            link: "/知识点整理/01_html",
          },
          {
            text: "02_css",
            link: "/知识点整理/02_css",
          },
          {
            text: "03_js",
            link: "/知识点整理/03_js",
          },
          {
            text: "04_vue",
            link: "/知识点整理/04_vue",
          },
          {
            text: "性能",
            link: "/知识点整理/性能",
          },
          {
            text: "浏览器",
            link: "/知识点整理/浏览器",
          },
          {
            text: "算法",
            link: "/知识点整理/算法",
          },
          {
            text: "网络",
            link: "/知识点整理/网络",
          },
          {
            text: "设计模式",
            link: "/知识点整理/设计模式",
          },
        ],
      },
      {
        text: "开发",
        ariaLabel: "开发",
        items: [
          {
            text: "index",
            link: "/Develop/index",
          },
          {
            text: "产品和功能清单",
            link: "/Develop/1.产品和功能清单",
          },
          {
            text: "vue项目模板",
            link: "/Develop/2.vue项目模板",
          },
        ],
      },
      {
        text: "文档",
        ariaLabel: "文档",
        items: [
          {
            text: "index",
            link: "/Doc/index",
          },
        ],
      },
      {
        text: "百科",
        ariaLabel: "百科",
        items: [
          {
            text: "index",
            link: "/Wiki/index",
          },
        ],
      },
      {
        text: "问题",
        ariaLabel: "问题",
        items: [
          {
            text: "index",
            link: "/Issue/index",
          },
        ],
      },
      {
        text: "会议",
        ariaLabel: "会议",
        items: [
          {
            text: "index",
            link: "/Meeting/index",
          },
          {
            text: "会议20210607",
            link: "/Meeting/1.会议20210607",
          },
        ],
      },
      {
        text: '相关链接',
        items: [
          {
            text: 'Awesome Vite',
            link: 'https://github.com/vitejs/awesome-vite'
          },
          {
            text: '更新日志',
            link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
          }
        ]
      },
      {
        text: '更多',
        items: [
          {
            text: 'AAA',
            link: '',
          },
          {
            text: 'BBB',
            link: '',
          },
        ],
      },
    ],

    // 不指定规则,所有的都自动生成导航菜单
    // 可以给指定目录特定的导航配置
    sidebar: {
      // '/': [],
      // '/config': 'auto',
      // '/plugins': 'auto',
      // '/markdown': 'auto',
      '/Guide/index': [
        {
          text: 'Juching',
          children: [
            {
              text: '首页',
              link: '/Guide/index',
            },
            {
              text: 'MD',
              link: '/Guide/markdown',
            },
          ],
        },
      ],
    },
  },

  markdown: {
    lineNumbers: true,
    // html: true,
    // linkify: true,
    // typographer: true,
    anchor: {
      renderPermalink: require('./render-perma-link'),
    },
    toc: { includeLevel: [1, 2] },
    config: (md) => {
      md.use(require('./markdown-it-custom-anchor'))
      // use more markdown-it plugins!
      // md.use(require('markdown-it-xxx'))
      // md.use(require('markdown-it-anchor'))
      // md.use(require('markdown-it-html5-media'))
    },
  },
};
