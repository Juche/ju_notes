let index = 0;
var colorList = ['#1AFCDF', '#0066FF', '#FFC80B', '#BEE5FB', '#139BFF'];
var data = [
  {
    name: '生活照料',
    value: 35,
  },
  {
    name: '饮食就餐',
    value: 30,
  },
  {
    name: '保健康复',
    value: 10,
  },
  {
    name: '居家安全',
    value: 20,
  },
  {
    name: '其他',
    value: 5,
  },
];
function fun() {
  var timer = setInterval(function () {
    console.log(index);
    myChart.dispatchAction({
      type: 'hideTip',
      seriesIndex: 0,
      dataIndex: index,
    });
    // 显示提示框
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: index,
    });
    // 取消高亮指定的数据图形
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: index === 0 ? 4 : index - 1,
    });
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: index,
    });
    index++;
    if (index > 4) {
      index = 0;
    }
  }, 300);
}
fun();
option = {
  backgroundColor: '#000f26',
  tooltip: {
    trigger: 'item',
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: '5%',
    top: 'center',
    itemGap: 20,
    selectedMode: true,
    icon: 'pin',
    textStyle: {
      rich: {
        a: {
          color: '#eeeeee',
          width: 80,
        },
        b: {
          color: '#eeeeee',
        },
      },
    },
    formatter: function (name) {
      let title = '';
      var total = 0;
      var target;
      var index;
      for (var i = 0, l = data.length; i < l; i++) {
        if (data[i].name == name) {
          target = data[i].value;
          title = data[i].label;
          index = i < 5 ? i : 4;
        }
      }
      //   return `{a| ${name}}{b${index}| ${target}}%`;

      if (name && target) {
        return `{a| ${name}}{b| ${target}%}`;
      }
    },
  },
  series: [
    {
      type: 'pie',
      center: ['40%', '50%'],
      radius: ['30%', '60%'],
      clockwise: true,
      avoidLabelOverlap: true,
      hoverOffset: 10,
      // emphasis: {
      //     itemStyle: {
      //         borderColor: '#f3f3f3',
      //         borderWidth: 10,
      //     },
      // },
      itemStyle: {
        normal: {
          color: function (params) {
            return colorList[params.dataIndex];
          },
        },
      },
      label: {
        show: false,
        // position: 'outside',
        // formatter: '{a|{b}：{d}%}\n{hr|}',
        // rich: {
        //     hr: {
        //         backgroundColor: 't',
        //         borderRadius: 1,
        //         width: 1,
        //         height: 1,
        //         padding: [1, 1, 0, -4],
        //     },
        //     a: {
        //         padding: [-15, 7, -10, 7],
        //     },
        // },
      },
      // labelLine: {
      //     normal: {
      //         length: 10,
      //         length2: 15,
      //         lineStyle: {
      //             width: 1,
      //         },
      //     },
      // },
      data: data,
    },
    {
      center: ['40%', '50%'],
      radius: ['25%', '30%'],
      type: 'pie',
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      animation: false,
      tooltip: {
        show: false,
      },
      itemStyle: {
        normal: {
          color: 'rgba(18, 48, 81, 0.8)',
        },
      },
      data: [{
          value: 1,
      }],
    },
    {
      center: ['40%', '50%'],
      radius: ['60%', '65%'],
      type: 'pie',
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
      animation: false,
      tooltip: {
        show: false,
      },
      itemStyle: {
        normal: {
          color: 'rgba(18, 48, 81, 0.8)',
        },
      },
      data: [{
          value: 1,
      }],
    },
  ],
};
