# 中信 echarts

- 图表 1

```js
var showData = {
  kpi: ["基金", "类别", "基准"],
  xAxis: ["03/19", "09/19", "03/20"],
  data: [
    [100, 105, 110],
    [10, 55, 120],
    [20, 45, 90],
  ],
};

option = {
  legend: {
    data: showData.kpi,
    left: "center",
    bottom: 0,
    itemGap: 30,
    itemWidth: 50,
    itemHeight: 13,
    icon: "rect",
    align: "auto",
  },
  xAxis: {
    type: "category",
    axisTick: {
      show: 0,
    },
    data: showData.xAxis,
  },
  yAxis: [
    {
      type: "value",
      splitNumber: 4,
      axisLine: {
        show: 0,
        lineStyle: {
          color: "#555",
        },
      },
      axisTick: {
        show: 0,
      },
      splitLine: {
        lineStyle: {
          color: "#555",
        },
      },
    },
  ],
  series: [
    {
      type: "line",
      name: "基金",
      symbol: "none",
      smooth: true,
      itemStyle: {
        normal: {
          color: "#e33925",
        },
      },
      data: showData.data[0],
    },
    {
      type: "line",
      name: "类别",
      symbol: "none",
      smooth: true,
      itemStyle: {
        normal: {
          color: "#e3a426",
        },
      },
      data: showData.data[1],
    },
    {
      type: "line",
      name: "基准",
      symbol: "none",
      smooth: true,
      itemStyle: {
        normal: {
          color: "#581760",
        },
      },
      data: showData.data[2],
    },
  ],
};
```

- 图表 2

```js
var showData = {
  kpi: ["基金", "类别", "基准"],
  xAxis: ["三个月"],
  data: [
    [0.9],
    [0.8],
    [0.7],
  ],
};

option = {
  tooltip: {
    formatter: "{b}<br>{a}：{c}",
  },
  legend: {
    data: showData.kpi,
    left: "center",
    bottom: 0,
    itemGap: 30,
    itemWidth: 50,
    itemHeight: 13,
    icon: "rect",
    align: "auto",
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        show: 0,
      },
      data: showData.xAxis,
    },
  ],
  yAxis: [
    {
      type: "value",
      splitNumber: 4,
      axisLine: {
        show: 0,
        lineStyle: {
          color: "#555",
        },
      },
      axisTick: {
        show: 0,
      },
      splitLine: {
        lineStyle: {
          color: "#555",
        },
      },
    },
  ],
  series: [
    {
      name: "基金",
      type: "bar",
      itemStyle: {
        normal: {
          color: "#e33925",
        },
      },
      barWidth: 40,
      barGap: 3,
      data: showData.data[0],
    },
    {
      name: "类别",
      type: "bar",
      itemStyle: {
        normal: {
          color: "#e3a426",
        },
      },
      barWidth: 40,
      barGap: 3,
      data: showData.data[1],
    },
    {
      name: "基准",
      type: "bar",
      itemStyle: {
        normal: {
          color: "#581760",
        },
      },
      barWidth: 40,
      barGap: 3,
      data: showData.data[2],
    },
  ],
};
```

- 图表 3

```js
var showData = {
  kpi: ["基金", "类别", "基准"],
  xAxis: ["今年以来", "2019", "2018", "2017", "2016"],
  data: [
    [0, 37, -19, 35, 4],
    [-11, 18, -15, 33, 5],
    [-10, 19, -13, 34, 7],
  ],
};

option = {
  tooltip: {
    formatter: "{b}<br>{a}：{c}",
  },
  legend: {
    left: 50,
    bottom: 0,
    itemGap: 50,
    itemWidth: 15,
    itemHeight: 13,
    data: showData.kpi,
  },
  xAxis: [
    {
      type: "category",
      axisTick: {
        show: 0,
      },
      data: showData.xAxis,
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "年计回报率% (美元)",
      // max: 40,
      splitNumber: 2,
      axisLine: {
        show: 0,
        lineStyle: {
          color: "#555",
        },
      },
      axisTick: {
        show: 0,
      },
      splitLine: {
        lineStyle: {
          color: "#555",
        },
      },
    },
  ],
  series: [
    {
      name: "基金",
      type: "bar",
      itemStyle: {
        normal: {
          color: "#e33925",
        },
      },
      barWidth: 15,
      barGap: 0,
      data: showData.data[0],
    },
    {
      name: "类别",
      type: "bar",
      itemStyle: {
        normal: {
          color: "#e3a426",
        },
      },
      barWidth: 15,
      barGap: 0,
      data: showData.data[1],
    },
    {
      name: "基准",
      type: "bar",
      itemStyle: {
        normal: {
          color: "#581760",
        },
      },
      barWidth: 15,
      barGap: 0,
      data: showData.data[2],
    },
  ],
};
```
