# 中职物联面试交流

## **📌 视图展示**

### ☘️ 1. 页面

![](./page1.jpg)

![](./page2.png)

![](./page3.png)

![](./page4.jpg)

### ☘️ 2.部分组件

![](./c1.png)

![](./c2.jpg)

![](./c3.png)

![](./c4.png)

![](./c5.png)

![](./c6.png)

---

## **📌 项目构建初步思考**

### 🚀 技术选择

- Vue3 + ts + echarts
- webpack / vite
- 响应式 & 自适应

### 🚀 项目物料

- reset styles
- 图片素材, 合适的开源字体, icon fonts
- 工具类封装
  - Number 数据格式化
  - 日期格式化
  - Promise 定时任务(一定时间后处理例如关闭消息通知等任务)
- 功能类组件
  - echarts
  - 模态框(弹窗组件)
  - 其他常用展示形式
- 展示类组件
- 页面模板类
- mock 数据

### 🚀 性能优化

- 代码压缩
- 提取公共内容
- 路由懒加载
- 异步组件
- 节流
- 及时清理事件
- 缓存
- ...

### 🚀 接入测试和CI/CD


<!-- 技术考量
物料准备
性能考虑
测试和自动化构建

- 技术要点:
  - Vue3 + ts + echarts
  - webpack / vite
  - 响应式 & 自适应
  - jest
  - CI / CD
  - 面向对象
  - 设计模式
- 性能优化:
  - 路由懒加载
  - 异步组件
  - 将这些不用改变的数据通过Object.freeze方法冻结它，避免vue初始化的时候，做一些无用的操作(vue2)
  - 页面 resize 节流 => echarts resize
- 代码优化
  - 代码规范
  - 展现数据格式规范
  - 利用解构 `{$attrs,$route,$store,$listeners,$ref}`
- 项目物料:
  - reset styles
  - 图片素材, 合适的开源字体, icon fonts
  - 工具类封装
    - Number 数据格式化
    - 日期格式化
    - Promise 定时任务(一定时间后处理例如关闭消息通知等任务)
  - 功能类组件
    - echarts
    - 模态框(弹窗组件)
    - 其他常用展示形式
  - 展示类组件
  - 页面模板类
  - mock 数据 -->
