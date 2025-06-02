var time = [];
var data1 = [];
var data2 = [];
var names = ["CPU"];
var unit = "单位 : %";
var margin = 10;
var flag = true;
var color = ["#89d4ff"];
// ['交易成功率'], '单位 : %', 10, false,

for (var i = 0; i < 49; i++) {
  time.push(i + ":00");
  data1.push(Math.floor(Math.random() * 100));
  data2.push(Math.floor(Math.random() * 100));
}

option = {
  backgroundColor: "#0A1432",
  color: color,
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
    show: false,
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
      show: true,
      lineStyle: {
        color: "#2a7bad",
        width: 2,
      },
    },
    z: 10,
    axisTick: { show: false },
    axisLabel: {
      show: true,
      fontSize: 16,
      color: "#cbe5ff",
      margin: margin,
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: "#264a71",
        type: "dashed",
      },
    },
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
        type: "solid",
      },
    },
    max: "单位 : %" == unit ? "100" : null,
    //boundaryGap: ['0%', '50%']
  },
  series: !flag
    ? [
        {
          name: names[0],
          type: "line",
          smooth: false,
          symbol: "none",
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#0192e5",
              },
              {
                offset: 1,
                color: "#0a1431",
              },
            ]),
          },
          data: data1,
          connectNulls: true,
          z: 2,
        },
      ]
    : [
        {
          name: names[0],
          type: "line",
          smooth: false,
          symbol: "none",
          data: data1,
          connectNulls: true,
          z: 3,
        },
        {
          name: names[1],
          type: "line",
          smooth: false,
          symbol: "none",
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#0192e5",
              },
              {
                offset: 1,
                color: "#0a1431",
              },
            ]),
          },
          data: data2,
          connectNulls: true,
          z: 2,
        },
      ],
};
