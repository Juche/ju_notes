option = {
  backgroundColor: "#0A1432",
  color: ["#5bc0ff", "#fda63f"],
  title: {
    top: "-10px",
    left: "0",
    subtext: "单位：百万",
    subtextStyle: {
      color: "#8cc2ff",
      fontSize: 20,
    },
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    right: "30px",
    y: "top",
    textStyle: {
      color: "#8cc2ff",
      fontSize: 18,
    },
    itemWidth: 16,
    itemHeight: 16,
    icon: "roundRect",
    data: [
      {
        name: "昨日总量",
        // icon: "rect",
        textStyle: {
          padding: [0, 15, 0, 2],
        },
      },
      {
        name: "今日总量",
        // icon: "rect",
        textStyle: {
          padding: [0, 0, 0, 2],
        },
      },
    ],
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
      data: ["柜面", "金卡", "网银", "ATM", "手机银行"],
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
      splitLine: {
        lineStyle: {
          color: "#384d6c",
          width: 1,
        },
      },
      axisLabel: {
        color: "#8cc2ff",
        textAlign: "center",
        fontSize: 19,
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
      name: "昨日总量",
      type: "bar",
      barWidth: "18",
      data: [10, 20, 30, 40, 50],
      itemStyle: {
        normal: {
          //柱形图圆角，初始化效果
          barBorderRadius: [20, 20, 0, 0],
        },
      },
    },
    {
      name: "今日总量",
      type: "bar",
      barWidth: "25",
      data: [10, 25, 30, 55, 60],
      itemStyle: {
        normal: {
          //柱形图圆角，初始化效果
          barBorderRadius: [20, 20, 0, 0],
        },
      },
    },
  ],
};
