// let = showData = {
//   unit: "单位: 万户",
//   legend: ["数据1", "数据2", "数据3", "数据4", "数据5", "数据6"],
//   // xAxis: [],
//   source: [
//     [500],
//     [-1900],
//     [-600],
//     [3400],
//     [2200],
//     [1700],
//   ],
// };

/** @type {V2ViewType} */
let ctx = this;

var showData = this.showData;

// const colorSet = [];
const type = [];

Object.keys(ctx.sourceConfig).forEach((key) => {
  if (ctx.sourceConfig[key].type) {
    // colorSet.push(ctx.sourceConfig[key].color);
    type.push(ctx.sourceConfig[key].type);
  }
});

// let colorSet = [
//   "#FFC028",
//   "#FF8121",
//   "#12F3FF",
//   "#966BFF",
//   "#E13857",
//   "#33fc74",
// ];

//默认数据
let unit = showData.unit;
let legend = showData.legend;
// let xAxis = showData.xAxis;
let source = showData.source;

//绑定数据源数据
if (ctx.source1 && ctx.source1.source && ctx.source1.source[0]) {
  // xAxis = ctx.source1.xAxis.data;
  source[0] = ctx.source1.source[0].data;
  legend[0] = ctx.source1.source[0].name;
}
if (ctx.source2 && ctx.source2.source && ctx.source2.source[0]) {
  // xAxis = ctx.source2.xAxis.data;
  source[1] = ctx.source2.source[0].data;
  legend[1] = ctx.source2.source[0].name;
}
if (ctx.source3 && ctx.source3.source && ctx.source3.source[0]) {
  // xAxis = ctx.source3.xAxis.data;
  source[2] = ctx.source3.source[0].data;
  legend[2] = ctx.source3.source[0].name;
}
if (ctx.source4 && ctx.source4.source && ctx.source4.source[0]) {
  // xAxis = ctx.source4.xAxis.data;
  source[3] = ctx.source4.source[0].data;
  legend[3] = ctx.source4.source[0].name;
}
if (ctx.source5 && ctx.source5.source && ctx.source5.source[0]) {
  // xAxis = ctx.source5.xAxis.data;
  source[4] = ctx.source5.source[0].data;
  legend[4] = ctx.source5.source[0].name;
}
if (ctx.source6 && ctx.source6.source && ctx.source6.source[0]) {
  // xAxis = ctx.source6.xAxis.data;
  source[5] = ctx.source6.source[0].data;
  legend[5] = ctx.source6.source[0].name;
}

let textColor = "#fff";
let option = {
  // backgroundColor: "#0e3573",
  // color: colorSet,
  title: {
    subtext: unit,
    padding: [15, 0, 0, 30],
    subtextStyle: {
      color: "#fff",
      fontSize: 16,
      align: "right",
    },
  },
  legend: {
    top: 20,
    // lft: "30",
    right: "30",
    itemGap: 20,
    itemWidth: 16,
    itemHeight: 16,
    icon: "rect",
    textStyle: {
      fontSize: 16,
      color: textColor,
    },
    // data: legend,
  },
  grid: {
    top: "50",
    right: "30",
    bottom: "10",
    left: "30",
    containLabel: true,
  },
  xAxis: [
    {
      type: "value",
      position: "top",
      axisPointer: {
        show: false,
      },
      axisTick: {
        show: 0,
      },
      axisLine: {
        lineStyle: {
          color: textColor,
          width: 2,
        },
      },
      // 不显示x轴文本
      axisLabel: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: textColor,
          opacity: 0.5,
          type: "solid",
          width: 0.5,
        },
      },
    },
  ],
  yAxis: [
    {
      type: "category",
      axisLine: {
        lineStyle: {
          color: textColor,
          width: 2,
        },
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      // data: ["资金清算"],
    },
  ],
  series: [
    {
      name: legend[0],
      type: type[0],
      barWidth: 24,
      barGap: 0.5,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#ff6678",
            },
            {
              offset: 1,
              color: "#f73b15",
            },
          ]),
        },
      },
      label: {
        show: true,
        position: "inside",
        color: "#fff",
        fontSize: 20,
      },
      data: source[0],
    },
    {
      name: legend[1],
      type: type[1],
      barWidth: 24,
      barGap: 0.5,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#41d9fe",
            },
            {
              offset: 1,
              color: "#2276e8",
            },
          ]),
        },
      },
      label: {
        show: true,
        position: "inside",
        color: "#fff",
        fontSize: 20,
      },
      data: source[1],
    },
    {
      name: legend[2],
      type: type[2],
      barWidth: 24,
      barGap: 0.5,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#fae572",
            },
            {
              offset: 1,
              color: "#dfaa1e",
            },
          ]),
        },
      },
      label: {
        show: true,
        position: "inside",
        color: "#fff",
        fontSize: 20,
      },
      data: source[2],
    },
    {
      name: legend[3],
      type: type[3],
      barWidth: 24,
      barGap: 0.5,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#fec073",
            },
            {
              offset: 1,
              color: "#e26812",
            },
          ]),
        },
      },
      label: {
        show: true,
        position: "inside",
        color: "#fff",
        fontSize: 20,
      },
      data: source[3],
    },
    {
      name: legend[4],
      type: type[4],
      barWidth: 24,
      barGap: 0.5,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#41fe42",
            },
            {
              offset: 1,
              color: "#35b548",
            },
          ]),
        },
      },
      label: {
        show: true,
        position: "inside",
        color: "#fff",
        fontSize: 20,
      },
      data: source[4],
    },
    {
      name: legend[5],
      type: type[5],
      barWidth: 24,
      barGap: 0.5,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#64e5e0",
            },
            {
              offset: 1,
              color: "#0caf82",
            },
          ]),
        },
      },
      label: {
        show: true,
        position: "inside",
        color: "#fff",
        fontSize: 20,
      },
      data: source[5],
    },
  ],
};

return option;
