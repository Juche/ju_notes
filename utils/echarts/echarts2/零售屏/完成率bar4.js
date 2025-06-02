var showData = {
  keys: ["任务值", "实际值", "当月完成率"],
  maxVal1: "",
  maxVal2: "",
  date: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月"
  ],
  data: [
    // [1400, 2200, 1800, 1500, 800, 1600, 1000, 1900],
    // [-1200, 1200, 2200, -1600, 2000, 1300, 800, 500],
    // // [-95, 54, 177, 106, -150, 81, 80, 26]
    // [0,0,0,0,0,0,0,0]
    [350000, 350000, 350000, 350000, 350000, 350000, 350000, 350000],
    [48661, 185778, -3500132, '0', '', '', '', ''],
    [13.9, 53.08, -1000.04, 'xy', 'z', '', '', ''],
  ]
};

showData.data = showData.data.map((item) => {
    return item.map((_item) => {
        if(isNaN(Number(_item))) {
            return ''
        }
        return _item
    })
})


var textColor = "#73A1E6";
var tempArr = showData.data[0].concat(showData.data[1]);
var maxVal1 = Math.max(...tempArr);
var maxVal2 = Math.max(...showData.data[2]);

var minVal1 = Math.min(...tempArr);
var minVal2 = Math.min(...showData.data[2]);

function num2e(num) {
  var p = Math.floor(Math.log(num) / Math.LN10);
  var n = num * Math.pow(10, -p);
  return n + "e" + p;
}

function maxVal(num) {
  var valArr = num2e(num).split("e");

  switch (true) {
    case valArr[0] <= 1.2:
      valArr[0] = 1.2;
      break;
    case valArr[0] <= 2:
      valArr[0] = 2;
      break;
    case valArr[0] <= 4:
      valArr[0] = 4;
      break;
    case valArr[0] <= 8:
      valArr[0] = 8;
      break;
    case valArr[0] > 8:
      valArr[0] = 12;
      break;
  }

  var newVal = Number(valArr.join("e"));

  return newVal;
}


function minVal(num) {
    
//   if(num < 0) {
//       num = '-' + maxVal(Math.abs(num))
//   }else {
//       num = 0
//   }
num = '-' + maxVal(Math.abs(num))

  return Number(num);
}

if(minVal1 < 0 || minVal2 < 0) {
    maxVal1 =  Math.max(maxVal1, Math.abs(minVal1))
    maxVal2 =  Math.max(maxVal2, Math.abs(minVal2))
    
    maxVal2 = maxVal2 == 0 ? 40 : maxVal2
    
    
    minVal1 = minVal(maxVal1);
    minVal2 = minVal(maxVal2);
}else {
    minVal1 = 0;
    minVal2 = 0;
}

maxVal1 = maxVal(maxVal1);
maxVal2 = maxVal(maxVal2);

option = {
  //   backgroundColor: "#0B1448",

  grid: {
    top: "30",
    right: "0",
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
      name: showData.unit,
      min: minVal1,
      max: maxVal1,
      splitNumber: 4,
      position: "left",
    //   nameTextStyle: {
    //     // padding: [0, 0, 0, -50]
    //     align: 'right'
    //   },
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
    //   axisLabel: {
    //     padding: [0, 0, 0, -30],
    //     align: "left"
    //   }
    },
    {
      show: 0,
      width: 0,
      type: "value",
      name: showData.unit,
      min: minVal1,
      max: maxVal1,
      splitNumber: 4,
      position: "left",
      nameTextStyle: {
        show: 0
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
        show: 0
      }
    },
    {
      type: "value",
      name: "%",
      min: minVal2,
      max: maxVal2,
      splitNumber: 4,
      position: "right",
    //   nameTextStyle: {
    //     // padding: [0, -20, 0, 0]
    //     align: 'left'
    //   },
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
    //   axisLabel: {
    //     padding: [0, -20, 0, 0],
    //     align: "right"
    //   }
    }
  ],
  series: [
    {
      name: showData.keys[0],
      type: "bar",
      barWidth: 14,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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
      barWidth: 14,
      itemStyle: {
        normal: {
          barBorderRadius: [2, 2, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: "#FFB16A"
        }
      },
      data: showData.data[2]
    }
  ]
}
