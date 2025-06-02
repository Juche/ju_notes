var showData = [
  [
    "0-3时",
    "3-6时",
    "6-9时",
    "9-12时",
    "12-15时",
    "15-18时",
    "18-21时",
    "21-24时",
  ],
  [11.5, 9.2, 13.7, 25.7, 22.1, 23, 15, 35],
];

var maxVal = 0; // 找到最大值
var indicateData; // bar 参考进度条

showData[1].forEach(function (item) {
  maxVal = item > maxVal ? item : maxVal;
});

indicateData = showData[1].map(function () {
  return maxVal;
});

// option.xAxis[0].max = maxVal;
// bar 标题
// option.yAxis[0].data = showData[0];
// bar 数据百分比
// option.yAxis[1].data = showData[1];
// bar 参考进度条
// option.series[0].data = indicateData;
// bar 数据进度条
// option.series[1].data = showData[1];
// bar 分割进度条
// option.series[2].symbolBoundingData = maxVal;
// option.series[2].data = indicateData;

option = {
  backgroundColor: "#101E44",
  grid: [
    {
      left: "10%",
      top: "10%",
      right: "10%",
      bottom: "10%",
      containLabel: true,
    },
  ],
  xAxis: [
    {
      max: maxVal,
      show: false,
    },
  ],
  yAxis: [
    {
      axisTick: "none",
      axisLine: "none",
      offset: "10",
      axisLabel: {
        textStyle: {
          color: "#accfff",
          fontSize: "16",
        },
      },
      data: showData[0],
    },
    {
      axisTick: "none",
      axisLine: "none",
      show: true,
      axisLabel: {
        textStyle: {
          color: "#fff",
          fontSize: "16",
        },
        formatter: "{value} %",
      },
      data: showData[1],
    },
  ],
  series: [
    {
      name: "背景进度条",
      type: "bar",
      barWidth: 12,
      legendHoverLink: false,
      silent: true,
      barGap: "-100%",
      itemStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "rgba(32, 114, 202, 0.5)", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(32, 114, 202, 0.5)", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
      },
      data: indicateData,
    },
    {
      name: "进度条分割",
      type: "pictorialBar",
      itemStyle: {
        color: "#101E44",
        // color: "#f00"
      },
      z: 100,
      symbolRepeat: "fixed",
      symbolMargin: "2",
      symbol: "rect",
      symbolClip: true,
      symbolSize: [2, 14],
      symbolPosition: "start",
      symbolOffset: [0, 0],
      symbolBoundingData: maxVal,
      data: indicateData,
    },
    {
      name: "前景进度条",
      type: "bar",
      barWidth: 12,
      legendHoverLink: false,
      silent: true,
      itemStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#44A0FF", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#44A0FF", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        }, //底色
      },
      data: showData[1],
    },
  ],
};
