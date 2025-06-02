// let showData = {
//   name: "百度通过率",
//   value: 66.6,
//   unit: "%",
// };

let showData = ctx.showData;

let rate = showData.value / 100;
const colors = [
  ['rgba(28,126,255,1)', 'rgba(96,187,255,1)'],
  ['rgba(255,146,28,1)', 'rgba(255,204,96,1)'],
  ['rgba(238,19,19,1)', 'rgba(255,125,108,1)']
]

let activeColor;
if (rate <= 0.5) {
  activeColor = colors[0]
}else if (rate <= 0.8) {
  activeColor = colors[1]
}else {
  activeColor = colors[2]
}

let color = new ctx.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
  {
    offset: 0,
    color: activeColor[0], // 0% 处的颜色
  },
  {
    offset: 0.85,
    color: activeColor[1], // 100% 处的颜色
  },
  {
    offset: 1,
    color: "rgba(245,249,255,1)", // 100% 处的颜色
  },
]);
let colorSet = [
  [rate, color],
  [1, "#124495"],
];
let rich = {
  value: {
    fontSize: 22,
    color: "#E5F1FF",
    fontWeight: "500",
    padding: [-60, 0, 0, 0],
  },
  unit: {
    fontSize: 22,
    color: "#E5F1FF",
    fontWeight: "500",
    padding: [-60, 0, 0, 0],
  },
  name: {
    height: 80,
    lineHeight: 80,
    padding: [-30, 0, 0, 0],
    fontSize: 12,
    color: "#99C9FF",
  },
};

let option = {
  // backgroundColor: "#0E1327",
  series: [
    {
      type: "gauge",
      name: "外层辅助线",
      radius: "61px",
      startAngle: "210",
      endAngle: "-30",
      pointer: {
        show: false,
      },
      detail: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: [[1, "#2C85FF"]],
          width: 1,
          opacity: 1,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    {
      type: "gauge",
      radius: "57px",
      startAngle: "210",
      endAngle: "-30",
      // splitNumber: 1,
      pointer: {
        show: false,
      },
      detail: {
        // formatter: function (value) {
        //   // let num = Math.round(value);
        //   return (
        //     "{value|" +
        //     showData.value +
        //     "}{unit|" +
        //     showData.unit +
        //     "}\n{name|" +
        //     showData.name +
        //     "}"
        //   );
        // },
        formatter: [
          "{value|" + showData.value + "}{unit|" + showData.unit + "}",
          "{name|" + showData.name + "}"
        ].join("\n"),
        rich: rich,
        offsetCenter: ["0%", "0%"],
      },
      data: [showData],
      title: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: colorSet,
          width: 10,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    {
      name: "外圈刻度",
      type: "gauge",
      radius: "60px",
      startAngle: 210, //刻度起始
      endAngle: -30, //刻度结束
      z: 4,
      splitNumber: 1,
      axisTick: {
        show: false,
      },
      splitLine: {
        length: 13, //刻度节点线长度
        lineStyle: {
          width: 1,
          color: "#2C85FF",
        }, //刻度节点线
      },
      axisLabel: {
        color: "#4C97FF",
        fontSize: 12,
        padding: [-20, -10],
      }, //刻度节点文字颜色
      pointer: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          opacity: 0,
        },
      },
      detail: {
        show: false,
      },
    },
    {
      name: "内圈线",
      type: "gauge",
      radius: "43",
      center: ["50%", "50%"],
      splitNumber: 1, //刻度数量
      startAngle: 210,
      endAngle: 210 - 240 * rate,
      axisLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: [
            // [rate, '#2C85FF'],
            // [1, "transparent"]
            [1, "#2C85FF"],
          ],
        },
      },
      splitLine: {
        length: -13, //刻度节点线长度
        lineStyle: {
          width: 1,
          color: "#2C85FF",
        }, //刻度节点线
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      pointer: {
        show: false,
      },
      title: {
        show: false,
      },
      detail: {
        show: false,
      },
    },
  ],
};

return option;
