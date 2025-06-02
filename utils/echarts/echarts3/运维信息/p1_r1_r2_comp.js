// var showData = {
//   color: ["#9AFFF4", "#ffcd86"],
//   subtext: "单位：万笔/分钟",
//   unit: "万笔/分钟",
//   legend: ["预测值", "实时交易量"],
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
//     [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
//     [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
//   ],
// };

var showData = {
  color: ["#9AFFF4", "#4C9FFF"],
  subtext: "单位：ms",
  unit: "ms",
  legend: ["预测值", "实时交易量"],
  xAxis: [
    "13:00",
    "13:05",
    "13:10",
    "13:15",
    "13:20",
    "13:25",
    "13:30",
    "13:35",
    "13:40",
    "13:45",
    "13:50",
    "13:55",
  ],
  series: [
    [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
    [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
  ],
};

let showData = ctx.showData;

let option = {
  // backgroundColor: "#0A1432",
  color: showData.color,
  title: {
    top: "-10px",
    left: "-2px",
    subtext: showData.subtext,
    subtextStyle: {
      color: "#8cc2ff",
      fontSize: 18,
    },
  },
  tooltip: {
    trigger: "axis",
    formatter: function (data) {
      return (
        data[0].name +
        "<br>" +
        data[0].seriesName +
        " : " +
        (data[0].data || "-") +
        showData.unit +
        "<br>" +
        data[1].seriesName +
        " : " +
        (data[1].data || "-") +
        showData.unit
      );
    },
  },
  legend: {
    icon: "roundRect",
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 16,
    data: showData.legend,
    right: "4%",
    textStyle: {
      fontSize: 16,
      color: "#CBE5FF",
    },
  },
  grid: {
    left: "0",
    right: "20",
    bottom: "10",
    top: "35px",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: showData.xAxis,
      axisLine: {
        lineStyle: {
          color: "#8CC2FF",
        },
      },
      axisLabel: {
        fontSize: 16,
      },
      axisTick: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: !showData.flag ? "value" : "log",
      splitLine: {
        lineStyle: {
          color: "rgba(168, 217, 255, 0.3)",
          width: 1,
        },
      },
      axisLabel: {
        color: "#8cc2ff",
        textAlign: "left",
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
      type: "line",
      name: showData.legend[0],
      smooth: true,
      showSymbol: false,
      connectNulls: true,
      lineStyle: {
        color: showData.color[0],
        type: "dotted",
        width: 2,
      },
      data: showData.series[0],
    },
    {
      type: "line",
      name: showData.legend[1],
      smooth: true,
      showSymbol: false,
      connectNulls: true,
      lineStyle: {
        color: showData.color[1],
        width: 1,
      },
      areaStyle: {
        color: showData.color[1],
        opacity: 0.4,
      },
      data: showData.series[1],
    },
  ],
};

return option;
