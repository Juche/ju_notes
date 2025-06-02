var color = '#5bb4ff'
// var color = '#29dcfc'
var time = [];
var data = [];
for (var i = 0; i < 80; i++) {
  time.push(i);
  data.push( Math.floor( Math.random() * 50 ) + 20 );
}

option = {
  color: [color],
  tooltip : {
      trigger: 'axis'
  },
  grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
  },
  xAxis : [
      {
          type : 'category',
          data : time,
          axisLine: {show: false},
          axisTick: {show: false},
          axisLabel: {show: false},
          splitLine: {show: false}
      }
  ],
  yAxis : [
      {
          type : 'value',
          axisLine: {show: false},
          axisTick: {show: false},
          axisLabel: {show: false},
          splitLine: {show: false},
          //boundaryGap: ['0%', '10%'],
      }
  ],
  series : [
      {
          name: name,
          type: 'bar',
          data: data
      }
  ]
}
