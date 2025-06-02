backgroundColor = "#000";

color = ["#FFC028", "#FF8121", "#12F3FF", "#966BFF", "#E13857"];

// bar 宽度
// line area
types = ["bar", "bar", "bar"];

dataset = {
  source: [
    ["date", "09/06", "09/07", "09/08", "09/09", "09/10", "09/11"],
    ["指标1", 41.1, 30.4, 66, 22, 11, 53.3],
    ["指标2", 51.1, 55.1, 11, 33, 44, 53.3],
    ["指标3", 61.1, 50.4, 33, 77, 22, 45.1],
  ],
};

// xAxis = [
//   {
//     type: "category",
//     boundaryGap: false,
//     axisTick: {
//       show: false,
//     },
//     axisLabel: {
//       // show: false,
//       textStyle: {
//         fontSize: 14,
//         color: "#CCE6FF",
//       },
//     },
//     axisLine: {
//       lineStyle: {
//         color: "#CCE6FF",
//         width: 1,
//         type: "dashed",
//       },
//     },
//     splitLine: {
//       show: true,
//       lineStyle: {
//         type: "dashed",
//       },
//     },
//   },
// ];

// yAxis = [
//   {
//     type: "value",
//     // max:2000,
//     // min:0,
//     // show:false,
//     name: "单位：KM",
//     nameTextStyle: {
//       fontSize: 14,
//       color: "#CCE6FF",
//       // lineHeight: 20
//     },
//     splitNumber: 4,
//     splitLine: {
//       // show:false,
//       lineStyle: {
//         type: "dashed",
//       },
//     },
//     axisLine: {
//       show: false,
//     },
//     axisTick: {
//       show: false,
//     },
//     axisLabel: {
//       textStyle: {
//         fontSize: 14,
//         color: "#CCE6FF",
//       },
//     },
//   },
// ];

xAxis = [
  {
    type: "category",
    data: ["北京", "上海", "广州", "深圳", "香港", "澳门", "台湾"],
    axisLine: {
      lineStyle: {
        color: "#DCE2E8",
      },
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      interval: 0,
      textStyle: {
        color: "#556677",
      },
      // 默认x轴字体大小
      fontSize: 12,
      // margin:文字到x轴的距离
      margin: 15,
    },
    axisPointer: {
      label: {
        // padding: [11, 5, 7],
        padding: [0, 0, 10, 0],
        // 这里的margin和axisLabel的margin要一致!
        margin: 15,
        // 移入时的字体大小
        fontSize: 12,
        backgroundColor: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#fff", // 0% 处的颜色
            },
            {
              // offset: 0.9,
              offset: 0.86,
              /*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

                      */
              color: "#fff", // 0% 处的颜色
            },
            {
              offset: 0.86,
              color: "#33c0cd", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#33c0cd", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
    boundaryGap: false,
  },
]

yAxis = [
  {
    type: "value",
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#DCE2E8",
      },
    },
    axisLabel: {
      textStyle: {
        color: "#556677",
      },
    },
    splitLine: {
      show: false,
    },
  },
  {
    type: "value",
    position: "right",
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: "#556677",
      },
      formatter: "{value}",
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#DCE2E8",
      },
    },
    splitLine: {
      show: false,
    },
  },
]

legend = {
  icon: " roundRect ",
  itemWidth: 15,
  itemHeight: 10,
  itemGap: 20,
  top: "5%",
  right: "5%",
  textStyle: {
    padding: [30, 10, 30, 10],
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Microsoft YaHei",
    color: "#CCE6FF",
  },
};

// tooltip = {
//     trigger: "axis",
//     axisPointer: {
//         type: "cross",
//         label: {
//             backgroundColor: "#6a7985",
//         },
//     },
// };

// tooltip = {
//     trigger: "axis",
//     // formatter: function(params) {
//     //     let html = '';
//     //     params.forEach(v => {
//     //         console.log(v)
//     //         html += `<div style="color: #666;font-size: 14px;line-height: 24px">
//     //             <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
//     //             ${v.seriesName}.${v.name}
//     //             <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
//     //             万元`;
//     //     })

//     //     return html
//     // },
//     // extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
//     axisPointer: {
//         // type: "cross",
//         type: 'shadow',
//         shadowStyle: {
//             color: '#f003',
//             shadowColor: 'rgba(225,225,225,0.3)',
//             shadowBlur: 5
//         }
//     }
// }

tooltip = {
  trigger: "axis",
  axisPointer: {
    label: {
      show: true,
      backgroundColor: "#fff",
      color: "#556677",
      borderColor: "rgba(0,0,0,0)",
      shadowColor: "rgba(0,0,0,0)",
      shadowOffsetY: 0,
    },
    lineStyle: {
      width: 0,
    },
  },
  backgroundColor: "#fff",
  textStyle: {
    color: "#5c6c7c",
  },
  padding: [10, 10],
  extraCssText: "box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)",
};

grid = {
  top: "210",
  right: "20",
  bottom: "20",
  left: "20",
  containLabel: true,
};

series = [];
for (let i = 1; i < dataset.source.length; i++) {
  series.push({
    type: types[i - 1],
    zlevel: 2,
    seriesLayoutBy: "row",
  });
}

option = {
  backgroundColor,
  color,
  title: {
    text: "距离",
    textStyle: {
      fontSize: 12,
      fontWeight: 400,
    },
    left: "center",
    top: "5%",
  },
  xAxis,
  yAxis,
  legend,
  tooltip,
  grid,
  dataset,
  series,
};
