var data = [
  [
    "0-3时",
    "3-6时",
    "6-9时",
    "9-12时",
    "12-15时",
    "15-18时",
    "18-21时",
    "21-24时"
  ],
  [11.5, 9.2, 13.7, 25.7, 22.1, 23, 15, 15]
];

var maxVal = 0; // 找到最大值
// var dataRate = []; // 格式化为百分比数据
var dataIndicate; // 数据指示

var positionLeft = 0;

data[1].forEach(function(item) {
  maxVal = item > maxVal ? item : maxVal;
  // dataRate.push(item + "%");
});

dataIndicate = data[1].map(function() {
  return maxVal;
});

var option = {
  backgroundColor: "#101E44",
  grid: [
    {
      left: "10%",
      top: "10%",
      right: "10%",
      bottom: "10%",
      containLabel: true
    }
  ],
  xAxis: [
    {
      max: maxVal,
      show: false
    }
  ],
  yAxis: [
    {
      axisTick: "none",
      axisLine: "none",
      offset: "10",
      axisLabel: {
        textStyle: {
          color: "#accfff",
          fontSize: "16"
        }
      },
      data: data[0]
    },
    {
      axisTick: "none",
      axisLine: "none",
      show: true,
      axisLabel: {
        textStyle: {
          color: "#fff",
          fontSize: "16"
        },
        formatter: "{value} %"
      },
      data: data[1]
    }
  ],
  series: [
    {
      //间距
      type: "bar",
      barWidth: 15,
      stack: "b",
      legendHoverLink: false,
      itemStyle: {
        normal: {
          color: "rgba(0,0,0,0)"
        }
      },

      data: [positionLeft, positionLeft, positionLeft, positionLeft]
    },
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
              color: "rgba(32, 114, 202, 0.5)" // 0% 处的颜色
            },
            {
              offset: 1,
              color: "rgba(32, 114, 202, 0.5)" // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        }
      },
      data: dataIndicate
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
              color: "#44A0FF" // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#44A0FF" // 100% 处的颜色
            }
          ],
          globalCoord: false // 缺省为 false
        } //底色
      },
      data: data[1]
    },
    {
      name: "进度条分割",
      type: "pictorialBar",
      itemStyle: {
        color: "#101E44"
      },
      symbolRepeat: "fixed",
      symbolMargin: "2",
      symbol: "rect",
      symbolClip: true,
      symbolSize: [2, 14],
      symbolPosition: "start",
      symbolOffset: [0, 0],
      symbolBoundingData: maxVal,
      data: dataIndicate
    }
  ]
};
