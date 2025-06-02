# vda 大屏项目模板案例注意事项

<!-- _customWidget/echarts/gradientBar -->

## echart

+ `main.js` 文件中引入 echarts

```js
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
```

+ IDE 视图生效

```js
// packages\@v2-workbench\webide.fusion\client\index.vue
// 将 `$echarts` 赋给 `IDE` 对象
IDE.$echarts = echarts

// packages\@v2-lib\webide.core\client\util\v2-view.js
// 修改对数据篮子的处理
```
