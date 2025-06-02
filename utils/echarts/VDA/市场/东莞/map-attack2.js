let targetArea = [
  {
    name: "东莞",
    value: [114, 23],
  },
];

let attackDataLeft = [
  {
    fromName: "欧洲",
    toName: "东莞",
    coords: [
      [50, 50],
      [114,23]
    ]
  },
  {
    fromName: "非洲",
    toName: "东莞",
    coords: [
      [35, 20],
      [114,23]
    ]
  },
  {
    fromName: "大洋洲",
    toName: "东莞",
    coords: [
      [80, 15],
      [114,23]
    ]
  },
];

let attackDataRight = [
  {
    fromName: "北美",
    toName: "东莞",
    coords: [
      [140, 50],
      [114,23]
    ]
  },
  {
    fromName: "南美",
    toName: "东莞",
    coords: [
      [150, 30],
      [114,23]
    ]
  },
];

// let LableData = [{
//         name: "北京",
//         value: [116.24, 39.55, 100],
//         lable: [10.21, 1.20]
//     },
//     {
//         name: "东莞",
//         value: [114, 23],
//         lable: [10.21, 1.20]
//     },
//     {
//         name: "重庆",
//         value: [106.54, 29.59],
//         lable: [10.21, 1.20]
//     },
//     {
//         name: "浙江",
//         value: [120.19, 30.26],
//         lable: [10.21, 1.20]
//     },
// ];

option = {
  backgroundColor: "#000f1e",
  geo: {
    map: "china",
    aspectScale: 0.8,
    layoutCenter: ["60%", "50%"], //地图位置
    layoutSize: "60%",
    itemStyle: {
      normal: {
        shadowColor: "#276fce",
        shadowOffsetX: 0,
        shadowOffsetY: 10,
        opacity: 0.5,
      },
      emphasis: {
        areaColor: "#276fce",
      },
    },
    // regions: [{
    //     name: '南海诸岛',
    //     itemStyle: {
    //         areaColor: 'rgba(0, 10, 52, 1)',

    //         borderColor: 'rgba(0, 10, 52, 1)',
    //         normal: {
    //             opacity: 0,
    //             label: {
    //                 show: false,
    //                 color: "#009cc9",
    //             }
    //         },
    //     },
    //     label: {
    //         show: false,
    //         color: '#FFFFFF',
    //         fontSize: 12,
    //     },
    // }],
  },
  series: [
    // 常规地图
    {
      type: "map",
      mapType: "china",
      aspectScale: 0.8,
      layoutCenter: ["60%", "50%"], //地图位置
      layoutSize: "60%",
      zoom: 1, //当前视角的缩放比例
      // roam: true, //是否开启平游或缩放
      scaleLimit: {
        //滚轮缩放的极限控制
        min: 1,
        max: 2,
      },
      itemStyle: {
        normal: {
          areaColor: "#0c274b",
          borderColor: "#1cccff",
          borderWidth: 1.5,
        },
        emphasis: {
          areaColor: "#02102b",
          label: {
            color: "#fff",
          },
        },
      },
    },
    // 区域散点图
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      zlevel: 2,
      symbolSize: 10,
      rippleEffect: {
        //坐标点动画
        period: 3,
        scale: 5,
        brushType: "fill",
      },
      label: {
        normal: {
          show: false,
          position: "right",
          formatter: "{b}",
          color: "#b3e2f2",
          fontWeight: "bold",
          fontSize: 18,
        },
      },
      data: targetArea,
      itemStyle: {
        //坐标点颜色
        normal: {
          show: true,
          color: "yellow",
          shadowBlur: 20,
          shadowColor: "#fff",
        },
        // emphasis: {
        //     areaColor: '#f00'
        // }
      },
    },
    // 来自左侧
    {
      type: "lines",
      zlevel: 1, //设置这个才会有轨迹线的小尾巴
      // polyline: true,
      effect: {
          show: true,
          period: 3, //箭头指向速度，值越小速度越快
          trailLength: 0.01, //特效尾迹长度[0,1]值越大，尾迹越长重
          color: "yellow", //流动点颜色
          symbol: "arrow", //箭头图标
          symbolSize: 8, //图标大小
      },
      lineStyle: {
        normal: {
          color: {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0,
                  color: 'rgba(255,255,67,0.1)' // 0% 处的颜色
              }, {
                  offset: 0.5,
                  color: 'rgba(255,255,67,1)' // 50% 处的颜色
              }, {
                  offset: 1,
                  color: 'rgba(255,255,67,0.1)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
          },
          /* function (value){ //随机颜色
              ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
              '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
              '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
              '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
              '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
              '#52b9c7','#4fb6d2','#4ab2e5']
          return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
          },*/
          width: 1.5, //线条宽度
          opacity: 0.15, //尾迹线条透明度
          curveness: 0.3, //尾迹线条曲直度
        //   width: 0.5,
        //   curveness: 0,
        //   shadowColor: "#fff",
        },
      },
      data: attackDataLeft
    },
    // 来自右侧
    {
      type: "lines",
      zlevel: 1, //设置这个才会有轨迹线的小尾巴
      // polyline: true,
      effect: {
          show: true,
          period: 3, //箭头指向速度，值越小速度越快
          trailLength: 0.01, //特效尾迹长度[0,1]值越大，尾迹越长重
          color: "yellow", //流动点颜色
          symbol: "arrow", //箭头图标
          symbolSize: 8, //图标大小
      },
      lineStyle: {
        normal: {
          color: {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0,
                  color: 'rgba(255,255,67,0.1)' // 0% 处的颜色
              }, {
                  offset: 0.5,
                  color: 'rgba(255,255,67,1)' // 50% 处的颜色
              }, {
                  offset: 1,
                  color: 'rgba(255,255,67,0.1)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
          },
          /* function (value){ //随机颜色
              ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
              '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
              '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
              '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
              '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
              '#52b9c7','#4fb6d2','#4ab2e5']
          return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
          },*/
          width: 1.5, //线条宽度
          opacity: 0.15, //尾迹线条透明度
          curveness: -0.3, //尾迹线条曲直度
        //   width: 0.5,
        //   curveness: 0,
        //   shadowColor: "#fff",
        },
      },
      data: attackDataRight
    },
    // {
    //     name: 'lable',
    //     type: 'scatter',
    //     coordinateSystem: 'geo',
    //     symbol: 'pin',
    //     symbolSize: [150, 90],
    //     hoverAnimation: true,
    //     zlevel: 2,
    //     label: {
    //         normal: {
    //             show: true,
    //             textStyle: {
    //                 color: "#fff",
    //                 lineHeight: 15,
    //             },
    //             formatter(params) {
    //                 console.log(params)
    //                 return "上行:" + params.targetArea.lable[0] + "G/s" + "\n" + "下行:" + params.targetArea.lable[1] + "G/s"
    //             }
    //         }
    //     },
    //     itemStyle: {
    //         normal: {
    //             color: '#1a3961', //标志颜色
    //             opacity: 1,
    //             borderColor: '#aee9fb',
    //             borderWidth: 1,
    //         }
    //     },
    //     showEffectOn: 'render',
    //     rippleEffect: {
    //         brushType: 'stroke'
    //     },
    //     data: LableData,
    // },
  ],
};

myChart.on("click", function (params) {
  console.log(params);
});
// setInterval(() => {
//     LableData.forEach(e => {
//         e.lable[1] = getRandom(10, 100, 2);
//         e.lable[0] = getRandom(1, 10, 2);
//     });
//     let option = myChart.getOption();
//     option.series[4].data = LableData;
//     myChart.setOption(option)
// }, 2000)
// function getRandom(start, end, fixed = 0) {
//     let differ = end - start;
//     let random = Math.random();
//     return (start + differ * random).toFixed(fixed)
// }
