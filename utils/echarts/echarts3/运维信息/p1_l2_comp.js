let showData = {
  title: "单位：百万",
  legend: ["昨日总量", "今日总量"],
  xAxis: ["柜面", "金卡", "网银", "ATM", "手机银行"],
  series: [
    [10, 20, 30, 40, 50],
    [10, 25, 30, 55, 160],
  ],
};

let showData = ctx.showData;

const color = ["#5bc0ff", "#fda63f"];

let option = {
  // backgroundColor: "#0A1432",
  color: color,
  title: {
    top: "-10px",
    left: "0",
    subtext: showData.title,
    subtextStyle: {
      color: "#8cc2ff",
      fontSize: 20,
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    right: "20",
    y: "top",
    textStyle: {
      color: "#8cc2ff",
      fontSize: 18,
    },
    itemWidth: 16,
    itemHeight: 16,
    icon: "roundRect",
    data: showData.legend,
  },
  grid: {
    left: "10px",
    right: "10px",
    bottom: "10px",
    top: "50px",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: showData.xAxis,
      axisLine: {
        lineStyle: {
          color: "#b3d4ff",
        },
      },
      axisLabel: {
        fontSize: 16,
        interval: 0,
      },
      axisTick: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      splitNumber: 4,
      splitLine: {
        lineStyle: {
          color: "rgba(168, 217, 255, 0.3)",
          width: 1,
        },
      },
      axisLabel: {
        color: "#8cc2ff",
        textAlign: "center",
        fontSize: 16,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: showData.legend[0],
      type: "bar",
      barWidth: "18",
      data: showData.series[0],
      itemStyle: {
        normal: {
          //柱形图圆角，初始化效果
          barBorderRadius: [20, 20, 0, 0],
        },
      },
    },
    {
      name: showData.legend[1],
      type: "bar",
      barWidth: "25",
      data: showData.series[1],
      itemStyle: {
        normal: {
          //柱形图圆角，初始化效果
          barBorderRadius: [20, 20, 0, 0],
        },
      },
    },
  ],
};

return option;
