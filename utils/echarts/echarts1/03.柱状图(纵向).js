// let = showData = {
//   unit: "单位: 万户",
//   legend: ["正常账户", "有效账户"],
//   xAxis: ["对公", "个人"],
//   source: [
//     [11, 11],
//     [12, 20],
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

// let colorSet = ["#FFC028", "#FF8121", "#12F3FF", "#966BFF", "#E13857"];

//默认数据
let unit = showData.unit;
let legend = showData.legend;
let xAxis = showData.xAxis;
let source = showData.source;

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

let textColor = "#fff";
let option = {
  // backgroundColor: "#0e3573",
  // color: colorSet,
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
    itemWidth: 16,
    itemHeight: 16,
    icon: "rect",
    textStyle: {
      fontSize: 16,
      color: textColor,
    },
    // data: legend,
  },
  xAxis: {
    type: "category",
    // boundaryGap: false,
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
      barWidth: 24,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#dba620",
            },
            {
              offset: 1,
              color: "#fbe468",
            },
          ]),
        },
      },
      label: {
        show: true,
        position: "top",
        color: "#fff",
      },
      data: source[0],
    },
    {
    name: legend[1],
    type: type[1],
      barWidth: 24,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: "#2276e8",
            },
            {
              offset: 1,
              color: "#41d9fe",
            },
          ]),
        },
      },
      label: {
        show: true,
        position: "top",
        color: "#fff",
      },
      data: source[1],
    },
  ],
};

return option;
