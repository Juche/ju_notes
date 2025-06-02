var time = [];
var data1 = [];
var data2 = [];
var names = ['CPU', 'MEM'];
var unit = '单位 : %';
var margin = 10;
var flag = false;

for (var i = 0; i < 49; i++) {
  time.push(i + ":00");
  data1.push(Math.floor(Math.random() * 60) + 100);
  i < 44 && data2.push(Math.floor(Math.random() * 60) + 100);
}

option = {
  backgroundColor: "#0A1432",
  color: ["#89d4ff", "#f5c68c"],
  tooltip: {
    trigger: "axis",
  },
  title: {
    show: true,
    text: unit,
    textStyle: {
      color: "#cbe5ff",
      fontSize: 16,
    },
    top: -2,
    left: -5,
  },
  grid: {
    left: 0,
    right: 20,
    top: 35,
    bottom: 10,
    show: !flag,
    borderColor: "#4179a9",
    backgroundColor: "rgba(6, 70, 137, 0.2)",
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
      margin: margin,
    },
    splitLine: {
      show: !flag,
      lineStyle: {
        color: "#264a71",
        type: "dashed",
      },
    },
    splitNumber: 3,
    data: time,
  },
  yAxis: {
    type: "value",
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      show: true,
      fontSize: 16,
      color: "#cbe5ff",
      margin: margin,
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
      name: names[0],
      type: "line",
      smooth: !flag,
      symbol: "none",
      data: data1,
      connectNulls: true,
      z: 3,
    },
    {
      name: names[1],
      type: "line",
      smooth: !flag,
      symbol: "none",
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            //color: '#0192e5'
            color: "#f5c68c",
          },
          {
            offset: 1,
            //color: '#0a1431'
            color: "rgba(245,198,140,0.1)",
          },
        ]),
      },
      data: data2,
      connectNulls: true,
      z: 2,
    },
  ],
};
