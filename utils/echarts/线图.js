/** @type {V2ViewType} */
let ctx = this;

let showData = 
{
  color: ["rgba(255,110,110,1)", "#3261FF"];
}

// {
//   color: ['rgba(254, 158, 32, 1)', 'rgba(255, 110, 110, 1)']
// }

var option = {
  title: {
    text: "贷款完成度趋势",
    padding: [20, 0, 0, 30],
    textStyle: {
      fontSize: 18,
      fontFamily: "Microsoft YaHei",
      fontWeight: "bold",
      color: "rgba(51,51,51,1)",
    },
  },
  // gap:
  // boundaryGap:[10,20,30,40],
  grid: {
    left: "3%", //图表距边框的距离
    right: "4%",
    bottom: "3%",
    top: "24%",
    containLabel: true,
  },
  // itemGap:[10,20,30,40],

  legend: {
    data: ["2020年", "2019年"],
    icon: "rect",
    right: "30",
    // text:'',
    textStyle: {
      padding: [30, 0, 30, 9],
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    axisTick: { show: false },
    axisLabel: {
      textStyle: {
        fontSize: 14,
        color: "#333333",
        padding: [12, 0, 0, 15],
        // fontFamily:Microsoft YaHei,
        fontWeight: 400,
      },
    },
    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
  },
  yAxis: {
    name: "单位 %",
    nameTextStyle: {
      fontSize: 12,
      color: "#BBBBBB",
      fontWeight: 400,
    },
    type: "value",
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      textStyle: {
        fontSize: 12,
        color: "#BBBBBB",
      },
    },
  },
  series: [
    {
      name: "2020年",
      data: [10, 22, 41, 54, 80, 90, 120],
      type: "line",
      smooth: "0.9",
      color: showData.color[0],
      areaStyle: {
        color: showData.color[0],
        opacity: "0.1",
      },
      lineStyle: {
        color: showData.color[0],
        width: 3,
      },
      markLine: {
        symbol: ["none", "none"],
        // label: {show: false},
        lineStyle: {
          type: "solid",
          color: "black",
        },
      },
    },
    {
      name: "2019年",
      data: [5, 12, 17, 34, 50, 73, 90],
      type: "line",
      smooth: "0.7",
      color: showData.color[0],
      lineStyle: {
        color: showData.color[0],
        width: 3,
      },
      areaStyle: {
        color: showData.color[0],
        opacity: "0.1",
      },
    },
  ],
};
return option;
