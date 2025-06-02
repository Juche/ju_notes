option = {
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  grid: {
    borderColor: "#999999",
    containLabel: true
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: [820, 888, 901, 800, 1290, 1330, 1320],
      type: "line",

      itemStyle: {
        color: "rgba(19, 109, 255, 1)"
      },
      areaStyle: {
        color: "rgba(19, 109, 255, 0.15)"
      }
    },
    {
      data: [73, 902, 930, 1020, 1290, 2330, 890],
      type: "line",

      itemStyle: {
        color: "rgba(0, 199, 159, 1)"
      },
      areaStyle: {
        color: "rgba(0, 199, 159, 0.15)"
      }
    },
    {
      data: [2600, 850, 570, 2000, 1290, 740, 999],
      type: "line",

      itemStyle: {
        color: "rgba(224, 19, 255, 1)"
      },
      areaStyle: {
        color: "rgba(224, 19, 255, 0.15)"
      }
    }
  ]
};
