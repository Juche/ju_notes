# 蓝媒科技

## 技能要求:

- 精通 HTML5、CSS3、JavaScript(ES6+)等前端技术。
- 精通掌握 Vue.js 及其生态(如 Vuex、Vue Router等)，确保高性能和良好的用户体验。
- 有微信小程序开发经验，精通小程序生命周期、API及开发工具。使用小程序框架(如微信小程序、Uniapp、Taro等)开发和维护小程序应用。
- 精通前端构建工具(如 Webpack、Vite)和版本控制工具(如 Git)。
- 优化前端性能，解决跨浏览器兼容性问题，提升页面加载速度和用户体验。
- 编写技术文档，记录开发过程和项目架构

## 加分项:

- 精通 Uniapp、Taro 等多端开发框架
- 有 TypeScript 开发经验。
- 了解 Node.is 和后端开发基础知识
- 有移动端 H5 开发经验
- 有前端自动化测试经验(如 Jest、Cypress)

---

**充电桩相关功能**

- 获取用户信息 uni.getUserInfo(OBJECT)
- 登录: 通过wx.login()获取code、调用后端接口获取openid
- 支付 uni.requestPayment(OBJECT)
- 扫码识别 & 支付充电
- 地图 map 组件
- 分享 uni.share

以微信、公众号为C端主要入口，为充电用户提供查桩找桩、设备信息查询、在线支付、充电状态查询、账户信息等服务，具备在线充值、支付、实时到账功能，给充电用户带来更加安全、便捷、贴心的充电体验。

后台运营系统
运营数据统计概况，用户的注册数量，设备的总数，交易金额，总订单，支付方式，用户分布，月收入统计柱状图表
小程序注册用户列表信息的展示，运营人员也可以在后台进行充值，用户账号禁用启用操作。


小程序
扫码支付充电
1、附近充电桩
2、充电桩详情
   实时获取充电桩的具体参数，提供地理位置、电桩使用状态、设备型号、收费标准、用户评论等。一键查找周边空余充电站、充电口，不用排队，无需等待。
3、导航服务
   为用户规划出从出发地到目的地充电桩的最合理路径，并执行实时导航。
4、充电预约
   通过微信小程序，用户可对目的地充电桩进行线上预约。减少等待时间，实现即到即充，使充电时间变得可控。
5、智能充电
   可远程预约充电设备，也可以到达后直接使用二维码扫描设备进行充电。用户可自由预设充电时长，预设时间结束或电量充满自动断电。使用者无需在周围，也可通过手机遥控充电、断电。
6、支付充值
   无需投币、不用刷卡，用户可通过支付宝或是微信进行实时充值支付。
7、收藏充电桩
   用户可以收藏个人日常使用充电桩，以方便使用。

---

1.注册登录：支持手机注册登录，简化用户注册流程。

2.充电桩查找：集成地图服务，实时展示附近充电桩，支持按距离、功率、价格等筛选条件查找。



3.充电桩详情：展示充电桩的详细信息，包括位置、功率、价格、设备状态等，为用户提供透明化的充电选择。

4.预约充电：用户可提前预约充电桩，避免到达后无空闲充电桩的尴尬情况。

5.导航与充电：提供导航功能，引导用户快速到达充电桩；支持扫描二维码启动充电。

6.充电状态监测：实时显示充电进度、预计完成时间等信息，让用户随时掌握充电动态。

7.在线支付：支持多种支付方式，如微信支付、支付宝等，实现充电费用的快速结算。

8.评价与反馈：用户对充电桩进行评价，提供反馈建议，帮助平台不断优化服务。

9.个人中心：展示用户账户信息、充电记录、优惠券等，方便用户随时查看和管理。

二、充电桩小程序APP平台管理端功能

1.用户管理：查看和管理所有注册用户的信息，包括用户资料、充电记录等，保障用户数据安全。

2.充电桩管理：添加、编辑、删除充电桩信息，实时查看充电桩的使用状态和空闲数量，确保充电桩的正常运行。

3.订单管理：查看和处理所有用户的充电订单，包括订单状态、充电时间、费用等，提供订单统计功能，帮助平台分析用户充电习惯。

4.财务管理：实时查看平台的收入、支出和利润情况，提供财务报表和数据分析功能，为平台的运营决策提供支持。

5.数据统计与分析：收集和分析用户数据，如用户活跃度、充电习惯、充电时长等，为平台的优化和发展提供数据支持。

6.系统设置：配置平台的基本参数和规则，如充电价格、预约时间限制等，确保平台的稳定运行。

7.权限管理：对平台管理员进行权限划分，确保不同管理员只能访问和操作其职责范围内的数据和功能，保障平台数据的安全性。

8.故障报修与处理：接收用户报修的充电桩故障信息，及时响应并处理，确保充电桩的正常运行，提升用户体验。

9.营销活动管理：设置和发布优惠券、折扣等营销活动，吸引用户使用充电桩，提高平台的用户活跃度和收入。

---

### 盒模型 Box Model

盒模型：在网页文档布局中，浏览器会将每个元素视作一个矩形盒子进行布局和占位，盒子从内到外由content、padding、border、margin所构组成。
标准盒模型：通过 CSS 属性 `box-sizing: content-box;` 设置。在标准盒模型中width和height是描述content的尺寸，盒子的宽 = margin-left + border-left-width + padding-left + width + padding-right + border-right-width + margin-right，盒子的高 = margin-top + border-top-width + padding-top + height + padding-bottom + border-bottom-width + margin-bottom。
IE盒模型：通过 CSS 属性 `box-sizing: border-box;` 设置。在IE盒模型中width和height包含了content + padding + border的尺寸，盒子的宽 = margin-left + width + margin-right，盒子的高 = margin-top + height + margin-bottom。IE盒模型更直观，更方便布局计算因此更受欢迎。

```css
/* 全局设置 */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### 水平垂直居中

```scss
/* 绝对定位 */
.pos-ctn {
  position: relative;
  .item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
  }
}
/* table 布局 */
.table-ctn {
  display: table;
  .item {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
}
/* flex 布局 */
.flex-ctn {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* grid 布局 */
.grid-ctn {
  display: grid;
  place-items: center;
}
```

### 响应式布局方案
  - 媒体查询 `@media screen and (max-width: 800px) and (min-width: 600px)`
  - flex/grid 布局
  - 响应式单位: %/vw/vh/rem

### 防抖 Debounce 和 节流 Throttle

```js
// 事件触发后在指定时间内无事件触发,才会执行下次事件,否则重新计时等待
function debounce(fn, delay) {
  let timer
  return function () => {
    if(timer) clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}
// 在一定时间间隔内只会执行一次事件
function throttle(fn, delay) {
  let timer
  return function() => {
    if(timer) return
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}

window.addEventListener('scroll', throttle(() => console.log('window scrolling'), 200))
```

### 闭包 Closure

闭包是指一个函数可以记住并访问其词法作用域,闭包是函数和其周围环境的组合
闭包是JS中非常强大的特性,可以实现数据封装,函数柯里化,回调函数,模块化开发等功能.
闭包可能导致 `内存泄露` 和 `性能问题`

**函数嵌套** 闭包通常发生在函数嵌套中,内部函数可以访问外部函数的变量
**词法作用域** 闭包是基于词法作用域的,词法作用域在函数定义时就确定了
**持久化变量** 闭包可以让外部函数的变量在函数执行完后仍保留在内存中,不会被垃圾回收

### JS 事件流

**捕获阶段** 事件由父元素向目标元素传播,从 Window 对象开始
**目标阶段** 事件到达目标元素或开始事件的元素
**冒泡阶段** 与捕获阶段相反,事件由目标元素向父元素传播

target.addEventListener(type, listener, useCapture)
通过省略或将 useCapture 参数设置为 false，将注册冒泡阶段的事件,否则事件在捕获阶段处理
通过在 listener 中使用 event.stopPropagation 来阻止事件冒泡

### 事件委托

是一种利用事件`冒泡机制`来优化事件处理的技术,将事件绑定到父元素而非每个子元素上,通过事件冒泡来捕获子元素的事件并处理

### 浏览器渲染过程

### Web Workers

### 跨域 & 解决跨域问题

`同源策略` 是指浏览器不允许页面向不同源的服务器发送请求
`同源` 两个 URL 需 `协议` `域名` `端口` 三者都相同才视作同源

`CORS` Cross Origin Resource Sharing 跨域资源共享,服务器通过设置响应头来允许跨域请求,支持所有HTTP请求
`服务器代理` 通过同源服务器设置代理,将请求转发到目标服务器
`JSONP` 利用 script 标签不受同源策略限制的特性,src 指向跨域的 API,并传递一个回调函数名,服务器返回一段回调函数和参数数据组成的js代码,仅支持get请求
`WebSocket` 一种双工通讯协议,不受同源策略影响

### 事件循环,任务队列(宏任务 & 微任务)

事件循环是js运行时环境的核心机制之一,用于处理异步任务和事件
任务的执行循序: 同步任务 -> 微任务 -> 宏任务 -> 下一个循环

调用栈: 存储同步任务的执行上下文
任务队列: 存储异步任务的回调函数
  微任务: setTimeout / setInterval / IO / UI渲染
  宏任务: Promise 回调, MutationObserver
事件循环: 先执行调用栈中的同步任务,当调用栈为空时检查微任务队列并执行所有微任务,执行一个宏任务.重复上述步骤.

### vue 的响应式原理
vue3 的响应式基于 proxy, vue2 则基于 Object.defineProperty
- vue3 和 vue2 的响应式对比
  - 性能: proxy 直接代理对象, 无需递归遍历对象
  - 增删属性: vue3 自动追踪, vue2 需要 Vue.set/Vue.delete
  - 数组监听: Proxy 可监听数组的索引变化和长度修改
  - 嵌套对象懒代理: 仅在被访问时生成响应式对象,减少初始化开销
  - **局限**: Proxy 不兼容旧版浏览器(IE11及以下)

### vue 组件通讯
  - 父组件通过 props 绑定数据, 子组件通过 emit 触发回调函数
  - 父组件通过子组件定义的 props 属性引用子组件实例来操作子组件, vue3: `refName.value.xxx`, vue2: `this.$refs.refName`
  - Provide/Inject：祖先组件通过provide暴露数据，子孙组件通过inject注入
  - 状态管理库（Vuex/Pinia）：复杂状态（如用户登录信息、全局购物车）通过集中式存储，实现组件间双向共享

### 微信小程序

- 应用生命周期:
  - onLaunch：当小程序初始化完成时触发，全局只触发一次
  - onShow：当小程序启动或从后台进入前台时触发
  - onHide：当小程序从前台进入后台时触发
  - onError：当小程序发生脚本错误或 API 调用失败时触发，并带上错误信息
- 页面生命周期:
  - onLoad：当页面加载时触发，可以在参数中获取打开当前页面路径中的参数
  - onShow：当页面显示时触发，每次打开页面都会调用一次
  - onReady：当页面初次渲染完成时触发
  - onHide：当页面从前台切换到后台或进入其他页面时触发
  - onUnload：当页面卸载时触发
- 组件生命周期函数
  - created：当组件实例刚刚被创建时触发
  -attached：当组件实例进入页面节点树时触发
  -detached：当组件实例被从页面节点树移除时触发
- 常用语法:
  - wx:if/wx:elif/wx:else/wx:for
  - bindtap/bindinput/bindchange
  - `this.triggerEvent('cusEv', { value: 'ChildValue' })` & `bind:cusEv="cusEv"`
- 常用 API:
  - navigateTo/redirectTo/switchTab/reLaunch
  - wx.getStorageSync(key)/wx.setStorageSync(key,value)
  - wx.request()
  - wx.showToast()
  - this.setData()

- 微信小程序包体积超过2M的限制
  - 分包加载: 核心逻辑放主包,其他业务分包
  - 静态资源: 图片压缩,CDN托管,字体图标
  - 代码复用: 公共模块组件封装
  - 按需引入: UI库,工具库按需引入
  - 通过 app.json 的 subPackages 配置分包路由

### Uniapp

- 生命周期: 小程序 & Vue
- 常用 API
  - navigateTo/navigateBack/redirectTo/switchTab/reLaunch
  - uni.request
  - 获取设备信息：使用 uni.getSystemInfo

### Uniapp 的优点
  - 支持 vue 语法
  - 封装多端API, 可调用原生能力
  - 支持条件编译, 提高代码复用率
  - 一次开发多端发布,支持编译多平台小程序/H5/App

### Vite 和 Webpack 对比
  - Vite 基于原生 ESM 的按需加载,无需打包整个应用

### 性能优化
  - 代码拆分：通过import('./module.js')动态导入非首屏组件
  - 按需引入, tree-shaking
  - 静态资源压缩,CDN 加速,缓存
  - 字体图标,雪碧图,base64
  - 页面骨架屏/懒加载
  - NGINX 开启 gzip

### TS 的基础应用
  - 在 types 目录管理 .d.ts 文件
  - 使用 declare module 申明模块类型
  - 在 tsconfig.json 中配置ts文件路径 `typeRoot: ["./types"]`
  - type & interface
