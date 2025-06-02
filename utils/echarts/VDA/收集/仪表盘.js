
let showData = {
  name: "百度通过率",
  value: 66.6,
  unit: "%",
};

// let showData = ctx.showData;

let rate = showData.value/100;

let activeColor = ['rgba(33,138,255,1)', 'rgba(23,198,255,1)', 'rgba(34,255,222,1)', 'rgba(255,255,255,1)'];

let color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
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

option = {
  backgroundColor: "#0E1327",
  series: [
    {
      type: "gauge",
      radius: "53px",
      startAngle: "225",
      endAngle: "-30",
      // splitNumber: 1,
      pointer: {
        show: false,
      },
      detail: {
        formatter: [
            "{value|" + showData.value + "}{unit|" + showData.unit + "}",
            "{name|" + showData.name + "}"
        ].join("\n"),
        rich: rich,
        offsetCenter: ["0%", "0%"],
      },
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
  ],
}
