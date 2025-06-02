/**
 * ## 自定义组件 ##
 * name: circleProgress
 * desc: 圆形进度条
 */

// ========================================
// 实例 => created => 模拟动态数据

// 展示数据更新
// showDataUpdate

var timer = setInterval(() => {

  ctx.showData[0].rate -= 0.1

  console.log('ctx.showData[0].rate: ', ctx.showData[0].rate)

  if(ctx.showData[0].rate < 0.5) {
      clearInterval(timer)
  }

}, 2000)


// ========================================
// 数据篮子 && 实例 => 数据篮子数据

// 展示数据
// showData

[
  {
    value: 1, // 排名值
    rate: 0.9 // 占比
  }
]


// ========================================
// 自定义组件 => 数据篮子计算数据

let ctx = this;

var option = {
  backgroundColor: "#0E1327",
  series: [
    {
      type: "gauge",
      radius: "54", // 外圈进度条半径
      startAngle: "90",
      splitNumber: 1, //刻度数量
      endAngle: "-269.9999",
      pointer: {
        show: false
      },
      detail: {
        formatter: function(value) {
          var num = Math.round(value);
          return "{bule|" + num + "}";
        },
        rich: {
          bule: {
            fontSize: 24,
            fontFamily: "DINBold",
            color: "#fff",
            fontWeight: "700"
            // padding: [0, 0, 0, 0]
          }
        },
        offsetCenter: ["0", "0"]
      },
      data: [
        {
          value: 1, // 排名值
          rate: 0.6 // 占比
        }
      ],
      title: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [
            [
              0.6,
              new (ctx.$echarts).graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: "rgba(255,227,122,1)"
                  },
                  {
                    offset: 0.7,
                    color: "rgba(255,128,91,1)"
                  }
                ]
              )
            ],
            [1, "#15337C"]
          ],
          width: 3, // 外圈进度条宽度
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          opacity: 1
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        // show: false,
        length: 10,
        lineStyle: {
          color: "#fff",
          width: 1,
          type: "solid"
        }
      },
      axisLabel: {
        show: false
      }
    },
    {
      //内圆
      type: "pie",
      radius: "44",
      center: ["50%", "50%"],
      z: 1,
      itemStyle: {
        normal: {
          color: new (ctx.$echarts).graphic.RadialGradient(
            0.5,
            0.5,
            0.8,
            [
              {
                offset: 0,
                color: "#1B4391"
              },
              {
                offset: 0.5,
                color: "#1E2B57"
              },
              {
                offset: 1,
                color: "#141F3D"
              }
            ],
            false
          ),
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      hoverAnimation: false,
      label: {
        show: false
      },
      tooltip: {
        show: false
      },
      data: [100]
    },
    {
      name: "内圈线",
      type: "gauge",
      z: 2,
      radius: "44",
      startAngle: "90",
      endAngle: "-269.9999",
      //center: ["50%", "75%"], //整体的位置设置
      axisLine: {
        // 坐标轴线
        lineStyle: {
          // 属性lineStyle控制线条样式
          color: [[1, "#25498a"]],
          width: 2,
          opacity: 1 //刻度背景宽度
        }
      },
      splitLine: {
        show: false
      },

      axisLabel: {
        show: false
      },
      pointer: {
        show: false
      },
      axisTick: {
        show: false
      },
      detail: {
        show: false
      }
    }
  ]
}

// 外圈渐变进度条
option.series[0].axisLine.lineStyle.color[0][0] = ctx.showData[0].rate;
option.series[0].data = ctx.showData;

return option
