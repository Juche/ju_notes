var dataArr = [
  {
    value: 1, // 排名值
    rate: 0.9,
    name: "开销户排行"
  }
];
var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
  {
    offset: 0,
    color: "rgba(255,227,122,1)"
  },
  {
    offset: 0.7,
    color: "rgba(255,128,91,1)"
  }
]);
var colorSet = [[dataArr[0].rate, color], [1, "#15337C"]];

var rich = {
  bule: {
    fontSize: 24,
    fontFamily: "DINBold",
    color: "#fff",
    fontWeight: "700"
    // padding: [0, 0, 0, 0]
  }
};
option = {
  backgroundColor: "#0E1327",
  series: [
    {
      type: "gauge",
      radius: "54px", // 外圈进度条半径
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
        rich: rich,
        offsetCenter: ["0", "0"]
      },
      data: dataArr,
      title: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: colorSet,
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
      radius: "44px",
      center: ["50%", "50%"],
      z: 1,
      itemStyle: {
        normal: {
          color: new echarts.graphic.RadialGradient(
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
      radius: "44px",
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
        show: 0
      }
    }
  ]
};
