let ctx = this;

// let showData = ctx.showData;

let showData = {
  index: 1,
  name: "吉安",
  value: 537305,
  max: 600000,
  unit: "万"
};

let rate = showData.value / showData.max;

let option = {
  // width: "90%",
  // backgroundColor: "#04113a",
  grid: {
    left: "3px",
    top: "5px",
    bottom: "0"
  },
  xAxis: {
    show: false,
    type: "value",
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    }
  },
  yAxis: {
    type: "category",
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    },
    // data: ["景德镇"]
    data: [showData.name]
  },
  series: [
    {
      barWidth: 5,
      z: 10,
      itemStyle: {
        color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
          {
            offset: 0,
            color: "rgba(28,126,255,1)" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(92,185,255,1)" // 100% 处的颜色
          }
        ]),
        barBorderRadius: 15
      },
      label: {
        show: true,
        fontSize: 14,
        // distance: 10,
        // position: [0, "-30px"],
        // position: "top",
        // formatter: "{b}",
        position: ["75", "-20px"],
        // formatter: "{c}" + " 万",
        formatter: showData.value + " " + showData.unit,
        // offset: [0, -10],
        color: "#CCE0FF"
      },
      type: "bar",
      data: [27]
    },
    {
      type: "bar",
      barGap: "-100%",
      barWidth: 5,
      animation: false,
      z: -1,
      itemStyle: {
        color: "#4C68B3",
        barBorderRadius: 15
      },
      label: {
        show: true,
        // position: "top",
        fontSize: 14,
        // lineHeight: 50,
        // position: ["50%", "-30px"],
        position: [0, "-20px"],
        color: "#CCE0FF",
        // formatter: "1 " + "{b}"
        formatter: showData.index + " " + showData.name
        // formatter: function(param) {
        //   for (var i = 0; i < data.length; i++) {
        //     if (param.name == data[i].name) {
        //       return data[i].value + " 分钟";
        //     }
        //   }
        // }
      },
      // data: [55]
      data: [showData.max]
    }
  ]
};

return option;
