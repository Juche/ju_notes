# VDA 大屏项目模板案例

## 20191217

+ 更改路由配置
+ 右侧导航菜单打开的逻辑
+ 菜单展开位置的配置
+ tabs 显隐的逻辑 && 打开页面的逻辑(考虑和父页面的交互)
+ 查看之前写的文档

+ VDA
  + 背景(可替换) && 商标 && 路由 && 带搜索的分类级联侧边菜单(位置可控)
  + 结合页面容器,切换路由时同时支持 open打开新页面 && 切换页面容器的 url
  + 切换页面时支持图片的切换
  + 带回退按钮的面包屑导航(回退的操作/keep-alive/open/url 替换 => 页面状态问题 ???)

+ Echarts 封装已经配好的组件,提供基础的配置项(一定的灵活性)
  + 数据配置 => 管道(将数据源处理为统一的格式 > 可能会根据不同的数据源提供不同的管道) => 组件内部数据处理(将统一的数据格式处理为组件对应需要的数据)
  + 参考源数据结构 => `project\ad\pipe\vda\index.js`

+ vda layout
+ vda pages
+ vda 项目路由
+ vda 面包屑

+ NavMenu 导航菜单
+ Tree 树形控件
  + icon-class 自定义树节点的图标
  + node-click 节点被点击时的回调

  ```js
  handleNodeClick(data) {
    console.log('被点击的菜单数据', data);

    this.open({
      status: true,
      title: data.label,
      path: data.route,
      page: data.route,
      type: "BLANK",
      params: {},
    });
  }
  ```
