// ide 数据篮子初始化 option (带初始假数据)

var option =
// xxxOption
{
  backgroundColor: "#fff",

  series: [
    {
      name: "灰色外圈",
      type: "gauge",
      radius: "75",
      startAngle: "225",
      endAngle: "-45.1",
      // splitNumber: 0,
      min: 0, //最小刻度
      max: 100, //最大刻度
      splitNumber: 4, //刻度数量
      axisLine: {
        lineStyle: {
          color: [[1, "#dcdfe5"]],
          width: 1
          //   todo: 设置圆角(不支持圆角)
        }
      },
      pointer: {
        show: false
      },
      detail: {
        show: false
      },
      axisLabel: {
        //刻度标签
        show: true,
        color: "#999",
        distance: -45,
        fontSize: 11,
        borderRadius: 10,
        padding: [0, 3],
        lineHeight: 28,
        backgroundColor: "#fff",
        formatter: "{value}%"
      },
      axisTick: {
        //分刻度
        show: false
        // splitNumber: 5,
        // length: 20,
        // lineStyle: {
        //   color: "#f00",
        //   width: 1
        // }
      },
      splitLine: {
        //分隔线样式
        show: false
        // length: 25,
        // lineStyle: {
        //   color: "#f00"
        // }
      }
    },
    {
      type: "gauge",
      radius: "60",
      // min: 0, //最小刻度
      // max: 100, //最大刻度
      // splitNumber: 4, //刻度数量
      splitNumber: 0,
      startAngle: "224.99",
      endAngle: "-45",
      // z: 20,
      //   z: 30,
      //   detail: {
      //     formatter: "xx率",
      //     color: "#f00",
      //     fontSize: 40,
      //     offsetCenter: [0, "75%"]
      //   },
      detail: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 10,

          color: [
            [
              0.66,
              new (this.$echarts || echarts).graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: "#306ae0"
                  },
                  {
                    offset: 1,
                    color: "#136DFF"
                  }
                ]
              )
            ],
            [1, "#dcdfe5"]
          ]
        }
      },
      splitLine: {
        show: false
      },
      itemStyle: {
        //指针样式
        normal: {
          // series[i]-gauge.itemStyle.color
          color: "#F1F0F5"
        }
      },
      pointer: {
        show: true,
        length: "46",
        width: 36 //指针粗细
        // todo: 配颜色
      },
      data: [
        {
          value: 66
        }
      ]
    },
    {
      name: "内层圆",
      tooltip: {
        show: false
      },
      type: "pie",
      radius: ["0", "36"],
      center: ["50%", "50%"],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: "#F1F0F5"
        },
        emphasis: {
          color: "#F1F0F5"
        }
      },
      label: {
        normal: {
          show: true,
          position: "center",
          // formatter: function (params) {
          //   return '{value|' + params.value + '}{unit|%}\n{name|' + params.name + '}';
          // },
          formatter: function(params) {
            return (
              "{value|" +
              params.value +
              "}{unit|%}\n{name|" +
              params.name +
              "}"
            );
          },
          rich: {
            value: {
              // fontFamily: 'SFUDINEngschrift',
              lineHeight: 30,
              fontSize: 22,
              color: "#333"
              //   verticalAlign: "top"
            },
            unit: {
              // fontFamily: 'SFUDINEngschrift',
              fontSize: 20,
              color: "#333",
              lineHeight: 30
              //   verticalAlign: "top"
            },
            name: {
              // fontFamily: 'SFUDINEngschrift',
              //   lineHeight: 50,
              fontSize: 12,
              color: "#333"
              //   verticalAlign: "top"
            }
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      animation: false,
      data: [{ value: 66, name: "xx率" }]
    }
  ]
};

// 对请求数据处理 && 更新 option 示例

// 注意把 option 替换为数据篮子对应的数据 ctx.xxxOption
// 模拟请求过程
setTimeout(() => {
  // 假想的原始数据
  var data = [{ name: "开机率", value: 95, maxValue: 100 }];

  var rate = (data[0].value / data[0].maxValue).toFixed(2);

  option.series[1].axisLine.lineStyle.color[0][0] = rate;
  option.series[1].data = data;
  option.series[2].data = data;

  // myChart.setOption(option);
}, 2000);

// option = {
//   backgroundColor: "#fff",

//   series: [
//     {
//       name: "灰色外圈",
//       type: "gauge",
//       radius: "75",
//       startAngle: "225",
//       endAngle: "-45.1",
//       // splitNumber: 0,
//       min: 0, //最小刻度
//       max: 100, //最大刻度
//       splitNumber: 4, //刻度数量
//       axisLine: {
//         lineStyle: {
//           color: [[1, "#dcdfe5"]],
//           width: 1
//           //   todo: 设置圆角(不支持圆角)
//         }
//       },
//       // axisLabel: {
//       //   show: false
//       // },
//       // axisTick: {
//       //   show: false
//       // },
//       // splitLine: {
//       //   show: false
//       // },
//       pointer: {
//         show: false
//       },
//       detail: {
//         show: false
//       },

//       axisLabel: {
//         //刻度标签
//         show: true,
//         color: "#999",
//         distance: -45,
//         fontSize: 11,
//         borderRadius: 10,
//         padding: [0, 3],
//         lineHeight: 28,
//         backgroundColor: "#fff",
//         formatter: "{value}%"
//       },
//       axisTick: {
//         //分刻度
//         show: false
//         // splitNumber: 5,
//         // length: 20,
//         // lineStyle: {
//         //   color: "#f00",
//         //   width: 1
//         // }
//       },
//       splitLine: {
//         //分隔线样式
//         show: false
//         // length: 25,
//         // lineStyle: {
//         //   color: "#f00"
//         // }
//       }
//     },
//     {
//       type: "gauge",
//       radius: "60",
//       // min: 0, //最小刻度
//       // max: 100, //最大刻度
//       // splitNumber: 4, //刻度数量
//       splitNumber: 0,
//       startAngle: "224.99",
//       endAngle: "-45",
//       // z: 20,
//       //   z: 30,
//       //   detail: {
//       //     formatter: "xx率",
//       //     color: "#f00",
//       //     fontSize: 40,
//       //     offsetCenter: [0, "75%"]
//       //   },
//       detail: {
//         show: false
//       },
//       axisLine: {
//         show: true,
//         lineStyle: {
//           width: 10,

//           color: [
//             [
//               0.66,
//               new (this.$echarts || echarts).graphic.LinearGradient(
//                 0,
//                 0,
//                 1,
//                 0,
//                 [
//                   {
//                     offset: 0,
//                     color: "#306ae0"
//                   },
//                   {
//                     offset: 1,
//                     color: "#136DFF"
//                   }
//                 ]
//               )
//             ],
//             [1, "#dcdfe5"]
//           ]
//         }
//       },
//       // axisLabel: {
//       //   //刻度标签
//       //   show: true,
//       //   color: "#999",
//       //   distance: -69,
//       //   fontSize: 11,
//       //   borderRadius: 10,
//       //   padding: [0, 2],
//       //   lineHeight: 24,
//       //   backgroundColor: "#fff",
//       //   formatter: "{value}%"
//       // },
//       // axisTick: {
//       //   //分刻度
//       //   show: false
//       //   // splitNumber: 5,
//       //   // length: 20,
//       //   // lineStyle: {
//       //   //   color: "#f00",
//       //   //   width: 1
//       //   // }
//       // },
//       // splitLine: {
//       //   //分隔线样式
//       //   show: false
//       //   // length: 25,
//       //   // lineStyle: {
//       //   //   color: "#f00"
//       //   // }
//       // },

//       splitLine: {
//         show: false
//       },
//       itemStyle: {
//         //指针样式
//         normal: {
//           // series[i]-gauge.itemStyle.color
//           color: "#F1F0F5"
//         }
//       },
//       pointer: {
//         show: true,
//         length: "46",
//         width: 36 //指针粗细
//         // todo: 配颜色
//       },
//       data: [
//         {
//           value: 66
//         }
//       ]
//     },
//     {
//       name: "内层圆",
//       tooltip: {
//         show: false
//       },
//       type: "pie",
//       radius: ["0", "36"],
//       center: ["50%", "50%"],
//       hoverAnimation: false,
//       itemStyle: {
//         normal: {
//           color: "#F1F0F5"
//         },
//         emphasis: {
//           color: "#F1F0F5"
//         }
//       },
//       label: {
//         normal: {
//           show: true,
//           position: "center",
//           // formatter: function (params) {
//           //   return '{value|' + params.value + '}{unit|%}\n{name|' + params.name + '}';
//           // },
//           formatter: function(params) {
//             return (
//               "{value|" + params.value + "}{unit|%}\n{name|" + params.name + "}"
//             );
//           },
//           rich: {
//             value: {
//               // fontFamily: 'SFUDINEngschrift',
//               lineHeight: 30,
//               fontSize: 22,
//               color: "#333"
//               //   verticalAlign: "top"
//             },
//             unit: {
//               // fontFamily: 'SFUDINEngschrift',
//               fontSize: 20,
//               color: "#333",
//               lineHeight: 30
//               //   verticalAlign: "top"
//             },
//             name: {
//               // fontFamily: 'SFUDINEngschrift',
//               //   lineHeight: 50,
//               fontSize: 12,
//               color: "#333"
//               //   verticalAlign: "top"
//             }
//           }
//         }
//       },
//       labelLine: {
//         normal: {
//           show: false
//         }
//       },
//       animation: false,
//       data: [{ value: 66, name: "xx率" }]
//     }
//   ]
// };
