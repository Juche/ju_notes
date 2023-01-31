export const navbar = [
  // { text: '指引', link: '/guide/' },
  // { text: '配置', link: '/config/' },
  {
    text: '指南',
    ariaLabel: '指南',
    children: [
      {
        text: 'index',
        link: '/Guide/index.md',
      },
      {
        text: 'Markdown 示例',
        link: '/Guide/markdown.md',
      },
    ],
  },
  {
    text: '笔记',
    ariaLabel: '笔记',
    children: [
      {
        text: 'index',
        link: '/Note/index.md',
      },
      {
        text: '开发环境',
        link: '/Note/1.开发环境.md',
      },
      {
        text: '服务器环境',
        link: '/Note/2.服务器环境.md',
      },
      {
        text: 'Dell服务器',
        link: '/Note/3.Dell服务器.md',
      },
      {
        text: 'docker笔记',
        link: '/Note/4.docker笔记.md',
      },
    ],
  },
  {
    text: '前端',
    ariaLabel: '前端',
    children: [
      {
        text: '01_html',
        link: '/FE/01_html.md',
      },
      {
        text: '02_css',
        link: '/FE/02_css.md',
      },
      {
        text: '03_js',
        link: '/FE/03_js.md',
      },
      {
        text: '04_vue',
        link: '/FE/04_vue.md',
      },
      {
        text: '性能',
        link: '/FE/性能.md',
      },
      {
        text: '浏览器',
        link: '/FE/浏览器.md',
      },
      {
        text: '算法',
        link: '/FE/算法.md',
      },
      {
        text: '网络',
        link: '/FE/网络.md',
      },
      {
        text: '设计模式',
        link: '/FE/设计模式.md',
      },
    ],
  },
  {
    text: '开发',
    ariaLabel: '开发',
    children: [
      {
        text: 'index',
        link: '/Develop/index.md',
      },
      {
        text: '产品和功能清单',
        link: '/Develop/1.产品和功能清单.md',
      },
      {
        text: 'vue项目模板',
        link: '/Develop/2.vue项目模板.md',
      },
    ],
  },
  {
    text: '文档',
    ariaLabel: '文档',
    children: [
      {
        text: 'index',
        link: '/Doc/index.md',
      },
    ],
  },
  {
    text: '百科',
    ariaLabel: '百科',
    children: [
      {
        text: 'index',
        link: '/Wiki/index.md',
      },
    ],
  },
  {
    text: '问题',
    ariaLabel: '问题',
    children: [
      {
        text: 'index',
        link: '/Issue/index.md',
      },
    ],
  },
  {
    text: '会议',
    ariaLabel: '会议',
    children: [
      {
        text: 'index',
        link: '/Meeting/index.md',
      },
      {
        text: '会议20210607',
        link: '/Meeting/1.会议20210607.md',
      },
    ],
  },
  {
    text: '相关链接',
    children: [
      {
        text: 'Awesome Vite',
        link: 'https://github.com/vitejs/awesome-vite.md',
      },
      {
        text: '更新日志',
        link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md',
      },
    ],
  },
  {
    text: '更多',
    children: [
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
];
