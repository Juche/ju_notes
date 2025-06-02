var labelRight = {
  position: 'right'
};
var labelLeft = {
  position: 'left'
};
option = {
  title: {
      text: '交错正负轴标签',
      subtext: 'From ExcelHome',
      sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
  },
  grid: {
      top: 80,
      bottom: 30
  },
  xAxis: {
      type: 'value',
      position: 'top',
      splitLine: {
          lineStyle: {
              type: 'dashed'
          }
      }
  },
  yAxis: {
      type: 'category',
      axisLine: {show: false},
      axisLabel: {show: false},
      axisTick: {show: false},
      splitLine: {show: false},
      data: ['six', 'five', 'four', 'three', 'two', 'one']
  },
  series: [
      {
          name: '生活费',
          type: 'bar',
          stack: '总量',
          label: {
              show: true,
              formatter: '{b}'
          },
          data: [
              {value: -0.17, label: labelLeft},
              {value: 0.36, label: labelRight},
              {value: -0.09, label: labelLeft},
              {value: 0.23, label: labelRight},
              {value: -0.32, label: labelLeft},
              {value: 0.17, label: labelRight},
          ]
      }
  ]
};
