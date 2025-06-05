## ZZ 项目经经历

1. **彩富哆数字化运营管理软件(彩富哆广告管理端)**
文件位置: D:\ZZ\Projects\zhuc_mono\lottery_ad_admin

复杂的活动创建机制
高效的活动投放计划交互模型

2. **财富帝(彩富哆广告客户端)**
文件位置: D:\ZZ\Projects\zhuc_mono\lottery_ad_client

对不同活动不同规则不同媒体展示的解析和控制
启停切除切入控制
和第三方页面活动的对接

3. 彩富哆商户管理平台(管理端)
文件位置: D:\ZZ\Projects\zhuc_mono\lottery_merchant_admin

4. 彩富哆商户助手(小程序)
文件位置: D:\ZZ\Projects\zhuc_mono\lottery_merchant_assistant

5. **彩富哆广告端相关活动页面**
文件位置: D:\ZZ\Projects\zhuc_mono\lottery_link_web

在不同设备不同web容器上的兼容问题

6. 彩富哆出入库管理工具(小程序)
文件位置: D:\ZZ\Projects\zhuc_mono\lottery_inventory_manage

7. 乡村振兴电商广告平台(管理端)
文件位置: D:\ZZ\Projects\zhuc_mono\mall_ad_admin

8. 南通商会论团(小程序)
文件位置: D:\ZZ\Projects\zhuc_mono\nt_coc_forum

9. 绿科物业管理端
文件位置: D:\ZZ\Projects\saasmanager

10. 绿科物业App
文件位置: D:\ZZ\Projects\ecopropertyapp

11. 居家养老大屏
文件位置: D:\ZZ\Projects\zzwl_saas2_datav

12. 居家养老管理端
文件位置: D:\ZZ\Projects\zzwl_saas2_web2021

13. **钛可星球**
文件位置: D:\ZZ\Projects\tkplant

玩具柜和海报在不同设备适配问题
3D 模型加载和渲染问题

14. 湖北中烟物流可视化
文件位置: D:\ZZ\Projects\zhongyan

- 使用免费的天地图替换高德地图，实现定制地图主题，海量点，地图标注，信息轮播窗口，地图下探，车辆轨迹，边界线绘制等效果
- 几乎完整的还原了项目地图的展示和交互需求，并省去了商业地图API调用的费用。



[项目名称] - [项目时间]​
项目描述：该项目为一个电商平台的前端页面开发，旨在为用户提供便捷的商品浏览、搜索、下单等功能。​
责任与成果：​
运用 Vue.js 搭建项目架构，通过 Vue Router 实现页面路由管理，借助 Vuex 管理状态，使项目结构清晰、数据流转高效。​
负责首页、商品列表页、商品详情页等页面的 HTML、CSS 与 JavaScript 开发，通过合理布局与交互设计，提升用户浏览体验，页面加载速度优化 30%。​
与后端开发人员协作完成数据接口对接，确保前端页面数据实时更新与准确展示。​
利用 Echarts 实现商品销售数据可视化，如销售趋势图、热门商品占比饼图等，为运营团队提供直观的数据展示，助力销售策略制定。

我的职业是Web前端，帮我写一份关于项目经历的总结汇报，需要包含项目描述、工作内容和成果、遇到的难点及处理思路。
针对每个项目展开说明工作内容和成果,以及开发中的难点和解决方案,使用的技术栈是vue,小程序和app使用了uniapp,数据可视化使用echarts和地图

---

我的职业是Web前端，帮我写一份关于管理端项目经历的总结汇报，需要包含项目描述、工作内容和成果、遇到的难点及处理思路。使用的技术栈是vue3+AntD。

多样且复杂的活动创建
处理大量的数据联表查询合并
便于鼠标键盘操作的投放计划表格交互模型

我的职业是Web前端，帮我写一份关于小程序项目经历的总结汇报，需要包含项目描述、工作内容和成果、遇到的难点及处理思路。使用的技术栈是vue3+UniApp。

我的职业是Web前端，帮我写一份关于大屏数据可视化项目经历的总结汇报，需要包含项目描述、工作内容和成果、遇到的难点及处理思路。使用的技术栈是vue+Echarts+高德地图。


---

- 管理端权限控制
- 动态路由加载
- Tree Shaking
- 可配置表单引擎
- 使用JSON Schema定义活动表单结构，支持动态字段增删、类型切换
- Web Workers 处理耗时任务，避免主线程阻塞
- `iframeRef.value.contentWindow.postMessage(msg || '父页面发送的消息', '*')`
& `window.addEventListener('message', iframeMsgHandle, false)` & iframeMsgHandle 对消息来源origin做过滤
- 大量数据导出使用 xlsx 库结合 Blob 对象实现流式导出
