var config = {
  color: ["#b1f1f3", "#ffcd86"],
  subtext: "单位：万笔/分钟",
  unit: "万笔/分钟",
  legendLabel: "实际值",
  legendPadding: [0, 70, 0, 2],
};

// var config = {
//   color: ["#b1f1f3", "#4877e1"],
//   subtext: "单位：ms",
//   unit: "ms",
//   legendLabel: "实际值",
//   legendPadding: [0, 50, 0, 2],
//   flag: true,
// };

option = {
  backgroundColor: "#0A1432",
  color: config.color,
  title: {
    top: "-10px",
    left: "-2px",
    subtext: config.subtext,
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
        config.unit +
        "<br>" +
        data[1].seriesName +
        " : " +
        (data[1].data || "-") +
        config.unit
      );
    },
  },
  legend: {
    icon: "roundRect",
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 16,
    data: ["预测值", "实时交易量"],
    right: "4%",
    textStyle: {
      fontSize: 16,
      color: "#CBE5FF",
    },
  },
  grid: {
    left: "0px",
    right: "30px",
    bottom: "10px",
    top: "35px",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: [
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
      axisLine: {
        lineStyle: {
          color: "#b3d4ff",
        },
      },
      axisLabel: {
        fontSize: 20,
      },
      axisTick: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: !config.flag ? "value" : "log",
      splitLine: {
        lineStyle: {
          color: "#384d6c",
          width: 1,
        },
      },
      axisLabel: {
        color: "#8cc2ff",
        textAlign: "left",
        fontSize: 18,
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
      name: "预测值",
      smooth: true,
      showSymbol: false,
      connectNulls: true,
      lineStyle: {
        color: config.color[0],
        type: "dotted",
        width: 3,
      },
      data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
    },
    {
      // name: config.legendLabel,
      name: "实时交易量",
      type: "line",
      smooth: true,
      showSymbol: false,
      connectNulls: true,
      lineStyle: {
        color: config.color[1],
      },
      areaStyle: {
        color: config.color[1],
        opacity: 0.4,
      },
      data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
    },
  ],
};
