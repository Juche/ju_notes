// var showData = {
//   keys: ["个人", "信用卡", "新三农"],
//   maxVal: 2000,
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
//     [1100, 1200, 1500, 1000, 800, 1600, 1000, 900],
//     [1200, 1200, 1600, 1600, 400, 1300, 800, 800],
//     [580, 1100, 1800, 1110, 1350, 1900, 880, 530]
//   ]
// };

/** @type {V2ViewType} */
let ctx = this;

var showData = this.showData;

var textColor = "#73A1E6";

var option = {
//   backgroundColor: "#0B1448",

  grid: {
    top: "30px",
    right: "20px",
    bottom: "0",
    left: "-40",
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
    itemWidth: 20,
    itemHeight: 13,
    left:"right",
    padding: [5,20,0,0],
    textStyle: {
      color: textColor
    },
    data: showData.keys
  },
  xAxis: [
    {
      type: "category",
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
      max: showData.maxVal,
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
          type: "dashed",
          width: 0.5
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
      max: showData.maxVal,
      splitNumber: 4,
      position: "left",
      show: 0,
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
        show: 0,
        lineStyle: {
          color: "#73A1E6",
          type: "dashed",
          width: 0.5
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
      max: showData.maxVal,
      splitNumber: 4,
      position: "left",
      show: 0,
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
        show: 0,
        lineStyle: {
          color: "#73A1E6",
          type: "dashed",
          width: 0.5
        }
      },
      axisLabel: {
        padding: [0, 0, 0, -30],
        align: "left"
      }
    }
  ],
  series: [
    {
      name: showData.keys[0],
      type: "line",
      yAxisIndex: 2,
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: "#47B7FF"
        }
      },
      data: showData.data[0]
    },
    {
      name: showData.keys[1],
      type: "line",
      yAxisIndex: 2,
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: "#FFB16A"
        }
      },
      data: showData.data[1]
    },
    {
      name: showData.keys[2],
      type: "line",
      yAxisIndex: 2,
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: "#FF00FF"
        }
      },
      data: showData.data[2]
    }
  ]
};

return option;

