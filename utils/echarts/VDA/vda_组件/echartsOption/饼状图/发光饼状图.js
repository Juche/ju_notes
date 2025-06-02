/**
 * ## 自定义组件 ##
 * name: ringPieShine
 * desc: 发光环形饼图
 */

// ========================================
// 实例 => created => 模拟动态数据

// 展示数据更新
// showDataUpdate

var timer = setInterval(() => {

  ctx.showData.pop()

  console.log('ctx.showData.length: ', ctx.showData.length)

  if(ctx.showData.length == 1) {
      clearInterval(timer)
  }

}, 2000)


// ========================================
// 数据篮子 && 实例 => 数据篮子数据

// 展示数据
// showData
[
  {
      'name': '工程建设',
      'value': 10
  },
  {
      'name': '产权交易',
      'value': 20
  },
  {
      'name': '土地交易',
      'value': 30
  },
  {
      'name': '其他交易',
      'value': 40
  },
  {
      'name': '土地交易',
      'value': 100
  },
  {
      'name': '其他交易',
      'value': 10
  }
]

// ========================================
// 自定义组件 => 数据篮子计算数据

let ctx = this;

var showData = ctx.showData;

var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [3, 0]
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
var color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
for (var i = 0; i < showData.length; i++) {
    data.push({
        value: showData[i].value,
        name: showData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [100, 104],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < showData.length; i++) {
                        total += showData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if(params.name !== '') {
                        return params.name + '\n{white|' + '占比' + percent + '%}';
                    }else {
                        return '';
                    }
                },
                rich: rich
            },
            labelLine: {
                length:25,
                length2:60,
                show: true,
                color:'#00ffff'
            }
        }
    },
    data: data
}];

var option = {
    backgroundColor: '#04243E',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}

return option
