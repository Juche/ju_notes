option = {
  //   width: "90%",
  backgroundColor: '#04113a',
  //   grid: {
  //     left: "5%",
  //     top: "5%",
  //     bottom: "5%"
  //   },

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
      // [30, 50, 30],
      ['设备1', 34, 60],
      ['设备2', 20, 60],
      ['设备3', 50, 60],
    ],
  },
  //   tooltip: {
  //     show: true,
  //     trigger: "axis",
  //     axisPointer: {
  //       type: "shadow"
  //     },
  //     formatter: "{b}：{c}",
  //     // formatter: "{a}, {b}，{c}，{d}，{e}",
  //     textStyle: {
  //       fontSize: "20"
  //     }
  //   },
  xAxis: {
    type: 'value',
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
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
      barWidth: 8,
      z: 10,
      itemStyle: {
        color: new (this.echarts || echarts).graphic.LinearGradient(
          0,
          0,
          1,
          0,
          [
            // {
            //   offset: 0,
            //   color: 'rgba(255,128,91,1)',
            // },
            // {
            //   offset: 0.7,
            //   color: 'rgba(255,227,122,1)',
            // },
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
        barBorderRadius: 3,
      },
      label: {
        show: true,
        fontSize: 16,
        // distance: 10,
        // position: "top",
        // formatter: "{b}",
        position: ['0', '-24px'],
        //   formatter: '{@[1]}分钟',
        formatter: '{b}',
        // offset: [0, -10],
        color: 'rgba(239,254,255,1)',
      },
      type: 'bar',
      //   data: [27, 34, 49]
    },
    {
      type: 'bar',
      barGap: '-100%',
      // barGap: '0',
      barWidth: 8,
      animation: false,
      z: -1,
      itemStyle: {
        color: '#2f3b4e',
        barBorderRadius: 3,
        borderColor: '#00f',
        padding: '2px',
      },
      label: {
        show: true,
        // position: "top",
        fontSize: 16,
        // lineHeight: 50,
        // position: ["50%", "-30px"],
        position: ['200', '-24px'],
        // position: 'end',
        color: 'rgba(172,207,255,1)',
        //   formatter: '{b}',
        formatter: '{@[1]}分钟',
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
