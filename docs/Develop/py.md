# PY

- 每个订单只上传一张图片，大概率大于 1m（估计得用上 oss 了）

- 管理台设置的图片横竖长度是不包含出血部分，也就是最终上传的裁切图长度=设置距离+出血 X2，
  上传后管理台和小程序订单展示的图片也都是包含出血部分的裁切图

<!-- > 预估一下工时和工价，具体开发时长和价格你和龚如梦谈，对迭代交付时间有要求 -->

- 管理端
  - 商品添加素材相关的参数
    - 横/竖长度 => 单位: mm
    - 横/竖出血 => 单位: mm
    - 分辨率 dpi
  - 资源下载
- 客户端
  - 下单前先处理商品素材 => 图片裁剪的功能
  - 裁剪的计算(dpi 和 mm 的转换)
  - 文件上传
    - 云空间 => 5Gb (查看使用情况) ?
    - OSS ?
    - 考虑上传限制和方案

---

## 微信云函数外链跳转

```js
// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  switch (event.action) {
    case 'getUrlScheme': {
      return getUrlScheme(event.options)
    }
  }

  return 'action not found'
}

async function getUrlScheme(options) {
  return cloud.openapi.urlscheme.generate({
    jumpWxa: {
      path: '/page/component/index', // <!-- replace -->
      query: '',
    },
    // 如果想不过期则置为 false，并可以存到数据库
    isExpire: true,
    // 一分钟有效期
    expireTime: parseInt(Date.now() / 1000 + 60),
  })
}

https://www.smzdm.com/p/99562075/?zdm_ss=Android_4376972076_&send_by=4376972076&from=other&invite_code=zdm6v3k296inv

https://go.smzdm.com/52a15e82609b0514/ca_aa_fx_95_99562075_0_23501_1627_0

https://product.suning.com/0070191013/12187003988.html?utm_source=union&utm_medium=005003&adtype=5&utm_campaign=95525945-7cce-43a8-a3e8-4858d9455813&union_place=un
```
