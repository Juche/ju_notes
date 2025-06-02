// var showData = {
//   keys: ["任务值", "实际值", "平均值"],
//   maxVal1: 2000,
//   maxVal2: 120,
//   date: [
//     "19年1月",
//     "19年2月",
//     "19年3月",
//     "19年4月",
//     "19年5月",
//     "19年6月",
//     "19年7月",
//     "19年8月"
//   ],
//   data: [
//     [1400, 1200, 1800, 1500, 800, 1600, 1000, 1900],
//     [1200, 1200, 1600, 1600, 400, 1300, 800, 500],
//     [80, 100, 80, 110, 50, 90, 80, 30]
//   ]
// };

var showData = this.showData;

var textColor = "#73A1E6";

var option = {
//   backgroundColor: "#0B1448",

  grid: {
    top: "30px",
    right: "30px",
    bottom: "0",
    left: "0",
    containLabel: true
  },

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross"
    }
  },
  legend: {
    // top:'0px',
    itemGap: 30,
    itemWidth: 15,
    itemHeight: 13,
    textStyle: {
      color: textColor
    },
    data: showData.keys
  },
  xAxis: [
    {
      type: "category",
      // axisTick: {
      //     alignWithLabel: true
      // },
      axisLine: {
        lineStyle: {
          color: textColor
        }
      },
      axisTick: {
        show: 0
      },
      data: showData.date
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "万元",
      min: 0,
      max: showData.maxVal1,
      splitNumber: 4,
      position: "left",
      nameTextStyle: {
        padding: [0, 0, 0, -50]
      },
      axisLine: {
        show: 0,
        lineStyle: {
          color: textColor
        }
      },
      axisTick: {
        show: 0
      },
      splitLine: {
        lineStyle: {
          color: "#73A1E6",
          type: "dashed"
        }
      },
      axisLabel: {
        padding: [0, 0, 0, -30],
        align: "left"
      }
    },
    {
      type: "value",
      name: "万元",
      min: 0,
      max: showData.maxVal1,
      splitNumber: 4,
      position: "left",
      nameTextStyle: {
        padding: [0, 0, 0, -50]
      },
      axisLine: {
        show: 0,
        lineStyle: {
          color: textColor
        }
      },
      axisTick: {
        show: 0
      },
      splitLine: {
        lineStyle: {
          color: "#73A1E6",
          type: "dashed"
        }
      },
      axisLabel: {
        padding: [0, 0, 0, -30],
        align: "left"
      }
    },
    {
      type: "value",
      name: "%",
      min: 0,
      max: showData.maxVal2,
      splitNumber: 4,
      position: "right",
      nameTextStyle: {
        padding: [0, -20, 0, 0]
      },
      axisLine: {
        show: 0,
        lineStyle: {
          color: textColor
        }
      },
      axisTick: {
        show: 0
      },
      splitLine: {
        show: 0,
        interval: 30
      },
      axisLabel: {
        padding: [0, -20, 0, 0],
        align: "right"
      }
    }
  ],
  series: [
    {
      name: showData.keys[0],
      type: "bar",
      barWidth: 20,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new (this.$echarts).graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(79,196,255,1)"
            },
            {
              offset: 1,
              color: "rgba(55,154,253,1)"
            }
          ])
        }
      },
      data: showData.data[0]
    },
    {
      name: showData.keys[1],
      type: "bar",
      yAxisIndex: 1,
      barWidth: 20,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new (this.$echarts).graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(255,205,133,1)"
            },
            {
              offset: 1,
              color: "rgba(255,149,79,1)"
            }
          ])
        }
      },
      data: showData.data[1]
    },
    {
      name: showData.keys[2],
      type: "line",
      yAxisIndex: 2,
      // symbol: 'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7',
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: "#FFB16A"
        }
      },
      data: showData.data[2]
    }
  ]
};

return option;
