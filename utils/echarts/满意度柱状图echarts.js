/** @type {V2ViewType} */
// let ctx = this;

let rspData = [
    {
        "KPI_ID": "OM01100080",
        "KPI_NAME": "满意度分类占比",
        "KPI_VALUE": 78.76,
        "KPI_DT": "20200906"
    },
    {
        "KPI_ID": "OM01100080",
        "KPI_NAME": "满意度分类占比",
        "KPI_VALUE": 0.96,
        "KPI_DT": "20200906"
    },
    {
        "KPI_ID": "OM01100080",
        "KPI_NAME": "满意度分类占比",
        "KPI_VALUE": 0.2,
        "KPI_DT": "20200906"
    },
    {
        "KPI_ID": "OM01100080",
        "KPI_NAME": "满意度分类占比",
        "KPI_VALUE": 0.08,
        "KPI_DT": "20200906"
    },
    {
        "KPI_ID": "OM01100080",
        "KPI_NAME": "满意度分类占比",
        "KPI_VALUE": 98.45,
        "KPI_DT": "20200907"
    },
    {
        "KPI_ID": "OM01100080",
        "KPI_NAME": "满意度分类占比",
        "KPI_VALUE": 1.2,
        "KPI_DT": "20200907"
    },
    {
        "KPI_ID": "OM01100080",
        "KPI_NAME": "满意度分类占比",
        "KPI_VALUE": 0.25,
        "KPI_DT": "20200907"
    },
    {
        "KPI_ID": "OM01100080",
        "KPI_NAME": "满意度分类占比",
        "KPI_VALUE": 0.1,
        "KPI_DT": "20200907"
    }
]

let ctx = {
    showData: {
        xData: ["09/01", "09/02", "09/03", "09/04", "09/05", "09/06", "09/07", "09/08", "09/09", "09/10", "09/11", "09/12", "09/13", "09/14", "09/15", "09/16", "09/17", "09/18", "09/19", "09/20", "09/21", "09/22", "09/23", "09/24", "09/25", "09/26", "09/27", "09/28", "09/29", "09/30"],
        yData: [0.1, 0.42, 0.37, 0.5, 0.2, 0.25, 0.37, 0.42, 0.2, 0.25, 0.37, 0.5, 0.42, 0.32, 0.15, 0.27, 0.47, 0.2, 0.25, 0.37, 0.5, 0.42, 0.32, 0.15, 0.27, 0.47, 0.42, 0.32, 0.15, 0.57],
    }
};

// xdata
let xData = ctx.showData.xData;
// ydata
let yData = ctx.showData.yData;

let splitNumber = ctx.showData.splitNumber;
let danWei = ctx.showData.danWei;
// pictorialData
let pictorialData = [];
yData.map((v) => {
  pictorialData.push({ value: v, symbolPosition: "end" });
});

option = {
  backgroundColor: '#031569',
  tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
  //  legend:{
  //   data:['每日满意度'  ],
  //   icon:rect,
  //   textStyle:{

  //   }
  // },
  legend: {
    icon: "rect",
    textStyle: {
      color: "#CCE6FF",
      fontSize: 14,
    },
    right: 40,
    top: 15,
  },
  xAxis: [
    {
      type: "category",
      data: xData,
      axisTick: { alignWithLabel: true },
      // 通过这个可以设置x轴的label的转动角度
      //  rotate: 30,
      axisLabel: { textStyle: { fontSize: "90%", color: "#fff" }, show: true },
      axisLine: { show: false },
      axisTick: false,
    },
  ],
  yAxis: [
    {
      type: "value",
      // name: danWei,
      name: "近一月满意度历史",
      nameTextStyle: {
        color: "",
      },
      axisLabel: { textStyle: { fontSize: 14, color: "#CCE6FF" } },
      nameTextStyle: {
        color: "#D9F2FF",
        fontSize: 16,
        padding: [0, 0, 0, 60],
      },
      // splitNumber:3,
      // max:maxValue,
      // min:minValue,

      splitLine: { lineStyle: { color: "#2D8FFF", type: "dashed" } },

      axisLine: { show: false },
      axisTick: false,
    },
  ],
  series: [
    {
      type: "pictorialBar",
      symbol: "rect",
      symbolSize: [8, 2],
      symbolOffset: [0, -2],
      itemStyle: {
        // color: "#FFE980",
        color: "#8ecde6"
      },
      tooltip: { show: false },
      data: pictorialData,
    },
    {
      // name: "每日满意度",
      type: "bar",
      barWidth: 8,
      data: yData,
      barCategoryGap: 20,
      itemStyle: {
        // color: "#FFB433",
        color: "rgba(0, 102, 193, 0.8)"
      },
    },
  ],
};
// return option;
