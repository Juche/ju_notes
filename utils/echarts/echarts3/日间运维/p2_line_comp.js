/** @type {V2ViewType} */
let ctx = this;

// let showData = ctx.showData;
let showData = {
  title: "核心实时交易量",
  subTitle: '(单位 : %)',
  legend: ['CPU', 'MEM'],
  xAxis: [],
  series: [
    [],
    []
  ],
};

// var xAxis = [];
// var series[0] = [];
// var series[1] = [];
// var legend = ['CPU', 'MEM'];
// var title = "核心实时交易量";
// var subTitle = '(单位 : %)';

var flag = false;

for (var i = 0; i < 49; i++) {
  xAxis.push(i + ":00");
  series[0].push(Math.floor(Math.random() * 60) + 100);
  i < 44 && series[1].push(Math.floor(Math.random() * 60) + 100);
}

let option = {
//   backgroundColor: "#0A1432",
  color: ["#f5c68c", "#89d4ff"],
  tooltip: {
    trigger: "axis",
  },
  title: {
    show: true,
    // text: unit,
    // // subtext: '123',
    // textStyle: {
    //   color: "#cbe5ff",
    //   fontSize: 16,
    // },
    text: "{tit|" + showData.title + "}" + "{subTit|" + showData.subTitle + "}",
    textStyle: {
      fontSize: 20,
      fontFamily: "Microsoft Yahei",
      fontWeight: "normal",
      color: "#CBE5FF",
      rich: {
        subTit: {
          fontSize: 16,
        },
      },
    },
    top: -2,
    left: -5,
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
    left: 0,
    right: 20,
    top: 35,
    bottom: 10,
    show: !flag,
    borderColor: "#4179a9",
    // backgroundColor: "rgba(6, 70, 137, 0.1)",
    backgroundColor: "transparent",
    borderWidth: 2,
    z: 100,
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    axisLine: {
      show: flag,
      lineStyle: {
        color: "#2a7bad",
        width: 2,
      },
    },
    z: flag ? 10 : 1,
    axisTick: { show: false },
    axisLabel: {
      show: true,
      fontSize: 16,
      color: "#cbe5ff",
      margin: 10,
    },
    splitLine: {
      show: !flag,
      lineStyle: {
        color: "#264a71",
        type: "dashed",
      },
    },
    splitNumber: 3,
    data: showData.xAxis,
  },
  yAxis: {
    type: "value",
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      show: true,
      fontSize: 16,
      color: "#cbe5ff",
      margin: 10,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "#264a71",
        type: !flag ? "dashed" : "solid",
      },
    },
    splitNumber: 3,
    //boundaryGap: ['0%', '50%']
  },
  series: [
    {
      name: showData.legend[0],
      type: "line",
      smooth: !flag,
      symbol: "none",
      data: showData.series[0],
      connectNulls: true,
      z: 3,
    },
    {
      name: showData.legend[1],
      type: "line",
      smooth: !flag,
      symbol: "none",
      areaStyle: {
        color: new ctx.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            //color: '#0192e5'
            // color: "#f5c68c",
            color: 'rgba(1,146,229,1)'
          },
          {
            offset: 1,
            // color: '#0a1431'
            // color: "rgba(245,198,140,0.1)",
            color: 'rgba(10,20,49,1)'
          },
        ]),
      },
      data: showData.series[1],
      connectNulls: true,
      z: 2,
    },
  ],
};

return option;
