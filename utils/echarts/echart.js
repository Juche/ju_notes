option = {
  backgroundColor: "#fff",
  grid: {
      top: '10%',
      bottom: '10%',
      containLabel: true
  },
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
          show: false,
      },
      splitLine: {
          show: true,
          lineStyle: {
              color: '#DFE1E6',
              width: 0.5
          }
      },
      axisLine: {
          lineStyle: {
              color: '#878C99',
              width: 0.5
          }
      }
  },
  yAxis: [{
      type: 'value',
      axisTick: {
          show: false,
      },
      splitLine: {
          show: true,
          lineStyle: {
              color: '#DFE1E6',
              width: 0.5
          }
      },
      axisLine: {
          lineStyle: {
              color: '#878C99',
              width: 0.5
          }
      }
  }],
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
  }]
}


option = {
  backgroundColor: "#fff",
  color: ['#3398DB'],
  tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
  },
  grid: {
      top: '10%',
      bottom: '10%',
      containLabel: true
  },
  xAxis: [{
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
          show: false,
      },
      axisLine: {
          lineStyle: {
              color: '#878C99',
              width: 0.5
          }
      }
  }],
  yAxis: [{
      type: 'value',
      axisTick: {
          show: false,
      },
      splitLine: {
          show: true,
          lineStyle: {
              color: '#DFE1E6',
              width: 0.5
          }
      },
      axisLine: {
          lineStyle: {
              color: '#878C99',
              width: 0.5
          }
      }
  }],
  series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
  }]
}
