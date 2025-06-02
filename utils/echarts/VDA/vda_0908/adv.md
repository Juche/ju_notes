# adv 项目

## echart 模型分析

+ 仪表盘(外边 + 刻度 + 刻度背景 + 数据仪表盘指示背景 + 数据填充背景)

+ 渐变柱状图

  + [](https://gallery.echartsjs.com/editor.html?c=x0oxzn-I3i)


<!-- linear-gradient(-90deg,rgba(255,128,91,1) 0%,rgba(255,227,122,1) 100%) -->
  ```js
  var data = [{
      name: '乐原道支行',
      value: 27
  }, {
      name: '南京湖南路支行',
      value: 34
  }, {
      name: '深圳红岭支行',
      value: 35
  }, {
      name: '成都武侯支行',
      value: 42
  }, {
      name: '深圳科技园支行',
      value: 49
  }];
  var backGroundData = [],
      nameData = [],
      valueData = [],
      maxValue = 0,
      len = data.length;
  for (var i = 0; i < len; i++) {
      if (data[i].value > maxValue) {
          maxValue = data[i].value;
      }
  }
  for (var i = 0; i < len; i++) {
      backGroundData.push(maxValue * 1.1);
      nameData.push(data[i].name);
      valueData.push(data[i].value);
  }

  var option = {
      width: '90%',
      backgroundColor: '#04113a',
      grid: {
          left: '5%',
          top: '5%',
          bottom: '1%',
      },
      tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
              type: 'shadow',
          },
          formatter: '{b}：{c}',
          textStyle: {
              fontSize: "20"
          }
      },
      xAxis: {
          type: 'value',
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          }
      },
      yAxis: {
          type: 'category',
          axisTick: {
              show: false
          },
          axisLine: {
              show: false
          },
          axisLabel: {
              show: false
          },
          data: nameData
      },
      series: [{
              barWidth: 15,
              z: 10,
              itemStyle: {
                  color: new echarts.graphic.LinearGradient(
                      0, 0, 1, 0,
                      [{
                          offset: 0,
                          color: 'rgba(255,128,91,1)'
                      }, {
                          offset: 0.7,
                          color: 'rgba(255,227,122,1)'
                      }]),
                  barBorderRadius: 15
              },
              label: {
                  show: true,
                  fontSize: 16,
                  // distance: 10,
                  position: [0, "-30px"],
                  formatter: "{b}",
                  // offset: [0, -10],
                  color: 'rgba(172,207,255,1)'
              },
              type: 'bar',
              data: valueData
          },
          {
              type: 'bar',
              barGap: '-100%',
              barWidth: 15,
              animation: false,
              z: -1,
              itemStyle: {
                  color: '#2f3b4e',
                  barBorderRadius: 15
              },
              label: {
                  show: true,
                  position: 'top',
                  fontSize: 16,
                  // lineHeight: 50,
                  // position: ["50%", "-30px"],
                  color: "rgba(239,254,255,1)",
                  formatter: function(param) {
                      for (var i = 0; i < data.length; i++) {
                          if (param.name == data[i].name) {
                              return data[i].value + " 分钟";
                          }
                      }
                  }
              },
              data: backGroundData
          }
      ]
  };
  ```

+ 柱状饼图

<!-- + -->
