var maxValue = 100;
var curValue = 87;
var rate = (curValue / maxValue).toFixed(2);

var option = {
  backgroundColor: "#fff",

  series: [
    {
      name: "灰色外圈",
      type: "gauge",
      radius: "60%",
      startAngle: "225",
      endAngle: "-45.1",
      // splitNumber: 0,
      axisLine: {
        lineStyle: {
          color: [[1, "#dcdfe5"]],
          width: 2
          //   todo: 设置圆角(不支持圆角)
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
      splitNumber: 4, //刻度数量
      startAngle: "224.99",
      endAngle: "-45",
      //   z: 30,
      //   detail: {
      //     formatter: "开机率",
      //     color: "#f00",
      //     fontSize: 40,
      //     offsetCenter: [0, "75%"]
      //   },
      axisLine: {
        show: true,
        lineStyle: {
          width: 20,

          color: [
            [
              rate,
              new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#306ae0"
                },
                {
                  offset: 1,
                  color: "#136DFF"
                }
              ])
            ],
            [1, "#dcdfe5"]
          ]
        }
      },
      axisLabel: {
        //刻度标签
        show: true,
        color: "#999",
        distance: -75,
        fontSize: 20,
        borderRadius: 10,
        lineHeight: 30,
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
      },
      itemStyle: {
        //刻度样式
        normal: {
          // series[i]-gauge.itemStyle.color
          color: "#F1F0F5"
        }
      },
      pointer: {
        show: true,
        length: "75%",
        width: 90 //指针粗细
        // todo: 配颜色
      },
      data: [
        {
          value: curValue
        }
      ]
    },
    {
      name: "内层圆",
      //   z: 100,
      tooltip: {
        show: false
      },
      type: "pie",
      radius: ["0%", "30%"],
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
              "{value|" + params.value + "}{unit|%}\n{name|" + params.name + "}"
            );
          },
          rich: {
            value: {
              // fontFamily: 'SFUDINEngschrift',
              lineHeight: 50,
              fontSize: 30,
              color: "#333"
              //   verticalAlign: "top"
            },
            unit: {
              // fontFamily: 'SFUDINEngschrift',
              fontSize: 30,
              color: "#333",
              lineHeight: 50
              //   verticalAlign: "top"
            },
            name: {
              // fontFamily: 'SFUDINEngschrift',
              //   lineHeight: 50,
              fontSize: 20,
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
      data: [{ value: curValue, name: "开机率" }]
    }
  ]
};
