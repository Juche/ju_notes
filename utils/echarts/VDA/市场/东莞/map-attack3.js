let targetArea = [
  {
    name: "东莞",
    value: [114, 23],
  },
  {
    name: "上海",
    value: [121.4, 31.2],
  },
];

let attackDataLeft = [
  {
    fromName: "欧洲",
    toName: "东莞",
    coords: [
      [40, 40],
      [114, 23],
    ],
  },
  {
    fromName: "欧洲",
    toName: "上海",
    coords: [
      [40, 40],
      [121.4, 31.2],
    ],
  },
  {
    fromName: "非洲",
    toName: "东莞",
    coords: [
      [35, 25],
      [114, 23],
    ],
  },
  {
    fromName: "大洋洲",
    toName: "东莞",
    coords: [
      [80, 15],
      [114, 23],
    ],
  },
  {
    fromName: "大洋洲",
    toName: "上海",
    coords: [
      [80, 15],
      [121.4, 31.2],
    ],
  },
];

let attackDataRight = [
  {
    fromName: "北美",
    toName: "东莞",
    coords: [
      [140, 50],
      [114, 23],
    ],
  },
  {
    fromName: "北美",
    toName: "上海",
    coords: [
      [140, 50],
      [121.4, 31.2],
    ],
  },
  {
    fromName: "南美",
    toName: "东莞",
    coords: [
      [150, 30],
      [114, 23],
    ],
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
  backgroundColor: "rgba(30, 60, 100, 1)",
  geo: {
    map: "china",
    aspectScale: 0.8,
    layoutCenter: ["60%", "50%"], //地图位置
    layoutSize: "60%",
    itemStyle: {
      normal: {
        // shadowColor: "#276fce",
        shadowColor: "rgba(10, 30, 70, 1)",
        shadowOffsetX: 0,
        shadowOffsetY: 8,
        opacity: 1,
      },
      //   emphasis: {
      //     areaColor: "#276fce",
      //   },
    },
    regions: [
      {
        name: "南海诸岛",
        itemStyle: {
          //   areaColor: "rgba(0, 10, 52, 1)",
          //   borderColor: "rgba(0, 10, 52, 1)",
          normal: {
            opacity: 0,
            label: {
              show: false,
              //   color: "#009cc9",
            },
          },
        },
        label: {
          show: false,
          //   color: "#FFFFFF",
          //   fontSize: 12,
        },
      },
    ],
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
      // scaleLimit: {
      //   //滚轮缩放的极限控制
      //   min: 1,
      //   max: 2,
      // },
      itemStyle: {
        normal: {
          // areaColor: "rgba(33, 66, 120, 0.3)",
          areaColor: "#0a7bc9",
          borderColor: "#87eDff", //省市边界线00fcff 516a89
          borderWidth: 0.5,
        },
        emphasis: {
          // areaColor: "rgba(33, 66, 120, 0.5)",
          areaColor: "rgba(20, 54, 129, 1)",
          label: {
            color: "#fff",
          },
        },
      },
      data: [
        {
          name: "南海诸岛",
          value: 0,
          itemStyle: {
            normal: {
              opacity: 0,
              label: {
                show: false,
              },
            },
          },
        },
      ],
    },
    // 区域散点图
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      zlevel: 2,
      //   symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABHCAYAAACXgB6bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzZDQjQ5QzQ4Njg5MTFFOTg1Q0VBNkE1QzhCOTY3RjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDU1Mzk2MkE4NjhBMTFFOTg1Q0VBNkE1QzhCOTY3RjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNkNCNDlDMjg2ODkxMUU5ODVDRUE2QTVDOEI5NjdGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNkNCNDlDMzg2ODkxMUU5ODVDRUE2QTVDOEI5NjdGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr5aktUAAAtUSURBVHja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",
      symbolSize: 10,
      rippleEffect: {
        //坐标点动画
        period: 3,
        scale: 5,
        brushType: "fill",
      },
      //   label: {
      //     normal: {
      //       show: false,
      //       position: "right",
      //       formatter: "{b}",
      //       color: "#b3e2f2",
      //       fontWeight: "bold",
      //       fontSize: 18,
      //     },
      //   },
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
            type: "linear",
            x: 1,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255,255,67,0.2)",
              },
              {
                offset: 0.25,
                color: "rgba(255,255,67,1)",
              },
              {
                offset: 0.4,
                color: "rgba(255,255,67,0.6)",
              },
              {
                offset: 1,
                color: "rgba(255,255,67,0)",
              },
            ],
            global: false, // 缺省为 false
          },
          width: 1.5, //线条宽度
          opacity: 0.15, //尾迹线条透明度
          curveness: 0.3, //尾迹线条曲直度
          //   shadowColor: "#fff",
        },
      },
      data: attackDataLeft,
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
            type: "linear",
            x: 1,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255,255,67,0)",
              },
              {
                offset: 0.6,
                color: "rgba(255,255,67,0.6)",
              },
              {
                offset: 0.75,
                color: "rgba(255,255,67,1)",
              },
              {
                offset: 1,
                color: "rgba(255,255,67,0.2)",
              },
            ],
            global: false, // 缺省为 false
          },
          width: 1.5, //线条宽度
          opacity: 0.15, //尾迹线条透明度
          curveness: -0.3, //尾迹线条曲直度
          //   shadowColor: "#fff",
        },
      },
      data: attackDataRight,
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
