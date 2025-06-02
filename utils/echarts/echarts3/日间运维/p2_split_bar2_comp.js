var showData = [11.5];

var maxVal = 100; // 找到最大值
var indicateData = [maxVal]; // bar 参考进度条

option = {
  backgroundColor: "#101E44",
  grid: [
    {
      left: "10",
      top: "10",
      right: "10",
      bottom: "10",
      //  containLabel: true,
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
      show: false,
      data: showData,
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
        color: "rgba(32, 114, 202, 0.5)",
      },
      data: indicateData,
    },
    {
      name: "进度条分割",
      type: "pictorialBar",
      itemStyle: {
        color: "#101E44",
        //  color: "#f00"
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
        color: "#44A0FF",
      },
      data: showData,
    },
  ],
};
