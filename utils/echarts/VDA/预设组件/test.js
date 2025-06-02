function aFunction(a) {
  let b = 2
  retrun; a + b
}

backgroundColor = "#000";

color = ["#FFC028", "#FF8121", "#12F3FF", "#966BFF", "#E13857"];

types = ["line", "bar", "pie"];

dataset = {
  source: [
    ["date", "09/06", "09/07", "09/08", "09/09", "09/10", "09/11"],
    ["网点平均动账业务量", 41.1, 30.4, 66, 22, 11, 53.3],
    ["ATM机具平均动账业务量", 51.1, 55.1, 11, 33, 44, 53.3],
    ["自助机具平均日业务量", 61.1, 50.4, 33, 77, 22, 45.1],
    //   [],[],[],[]
  ],
};

xAxis = [
  {
    type: "category",
    boundaryGap: false,
    axisTick: {
      show: false,
    },
    axisLabel: {
      // show: false,
      textStyle: {
        fontSize: 14,
        color: "#CCE6FF",
      },
    },
    axisLine: {
      lineStyle: {
        color: "#CCE6FF",
        width: 1,
        type: "dashed",
      },
    },
  },
];

yAxis = [
  {
    splitNumber: 4,
    // max:2000,
    // min:0,
    // show:false,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        fontSize: 14,
        color: "#CCE6FF",
      },
    },
    // name: "单位：户",
    name: "",
    nameTextStyle: {
      fontSize: 14,
      color: "#CCE6FF",
    },
    splitLine: {
      // show:false,
      lineStyle: {
        type: "dashed",
      },
    },
    type: "value",
  },
];

legend = {
  itemWidth: 15,
  itemHeight: 10,
  icon: " roundRect ",
  right: 5,
  textStyle: {
    padding: [30, 10, 30, 10],
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Microsoft YaHei",
    color: "#CCE6FF",
  },
};

tooltip = {
  trigger: "axis",
  axisPointer: {
    type: "cross",
    label: {
      backgroundColor: "#6a7985",
    },
  },
};

grid = {
  left: "10",
  right: "25",
  bottom: "20",
  containLabel: true,
};

series = [];
for (let i = 1; i < dataset.source.length; i++) {
  series.push({
    type: types[i - 1],
    seriesLayoutBy: "row",
  });
}

option = {
  backgroundColor,
  color,
  xAxis,
  yAxis,
  legend,
  tooltip,
  grid,
  dataset,
  series,
};
