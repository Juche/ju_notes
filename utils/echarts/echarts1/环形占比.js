option = {
  backgroundColor: "#03141c",
  title: {
      text: "1000",
      subtext: '总网点数',
      x: 'center',
      y: 'center',
      textStyle: {
          color: "#fff",
          fontSize: 40,
          fontWeight: 'normal'
      },
      subtextStyle: {
          color: "rgba(255,255,255,.45)",
          fontSize: 16,
          fontWeight: 'normal'
      }
  },
  tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  // legend: {
  //     x: 'center',
  //     y: 'bottom',
  //     // data: ['rose3']
  // },
  // calculable: true,
  series: [

      {
          name: '面积模式',
          type: 'pie',
          radius: [100, 130],
          center: ['50%', '50%'],
          data: [
              {
                  value: 200,
                  name: '',
                  itemStyle: {

                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                          offset: 0,
                          color: '#f6d3a1'
                      }, {
                          offset: 1,
                          color: '#fff236'
                      }])
                  },
                  label: {
                      color: "rgba(255,255,255,.45)",
                      fontSize: 14,
                      formatter: '总网点数\n{a|34}个',
                      rich: {
                          a: {
                              color: "#fff",
                              fontSize: 20,
                              lineHeight: 30
                          },
                      }
                  }
              },
              {
                  value: 200,
                  name: 'rose2',
                  itemStyle: {
                      color: "transparent"
                  }
              }
          ]
      },
      {
          name: '面积模式',
          type: 'pie',
          radius: [100, 130],
          center: ['50%', '50%'],
          data: [{
                  value: 800,
                  name: '营业网点数量',
                  itemStyle: {
                      color: "transparent"
                  }
              },
              {
                  value: 800,
                  name: 'rose2',
                  itemStyle: {

                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                          offset: 0,
                          color: '#348fe6'
                      }, {
                          offset: 1,
                          color: '#625bef'
                      }])
                  },
                  label: {
                      color: "rgba(255,255,255,.45)",
                      fontSize: 14,
                      formatter: '营业网点数量\n{a|800}个',
                      rich: {
                          a: {
                              color: "#fff",
                              fontSize: 20,
                              lineHeight: 30
                          },
                      }
                  }
              }
          ]
      }
  ]
};
