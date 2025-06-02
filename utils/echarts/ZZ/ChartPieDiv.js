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

option = {
  // backgroundColor: '#000f26',
  tooltip: {
    trigger: 'item',
  },
  legend: {
    // type: 'scroll',
    orient: 'vertical',
    // right: '5%',
    left: '55%',
    top: 'center',
    itemGap: 20,
    selectedMode: true,
    icon: 'circle',
    textStyle: {
      fontSize: 12,
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
      center: ['30%', '50%'],
      radius: ['30%', '100%'],
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
          color: 'rgba(18, 48, 81, 0.5)',
        },
      },
      data: [
        {
          value: 1,
        },
      ],
    },
    {
      type: 'pie',
      center: ['30%', '50%'],
      radius: ['45%', '85%'],
      clockwise: true,
      zlevel: 10,
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
  ],
};
