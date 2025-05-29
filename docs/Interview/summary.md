# Summary

## [vue](./docs/vue.md)

---

## 高频问题

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

### Flex 和 Grid

```js
//
```


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

```js
//
```

### JS 事件流

**捕获阶段** 事件由父元素向目标元素传播,从 Window 对象开始
**目标阶段** 事件到达目标元素或开始事件的元素
**冒泡阶段** 与捕获阶段相反,事件由目标元素向父元素传播

target.addEventListener(type, listener, useCapture)
通过省略或将 useCapture 参数设置为 false，将注册冒泡阶段的事件,否则事件在捕获阶段处理
通过在 listener 中使用 event.stopPropagation 来阻止事件冒泡


### 事件委托

是一种利用事件`冒泡机制`来优化事件处理的技术,将事件绑定到父元素而非每个子元素上,通过事件冒泡来捕获子元素的事件并处理

```js
//
```

### Promise / MutationObserver

```js
//
```

### 虚拟 Dom

```js
//
```

### 数据双向绑定

```js
//
```

### 性能优化

```js
//
```

### 页面加载时间优化

```js
//
```

### 浏览器渲染过程

### Web Workers

### 跨域 & 解决跨域问题

`同源策略` 是指浏览器不允许页面向不同源的服务器发送请求
`同源` 两个 URL 需 `协议` `域名` `端口` 三者都相同才视作同源

`CORS` Cross Origin Resource Sharing 跨域资源共享,服务器通过设置响应头来允许跨域请求,支持所有HTTP请求
`服务器代理` 通过同源服务器设置代理,将请求转发到目标服务器
`JSONP` 利用 script 标签不受同源策略限制的特性,src 指向跨域的 API,并传递一个回调函数名,服务器返回一段回调函数和参数数据组成的js代码,仅支持get请求
`WebSocket` 一种双工通讯协议,不是同源策略影响

```js
//
```

### 事件循环,宏任务 & 微任务

事件循环是js运行时环境的核心机制之一,用于处理异步任务和事件

调用栈: 存储同步任务的执行上下文
任务队列: 存储异步任务的回调函数
  微任务: setTimeout / setInterval / IO / UI渲染
  宏任务: Promise 回调, MutationObserver
事件循环: 先执行调用栈中的同步任务,当调用栈为空时检查微任务队列并执行所有微任务,执行一个宏任务.重复上述步骤.

```js
//
```

### 数组去重

```js
//
```

### 回文字符串判断

```js
//
```

### 项目开发相关

- 挑战性问题及解决方式
- 项目负责内容及团队协调合作
