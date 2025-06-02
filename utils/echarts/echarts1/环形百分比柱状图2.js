option = {
  title: {
      itemGap: 20,
      left: 'center',
      top: '43%'
  },

  angleAxis: {
      max: 100,
      clockwise: true, // 逆时针
      // 隐藏刻度线
      show: false
  },
  radiusAxis: {
      type: 'category',
      show: true,
      axisLabel: {
          show: false,
      },
      axisLine: {
          show: false,

      },
      axisTick: {
          show: false
      },
  },
  polar: {
      center: ['50%', '50%'],
      radius: '100%' //图形大小
  },
  series: [{
          type: 'bar',
          data: [{
              value: 100,
              itemStyle: {
                  color: 'rgba(121, 52, 243, 0.1)',
                  shadowColor: 'rgba(0, 0, 0, 0.2)',
                  shadowBlur: 5,
                  shadowOffsetY: 2
              }
          }],
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 30,
          barGap: '-100%',
          z: 1
      },
      {
          type: 'bar',
          data: [88],
          //   showBackground: true,
          //   // backgroundColor: 'rgba(135,206,235,1)',
          //   backgroundStyle: {
          //       color: '#f00'
          //   },
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: 30,
          itemStyle: {
              normal: {
                  opacity: 1,
                  color: '#fff',
                  shadowBlur: 5,
                  shadowColor: '#fff',
              }
          },
      },

  ]
};
