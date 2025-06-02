let colorSet = ["#FFC028", "#FF8121", "#12F3FF", "#966BFF", "#E13857"];
let textColor = '#fff'
option = {
  backgroundColor: "#0e3573",
  color: colorSet,
  title: {
    subtext: "单位: 户",
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
    right: "3%",
    itemGap: 30,
        itemWidth: 25,
        itemHeight: 12,
    icon: "roundRect",
    textStyle: {
        fontSize: 15,
            color: textColor,
        },
    data: ["对公开户数", "个人开户数", "对公账户净增值", "个人账户净增值"],
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
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
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
      name: "对公开户数",
      type: "bar",
      data: [11, 11, 15, 13, 12, 13, 10],
    },
    {
      name: "个人开户数",
      type: "bar",
      data: [21, -12, 12, 15, 13, 12, 20],
    },
    {
      name: "对公账户净增值",
      type: "bar",
      data: [31, -32, 32, 35, 33, 32, 30],
    },
    {
      name: "个人账户净增值",
      type: "bar",
      data: [13, -23, 23, 53, 33, 23, 3],
    },
  ],
};
