option = {
  width: '90%',
  // backgroundColor: '#04113a',
  //   grid: {
  //     left: "5%",
  //     top: "5%",
  //     bottom: "5%"
  //   },
  grid: {
    left: '20px',
    right: '10px',
    bottom: '10px',
    top: '10px',
    containLabel: true,
  },
  dataset: {
    // 提供一份数据。
    source: [
      // ['product', '2015'],
      // ['Matcha Latte', 43.3],
      // ['Milk Tea', 83.1],
      // ['Cheese Cocoa', 86.4, 65.2, 82.5],
      // ['Walnut Brownie', 72.4, 53.9, 39.1]
      // [
      //   "乐原道支行",
      //   "南京湖南路支行",
      //   "深圳科技园支行"
      // ],
      // [30, 40, 50],
      ['设备1', 30, 30, 100],
      ['设备2', 40, 40, 100],
      ['设备3', 50, 50, 100],
      ['设备4', 60, 60, 100],
      ['设备5', 70, 70, 100],
    ],
  },
  xAxis: {
    show: false,
  },
  yAxis: {
    type: 'category',
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
  },
  series: [
    {
      type: 'pictorialBar',
      // symbol: 'circle',
      symbol:
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
      // symbolSize: [12, 12],
      symbolSize: [35, 35],
      symbolOffset: [15, -1],
      symbolPosition: 'end',
      z: 3,
      itemStyle: {
        normal: {
          color: '#0067ff',
        },
      },
      // data: getSymbolData(data),
      // data: [30, 40, 50],
    },
    {
      type: 'bar',
      barWidth: 6,
      z: 2,
      itemStyle: {
        color: new (this.echarts || echarts).graphic.LinearGradient(
          0,
          0,
          1,
          0,
          [
            {
              offset: 0,
              color: '#012754',
            },
            {
              offset: 1,
              color: '#0067ff',
            },
          ]
        ),
        //   barBorderRadius: 3,
      },
      label: {
        show: true,
        fontSize: 14,
        // distance: 10,
        // position: "top",
        // formatter: "{b}",
        position: ['0', '-22px'],
        //   formatter: '{@[1]}分钟',
        formatter: '{b}',
        // offset: [0, -10],
        color: '#eeeeee',
      },
      //   data: [27, 34, 49]
    },
    {
      type: 'bar',
      barGap: '-135%',
      // barGap: '0',
      barWidth: 10,
      animation: false,
      // z: 10,
      z: 1,
      itemStyle: {
        color: '#18263b',
        // color: 'transparent',
        //   barBorderRadius: 3,
        borderWidth: 0.2,
        borderColor: '#0066FF',
        // padding: '2px',
      },
      label: {
        show: true,
        // position: "top",
        fontSize: 14,
        // lineHeight: 50,
        // position: ["50%", "-30px"],
        position: ['90%', '-22px'],
        // position: 'insideBottomRight',
        color: '#eeeeee',
        //   formatter: '{b}',
        formatter: '{@[1]}%',
        // formatter: function(param) {
        //   for (var i = 0; i < data.length; i++) {
        //     if (param.name == data[i].name) {
        //       return data[i].value + " 分钟";
        //     }
        //   }
        // }
      },
      //   data: [55, 55, 55]
    },
  ],
};
