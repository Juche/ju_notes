option = {
  backgroundColor: "#0A1432",
  color: ["#4877e1", "#fdd35b"],
  // title: {
  //     text: '请求数',
  //     textStyle: {
  //         fontWeight: 'normal',
  //         fontSize: 16,
  //         color: '#F1F1F3'
  //     },
  //     left: '6%'
  // },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: "#57617B",
      },
    },
  },
  legend: {
    icon: "roundRect",
    itemWidth: 14,
    itemHeight: 14,
    itemGap: 16,
    data: ["EME", "CPU"],
    right: "4%",
    textStyle: {
      fontSize: 16,
      color: "#CBE5FF",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#8CC2FF",
        },
      },
      axisTick: {
        show: false,
      },

      data: [
        "13:00",
        "13:05",
        "13:10",
        "13:15",
        "13:20",
        "13:25",
        "13:30",
        "13:35",
        "13:40",
        "13:45",
        "13:50",
        "13:55",
      ],
    },
    // {
    //     axisPointer: {
    //         show: false
    //     },
    //     axisLine: {
    //         // lineStyle: {
    //         //     color: '#57617B'
    //         // }
    //         // show: false
    //     },
    //     axisTick: {
    //         show: false
    //     },

    //     position: 'bottom',
    //     offset: 20,
    //     data: ['', '', '', '', '', '', '', '', '', '', {
    //         value: '周六',
    //         textStyle: {
    //             align: 'left'
    //         }
    //     }, '周日']
    // }
  ],
  yAxis: [
    {
      type: "value",
      // name: '单位（%）',
      axisTick: {
        show: false,
      },
      axisLine: {
        // lineStyle: {
        //     color: '#57617B'
        // }
        show: false,
      },
      axisLabel: {
        // margin: 10,
        // textStyle: {
        //     fontSize: 14
        // }
        show: false,
      },
      splitLine: {
        // lineStyle: {
        //     color: '#57617B'
        // }
        show: false,
      },
    },
  ],
  series: [
    {
      name: "EME",
      type: "line",
      smooth: true,
      symbol: "none",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1,
        },
      },
      // areaStyle: {
      //     normal: {
      //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //             offset: 0,
      //             color: 'rgba(219, 50, 51, 0.3)'
      //         }, {
      //             offset: 0.8,
      //             color: 'rgba(219, 50, 51, 0)'
      //         }], false),
      //         shadowColor: 'rgba(0, 0, 0, 0.1)',
      //         shadowBlur: 10
      //     }
      // },
      //   itemStyle: {
      //     normal: {
      //       color: "rgb(219,50,51)",
      //       borderColor: "rgba(219,50,51,0.2)",
      //       borderWidth: 12,
      //     },
      //   },
      data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122],
    },
    {
      name: "CPU",
      type: "line",
      smooth: true,
      symbol: "none",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          width: 1,
        },
      },
      // areaStyle: {
      //     normal: {
      //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //             offset: 0,
      //             color: 'rgba(137, 189, 27, 0.3)'
      //         }, {
      //             offset: 0.8,
      //             color: 'rgba(137, 189, 27, 0)'
      //         }], false),
      //         shadowColor: 'rgba(0, 0, 0, 0.1)',
      //         shadowBlur: 10
      //     }
      // },
      //   itemStyle: {
      //     normal: {
      //       color: "rgb(137,189,27)",
      //       borderColor: "rgba(137,189,2,0.27)",
      //       borderWidth: 12,
      //     },
      //   },
      data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122],
    },
  ],
};
