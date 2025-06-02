// var compare = [320, 320, 320, 320, 320]; //背景比对
// var title = ["个人转账", "挂失业务", "补换卡", "现金存取款", "定期业务"];
// var count = [74, 119, 163, 207, 284]; //数值
// var rate = ["9.9%", "14.7%", "23.6%", "30.1%", "35.7%"];
// var data = {
//   title: title,
//   compare: compare,
//   count: count,
//   rate: rate
// };

var optionData = {
  compare: [320, 320, 320, 320, 320],
  title: ["个人转账", "挂失业务", "补换卡", "现金存取款", "定期业务"],
  count: [74, 119, 163, 207, 284],
  rate: ["9.9%", "14.7%", "23.6%", "30.1%", "35.7%"],
}

var data = optionData;

option = {
  backgroundColor: "#ffffff",
  grid: {
    top: 0,
    left: -60,
    right: -85,
    bottom: -10,
    containLabel: true
  },
  tooltip: {
    show: false
  },
  xAxis: {
    show: false
  },
  yAxis: [
    {
      type: "category",

      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        margin: 90,
        textStyle: {
          align: "left",
          fontSize: 14,
          fontWeight: "bold",
          color: "#171B1F"
        }
      },
      data: data.title
    },
    {
      type: "category",

      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 30,
        textStyle: {
          align: "right",
          fontSize: 14,
          fontWeight: "bold",
          color: "#0F1D37"
        }
      },
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: data.count
    },
    {
      type: "category",

      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 90,
        textStyle: {
          align: "right",
          fontSize: 14,
          fontWeight: "bold",
          color: "#FF822F"
        }
      },
      splitArea: {
        show: false
      },
      splitLine: {
        show: false
      },
      data: data.rate
    }
  ],
  series: [
    {
      type: "bar",
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          show: true,
          color: "#E8EAF0",
        //   barBorderRadius: 50,
          borderWidth: 0,
          borderColor: "#333"
        }
      },
      barWidth: "14",

      data: data.compare
    },
    {
      type: "bar",

      itemStyle: {
        normal: {
          show: true,
          color: "#147FE7",
        //   barBorderRadius: 50,
          borderWidth: 0,
          borderColor: "#333"
        }
      },
      label: {
        normal: {
          show: false
        }
      },
      barWidth: "14",

      data: data.count
    }
  ]
};
