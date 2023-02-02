export const sidebar = {
  // '/': [],
  // '/config': 'auto',
  // '/plugins': 'auto',
  // '/markdown': 'auto',
  '/FE/': [
    {
      text: '前端',
      children: [
        '/FE/01_html.md',
        '/FE/02_css.md',
        '/FE/03_js.md',
        '/FE/04_vue.md',
        '/FE/性能.md',
        '/FE/浏览器.md',
        '/FE/算法.md',
        '/FE/网络.md',
        '/FE/设计模式.md',
      ],
    },
  ],
  '/Develop/': [
    {
      text: '开发',
      children: ['/Develop/index.md', '/Develop/1.产品和功能清单.md', '/Develop/2.vue项目模板.md'],
    },
  ],
  '/Note/': [
    {
      text: '部署',
      children: [
        '/Note/index.md',
        '/Note/1.开发环境.md',
        '/Note/2.服务器环境.md',
        '/Note/3.Dell服务器.md',
        '/Note/4.docker笔记.md',
      ],
    },
  ],
  '/Guide/': [
    {
      text: '指南',
      children: ['/Guide/index.md', '/Guide/markdown.md'],
    },
  ],
  '/Meeting/': [
    {
      text: '会议',
      children: ['/Meeting/index.md', '/Meeting/1.会议20210607.md'],
    },
  ],
};
