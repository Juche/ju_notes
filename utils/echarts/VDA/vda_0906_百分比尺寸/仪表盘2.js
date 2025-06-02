var maxValue = 100;
var curValue = 87;
var rate = (curValue / maxValue).toFixed(2);

var option = {
  backgroundColor: "#081537",

  series: [
    {
      // 外圈一,蓝
      name: "蓝色外圈",
      type: "gauge",
      radius: "50%",
      startAngle: "225",
      endAngle: "-45.1",
      z: 50,
      // splitNumber: 0,
      axisLine: {
        lineStyle: {
          color: [[1, "#67C7FF"]],
          width: 4
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      pointer: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      // 外圈二,深蓝
      name: "深蓝外圈",
      type: "gauge",
      radius: "50%",
      startAngle: "225",
      endAngle: "-45.1",
      // z: 11,
      z: 40,
      axisLine: {
        lineStyle: {
          color: [
            // [data.value / 100, "#3C8FF4"],
            [1, "#094380"]
          ],
          width: 10
          // borderWidth: 2
          // borderColor: 'red'
        }
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      pointer: {
        show: false
      },
      detail: {
        show: false
      }
    },
    {
      type: "gauge",
      radius: "50%",
      min: 0, //最小刻度
      max: 100, //最大刻度
      splitNumber: 10, //刻度数量
      startAngle: "224.99",
      endAngle: "-45",
      z: 30,
      detail: {
        formatter: "开机率",
        color: "#accfff",
        fontSize: 40,
        offsetCenter: [0, "75%"]
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 90,
          color: [
            [
              rate,
              new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#04215e"
                },
                {
                  offset: 1,
                  color: "#1d50ad"
                }
              ])
            ],
            [1, "#041145"]
          ]
        }
      },
      axisLabel: { //刻度标签
        show: true,
        color: "#fff",
        distance: 0,
        fontSize: 12
      },
      axisTick: { //分刻度
        show: true,
        splitNumber: 5,
        length: 20,
        lineStyle: {
          color: "#accfff",
          width: 1
        }
      },
      splitLine: { //分隔线样式
        show: true,
        length: 25,
        lineStyle: {
          color: "#accfff"
        }
      },
      itemStyle: { //刻度样式
        normal: {
          show: false,
          // series[i]-gauge.itemStyle.color
          color: "#fff"
        }
      },
      pointer: {
        show: true,
        length: "95%",
        width: 10 //指针粗细
        // todo: 配颜色
      },
      data: [
        {
          value: curValue
        }
      ]
    },
    {
      name: "外层圆",
      tooltip: {
        show: false
      },
      type: "pie",
      radius: ["0%", "30%"],
      center: ["50%", "50%"],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: "#041142"
        },
        emphasis: {
          color: "#041142"
        }
      },
      data: [{ value: 0 }]
    },
    {
      name: "内层圆",
      z: 100,
      tooltip: {
        show: false
      },
      type: "pie",
      radius: ["0%", "20%"],
      center: ["50%", "50%"],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: "#164191"
        },
        emphasis: {
          color: "#164191"
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
            return "{value|" + params.value + "}{unit|%}";
          },
          rich: {
            value: {
              // fontFamily: 'SFUDINEngschrift',
              lineHeight: 70,
              fontSize: 50,
              color: "#fff",
              verticalAlign: "bottom"
            },
            unit: {
              // fontFamily: 'SFUDINEngschrift',
              fontSize: 50,
              color: "#fff",
              lineHeight: 34,
              verticalAlign: "bottom"
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
      data: [{ value: curValue, name: "开机率" }]
    }
  ]
};
