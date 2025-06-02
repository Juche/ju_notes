// let showData = {
//   unit: "单位: 户",
//   legend: ["对公开户数", "个人开户数", "对公账户净增值", "个人账户净增值"],
//   xAxis: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
//   source: [
//     [11, 11, 15, 13, 12, 13, 10],
//     [21, -12, 12, 15, 13, 12, 20],
//     [31, -32, 32, 35, 33, 32, 30],
//     [13, -23, 23, 53, 33, 23, 30],
//   ],
// };

/** @type {V2ViewType} */
let ctx = this;
let showData = ctx.showData;

// ctx.sourceConfig.source1.color

// let colorSet = ["#FFC028", "#FF8121", "#12F3FF", "#966BFF", "#E13857", "#1786fc"];
// let colorSet = ctx.sourceConfig.map((item) => {
//     return item.color;
// })
// let type = ctx.sourceConfig.map((item) => {
//     return item.type;
// })

const colorSet = [];
const type = [];

Object.keys(ctx.sourceConfig).forEach((key) => {
  if (ctx.sourceConfig[key].color) {
    colorSet.push(ctx.sourceConfig[key].color);
  }
  if (ctx.sourceConfig[key].type) {
    type.push(ctx.sourceConfig[key].type);
  }
});

//默认数据
let unit = showData.unit;
let legend = showData.legend;
let xAxis = showData.xAxis;
let source = showData.source;
// seriesData1 = showData.source[0]
// seriesData2 = showData.source[1]
// seriesData3 = showData.source[2]
// seriesData4 = showData.source[3]

let textColor = "#fff";

//绑定数据源数据
if (ctx.source1 && ctx.source1.source && ctx.source1.source[0]) {
  xAxis = ctx.source1.xAxis.data;
  source[0] = ctx.source1.source[0].data;
  legend[0] = ctx.source1.source[0].name;
}
if (ctx.source2 && ctx.source2.source && ctx.source2.source[0]) {
  xAxis = ctx.source2.xAxis.data;
  source[1] = ctx.source2.source[0].data;
  legend[1] = ctx.source2.source[0].name;
}
if (ctx.source3 && ctx.source3.source && ctx.source3.source[0]) {
  xAxis = ctx.source3.xAxis.data;
  source[2] = ctx.source3.source[0].data;
  legend[2] = ctx.source3.source[0].name;
}
if (ctx.source4 && ctx.source4.source && ctx.source4.source[0]) {
  xAxis = ctx.source4.xAxis.data;
  source[3] = ctx.source4.source[0].data;
  legend[3] = ctx.source4.source[0].name;
}

let option = {
  // backgroundColor: "#0e3573",
  color: colorSet,
  title: {
    subtext: unit,
    padding: [0, 0, 0, 30],
    subtextStyle: {
      color: "#fff",
      fontSize: 16,
      align: "right",
    },
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  grid: {
    top: "50",
    right: "30",
    bottom: "10",
    left: "30",
    containLabel: true,
  },
  legend: {
    top: 5,
    right: "30",
    itemGap: 20,
    itemWidth: 25,
    itemHeight: 14,
    icon: "roundRect",
    textStyle: {
      fontSize: 16,
      color: textColor,
    },
    // data: legend,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    textStyle: {
      color: textColor,
    },
    axisLine: {
      lineStyle: {
        color: textColor,
      },
    },
    axisTick: {
      show: 0,
    },
    data: xAxis,
  },
  yAxis: {
    type: "value",
    // axisLabel: {
    //   formatter: "{value} 户",
    // },
    axisLine: {
      lineStyle: {
        color: textColor,
      },
    },
    splitLine: {
      lineStyle: {
        color: textColor,
        opacity: 0.8,
        type: "solid",
        width: 0.5,
      },
    },
  },
  series: [
    {
      name: legend[0],
      type: type[0],
      data: source[0],
    },
    {
      name: legend[1],
      type: type[1],
      data: source[1],
    },
    {
      name: legend[2],
      type: type[2],
      data: source[2],
    },
    {
      name: legend[3],
      type: type[3],
      data: source[3],
    },
  ],
};

return option;
