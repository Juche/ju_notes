let colorSet = [
  "#FFC028",
  "#FF8121",
  "#12F3FF",
  "#966BFF",
  "#E13857",
  "#33fc74",
];
let textColor = "#fff";
option = {
  backgroundColor: "#0e3573",
  color: colorSet,
  title: {
      subtext: "单位: 万户",
      padding: [15, 0, 0, 30],
      subtextStyle: {
          color: "#fff",
          fontSize: 16,
          align: "right",
      },
  },
  legend: {
      top: 20,
      // lft: "30",
      right: "30",
      itemGap: 20,
      itemWidth: 16,
      itemHeight: 16,
      icon: "rect",
      textStyle: {
          fontSize: 16,
          color: textColor,
      },
      data: ["数据1", "数据2", "数据3", "数据4", "数据5", "数据6"],
  },
  grid: {
      top: "50",
      right: "30",
      bottom: "10",
      left: "30",
      containLabel: true,
  },
  xAxis: [{
      type: "value",
      position: "top",
      axisPointer: {
          show: false,
      },
      axisTick: {
          show: 0,
      },
      axisLine: {
          lineStyle: {
              color: textColor,
              width: 2,
          },
      },
      // 不显示x轴文本
      axisLabel: {
          show: false,
      },
      splitLine: {
          lineStyle: {
              color: textColor,
              opacity: 0.5,
              type: "solid",
              width: 0.5,
          },
      },
  }, ],
  yAxis: [{
      type: "category",
      axisLine: {
          lineStyle: {
              color: textColor,
              width: 2,
          },
      },
      axisLabel: {
          show: false,
      },
      axisTick: {
          show: false,
      },
      splitLine: {
          show: false,
      },
      // data: ["资金清算"],
  }, ],
  series: [{
          name: "数据1",
          type: "bar",
          barWidth: 24,
          barGap: 0.5,
          itemStyle: {
              normal: {
                  barBorderRadius: [2, 2, 0, 0],
                  color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                          offset: 0,
                          color: "#ff6678",
                      },
                      {
                          offset: 1,
                          color: "#f73b15",
                      },
                  ]),
              },
          },
          label: {
              show: true,
              position: "inside",
              color: '#fff',
              fontSize: 20,
          },
          data: [500],
      },
      {
          name: "数据2",
          type: "bar",
          barWidth: 24,
          barGap: 0.5,
          itemStyle: {
              normal: {
                  barBorderRadius: [2, 2, 0, 0],
                  color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                          offset: 0,
                          color: "#41d9fe",
                      },
                      {
                          offset: 1,
                          color: "#2276e8",
                      },
                  ]),
              },
          },
          label: {
              show: true,
              position: "inside",
              color: '#fff',
              fontSize: 20,
          },
          data: [-1900],
      },
      {
          name: "数据3",
          type: "bar",
          barWidth: 24,
          barGap: 0.5,
          itemStyle: {
              normal: {
                  barBorderRadius: [2, 2, 0, 0],
                  color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                          offset: 0,
                          color: "#fae572",
                      },
                      {
                          offset: 1,
                          color: "#dfaa1e",
                      },
                  ]),
              },
          },
          label: {
              show: true,
              position: "inside",
              color: '#fff',
              fontSize: 20,
          },
          data: [-600],
      },
      {
          name: "数据4",
          type: "bar",
          barWidth: 24,
          barGap: 0.5,
          itemStyle: {
              normal: {
                  barBorderRadius: [2, 2, 0, 0],
                  color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                          offset: 0,
                          color: "#fec073",
                      },
                      {
                          offset: 1,
                          color: "#e26812",
                      },
                  ]),
              },
          },
          label: {
              show: true,
              position: "inside",
              color: '#fff',
              fontSize: 20,
          },
          data: [3400],
      },
      {
          name: "数据5",
          type: "bar",
          barWidth: 24,
          barGap: 0.5,
          itemStyle: {
              normal: {
                  barBorderRadius: [2, 2, 0, 0],
                  color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                          offset: 0,
                          color: "#41fe42",
                      },
                      {
                          offset: 1,
                          color: "#35b548",
                      },
                  ]),
              },
          },
          label: {
              show: true,
              position: "inside",
              color: '#fff',
              fontSize: 20,
          },
          data: [2200],
      },
      {
          name: "数据6",
          type: "bar",
          barWidth: 24,
          barGap: 0.5,
          itemStyle: {
              normal: {
                  barBorderRadius: [2, 2, 0, 0],
                  color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
                          offset: 0,
                          color: "#64e5e0",
                      },
                      {
                          offset: 1,
                          color: "#0caf82",
                      },
                  ]),
              },
          },
          label: {
              show: true,
              position: "inside",
              color: '#fff',
              fontSize: 20,
          },
          data: [1700],
      },
  ],
};
