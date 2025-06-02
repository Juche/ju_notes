option = {
  backgroundColor: "#03141c",
  // title: {
  //     // text: "84%",
  //     // subtext: '完成部门占比',
  //     x: 'center',
  //     y: 'center',
  //     textStyle: {
  //         color: "#fff",
  //         fontSize: 30,
  //         fontWeight: 'normal'
  //     },
  //     subtextStyle: {
  //         color: "rgba(255,255,255,.45)",
  //         fontSize: 14,
  //         fontWeight: 'normal'
  //     }
  // },
  // tooltip: {
  //     trigger: 'item',
  //     formatter: "{a} <br/>{b} : {c} ({d}%)"
  // },
  // legend: {
  //     x: 'center',
  //     y: 'bottom',
  //     // data: ['rose3', 'rose5', 'rose6', 'rose7', 'rose8']
  // },
  // calculable: true,
  series: [

      {
          name: '面积模式',
          type: 'pie',
          radius: [100, 130],
          center: ['50%', '50%'],
          hoverAnimation: false,
          startAngle: -60,
          data: [{
                  value: 90,
                  name: '',
                  itemStyle: {
                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                          offset: 0,
                          color: '#348fe6'
                      }, {
                          offset: 1,
                          color: '#625bef'
                      }])
                  },
                  labelLine: {
                      length: 20,
                      length2: 40,
                      lineStyle: {
                          width: 2,
                      }
                  },
                  label: {
                      color: "rgba(255,255,255,.6)",
                      fontSize: 20,
                      formatter: '上岗人员总数\n{a|8712}个',
                      rich: {
                          a: {
                              color: "#fff",
                              fontSize: 24,
                              lineHeight: 30
                          },
                      }
                  }
              },
              {
                  value: 10,
                  name: '',
                  itemStyle: {
                      color: "transparent"
                  }
              }
          ]
      },
      {
          name: '面积模式',
          type: 'pie',
          radius: [105, 125],
          center: ['50%', '50%'],
          hoverAnimation: false,
          startAngle: -60,
          data: [{
                  value: 90,
                  // name: '吴际帅\n牛亚莉',
                  itemStyle: {
                      color: "transparent"
                  }
              },
              {
                  value: 10,
                  // name: 'rose2',
                  itemStyle: {
                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                          offset: 0,
                          color: '#f6e3a1'
                      }, {
                          offset: 1,
                          color: '#ff4236'
                      }])
                  },
                  labelLine: {
                      show: false
                  },
                  // label: {
                  //     color: "rgba(255,255,255,.45)",
                  //     fontSize: 14,
                  //     // formatter: '部门总量\n{a|52}个',
                  //     rich: {
                  //         a: {
                  //             color: "#fff",
                  //             fontSize: 20,
                  //             lineHeight: 30
                  //         },
                  //     }
                  // }
              }
          ]
      }
  ]
};
