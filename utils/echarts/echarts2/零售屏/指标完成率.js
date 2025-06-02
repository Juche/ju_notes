let fillBg = {
  blue: ['rgba(96,187,255,1)', 'rgba(28,126,255,1)'],
  orange: ['rgba(255,205,133,1)', 'rgba(255,149,79,1)'],
  red: ['rgba(255,100,100,1)', 'rgba(255,50,50,1)'],
  green: ['rgba(50,255,50,1)', 'rgba(100,255,100,1)'],
  blue2: ['#0C1B5D', '#0C1B5D'],
}

let rate = -90;

let curFill, curFill2;

if (rate < 0) {
  curFill = fillBg.blue2
  curFill2 = fillBg.green
  rate = Math.abs(rate)
  
  rate = rate < 100 ? 100 - rate : 0

}else {
  curFill2 = fillBg.blue2
  
  if (rate <= 50) {
      curFill = fillBg.blue
  } else if (rate <= 75) {
      curFill = fillBg.orange
  } else {
      curFill = fillBg.red
  }

  rate = rate > 100 ? 100 : rate
}

option = {
  backgroundColor:'#0D1038',
  grid: {
      left: '10',
      top: '0',
      right: '10',
      bottom: '0',
      containLabel: true
  },
  xAxis: {
      type: 'value',
      splitLine: {
          show: false
      },
      axisLabel: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLine: {
          show: false
      },
  },
  yAxis: {
      type: 'category',
      splitLine: {
          show: false
      },
      axisLabel: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLine: {
          show: false
      },
      data: ['']
  },
  series: [
      {
          name: '进度条背景',
          type: 'bar',
          barWidth: 12,
          data: [100],
          itemStyle: {
              normal: {
                  // color: '#0C1B5D',
                  color: new(this.$echarts || echarts).graphic.LinearGradient(
                      0, 0, 1, 0,
                      [{
                              offset: 0,
                              color: curFill2[1]
                          },
                          {
                              offset: 1,
                              color: curFill2[0]
                          }
                      ]
                  ),
                  barBorderWidth: 0
              }
          }
      },
      {
          name: '%',
          type: 'bar',
          barWidth: 12,
          data: [rate],
          itemStyle: {
              normal: {
                  color: new(this.$echarts || echarts).graphic.LinearGradient(
                      0, 0, 1, 0,
                      [{
                              offset: 0,
                              color: curFill[1]
                          },
                          {
                              offset: 1,
                              color: curFill[0]
                          }
                      ]
                  )
              }
          }
      },
      {
          name: '进度条边框1',
          type: 'bar',
          barWidth: 14,
          // barGap: "-120%",
          data: [100],
          color: '#151B87',
          itemStyle: {
              normal: {
                  color: 'transparent',
                  barBorderColor: "#022B75",
                  barBorderWidth: 1.5
              }
          },
          zlevel: 1
      },
      {
          name: '进度条边框2',
          type: 'bar',
          barWidth: 15,
          barGap: "-105%",
          data: [100],
          color: '#151B87',
          itemStyle: {
              normal: {
                  // color: "#022B75",
                  color: 'transparent',
                  barBorderColor: "#1751AD",
                  barBorderWidth: 1
              }
          },
          zlevel: 2
      }
  ]
}
