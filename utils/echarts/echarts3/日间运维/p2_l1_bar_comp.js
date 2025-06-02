// let showData = {
//     color: "#5bb4ff",
//     time: [],
//     data: []
// }
// for (var i = 0; i < 80; i++) {
//   showData.time.push(i);
//   showData.data.push(Math.floor(Math.random() * 50) + 20);
// }

let showData = ctx.showData;

let _showData = {
    time: [],
    data: []
}

for (var i = 0; i < 80; i++) {
  _showData.time.push(i);
  _showData.data.push(Math.floor(Math.random() * 50) + 20);
}

showData.time = showData.time & showData.time.length ? showData.time : _showData.time;
showData.data = showData.data & showData.data.length ? showData.data : _showData.data;

let option = {
  color: [showData.color],
  tooltip: {
    trigger: "axis",
  },
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  xAxis: [
    {
      type: "category",
      data: showData.time,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false },
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false },
    },
  ],
  series: [
    {
      type: "bar",
      data: showData.data,
    },
  ],
};

return option;
