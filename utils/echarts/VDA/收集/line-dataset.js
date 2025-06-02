let showData = {
  // dimensions: ['product', '2015', '2016', '2017'],
  dataset: {
      source: [
          ['date', '2012', '2013', '2014', '2015'],
          ['实体网点', 41.1, 30.4, 65.1, 53.3],
          ['自助机具', 51.1, 40.4, 55.1, 53.3],
          ['手机银行', 61.1, 50.4, 45.1, 53.3],
          ['网上银行', 86.5, 92.1, 85.7, 83.1],
          ['微信银行', 24.1, 67.2, 79.5, 86.4]
      ]
  },
  color: ['#FFC028', '#FF8121', '#12F3FF', '#966BFF', '#E13857'],
}

option = {
  color: showData.color,
  dataset: showData.dataset,
  legend: {
      itemWidth: 15,
      itemHeight: 10,
      icon: ' roundRect ',
      right: 25,
      textStyle: {
          padding: [30, 10, 30, 10],
          fontSize: 14,
          fontWeight: 400,
          fontFamily: 'Microsoft YaHei',
          color: '#CCE6FF'
      }
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          label: {
              backgroundColor: '#6a7985'
          }
      }
  },
  xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisTick: {
          show: false
      },
      axisLabel: {
          // show: false,
          textStyle: {
              fontSize: 14,
              color: '#CCE6FF',
          },
      },
      axisLine: {
          lineStyle: {
              color: '#CCE6FF',
              width: 1,
              type: 'dashed'
          }
      },
  }],
  yAxis: [
      {
          splitNumber: 4,
          // max:2000,
          // min:0,
          // show:false,
          axisLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              textStyle: {
                  fontSize: 14,
                  color: '#CCE6FF'
              }
          },
          name: '单位：户',
          nameTextStyle: {
              fontSize: 14,
              color: '#CCE6FF'
          },
          splitLine: {
              // show:false,
              lineStyle: {
                  type: 'dashed'
              }
          },
          type: 'value',
      }
  ],
  grid: {
      left: '0',
      right: '20',
      bottom: '20',
      containLabel: true
  },
  series: [
      // These series are in the first grid.
      {
          type: 'line',
          seriesLayoutBy: 'row'
      },
      {
          type: 'line',
          seriesLayoutBy: 'row'
      },
      {
          type: 'line',
          seriesLayoutBy: 'row'
      },
      {
          type: 'line',
          seriesLayoutBy: 'row'
      },
      {
          type: 'line',
          seriesLayoutBy: 'row'
      },
  ]
};
