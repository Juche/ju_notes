option = {
  // tooltip: {
  //     trigger: 'axis',
  //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
  //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
  //     }
  // },
  legend: {
    data: ["数据1", "数据2", "数据3", "数据4", "数据5", "数据6"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    // containLabel: true
  },
  xAxis: [
    {
      type: "value",
      position: "top",
    },
  ],
  yAxis: [
    {
      type: "category",
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: ["资金清算"],
    },
  ],
  series: [
    {
      name: "数据1",
      type: "bar",
      label: {
        show: true,
        position: "inside",
      },
      data: [500],
    },
    {
      name: "数据2",
      type: "bar",
      label: {
        show: true,
        position: "inside",
      },
      data: [-1700],
    },
    {
      name: "数据3",
      type: "bar",
      label: {
        show: true,
        position: "inside",
      },
      data: [-600],
    },
    {
      name: "数据4",
      type: "bar",
      label: {
        show: true,
        position: "inside",
      },
      data: [3400],
    },
    {
      name: "数据5",
      type: "bar",
      label: {
        show: true,
        position: "inside",
      },
      data: [2200],
    },
    {
      name: "数据6",
      type: "bar",
      label: {
        show: true,
        position: "inside",
      },
      data: [1700],
    },
  ],
};
