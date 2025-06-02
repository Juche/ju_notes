// let showData = {
//   legend: ["EME", "CPU"],
//   xAxis: [
//     "13:00",
//     "13:05",
//     "13:10",
//     "13:15",
//     "13:20",
//     "13:25",
//     "13:30",
//     "13:35",
//     "13:40",
//     "13:45",
//     "13:50",
//     "13:55",
//   ],
//   series: [
//     [220, 182, 125, 145, 122, 191, 134, 150, 120, 10, 165, 122],
//     [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 22],
//   ],
// };

let showData = ctx.showData;

const color = ["#66A6FF", "#F7C973"];

let option = {
  //   backgroundColor: "#0A1432",
  color: color,
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: "#57617B",
      },
    },
  },
  legend: {
    icon: "roundRect",
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 16,
    data: showData.legend,
    right: "20",
    textStyle: {
      fontSize: 16,
      color: "#CBE5FF",
    },
  },
  grid: {
    left: "20",
    right: "20",
    bottom: "10",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#8CC2FF",
        },
      },
      axisTick: {
        show: false,
      },

      data: showData.xAxis,
    },
  ],
  yAxis: [
    {
      type: "value",
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: showData.legend[0],
      type: "line",
      smooth: true,
      symbol: "none",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1,
        },
      },
      data: showData.series[0],
    },
    {
      name: showData.legend[1],
      type: "line",
      smooth: true,
      symbol: "none",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1,
        },
      },
      data: showData.series[1],
    },
  ],
};

return option;
