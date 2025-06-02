option = {
  backgroundColor: "#0A1432",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: "#57617B",
      },
    },
  },
  legend: {
    icon: "rect",
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 16,
    data: ["昨日总量", "今日总量"],
    right: "4%",
    textStyle: {
      fontSize: 16,
      color: "#CBE5FF",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      // boundaryGap: false, // 内容和y轴的间距
      axisLine: {
        show: false,
        lineStyle: {
          color: "#8CC2FF",
        },
      },
      axisTick: {
        show: false,
      },

      data: ["柜面", "金卡", "网银", "ATM", "手机银行"],
    },
  ],
  yAxis: {
    type: "value",
    name: "单位（%）",
    axisLine: {
      lineStyle: {
        color: "#57617B",
      },
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      lineStyle: {
        color: "#57617B",
      },
    },
  },
  series: [
    {
      type: "bar",
      name: "昨日总量",
      barWidth: 10,
      data: [10, 20, 30, 40, 50],
      itemStyle: {
        barBorderRadius: 10,
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#37FFF9", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(0, 222, 215, 0.2)", // 100% 处的颜色
            },
          ],
        },
      },
    },
    {
      type: "bar",
      name: "今日总量",
      barWidth: 15,
      data: [10, 25, 30, 55, 60],
      itemStyle: {
        barBorderRadius: 10,
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#FF5624", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(255, 86, 36, 0.2)", // 100% 处的颜色
            },
          ],
        },
      },
    },
  ],
};
