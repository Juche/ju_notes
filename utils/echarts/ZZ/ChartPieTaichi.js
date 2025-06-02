let index = 0;
var colorList = ['rgba(255, 255, 255, 0.1)', 'transparent'];
var colorList2 = ['#1ab8fc', 'transparent'];
var data = [
  {
    name: '男性',
    value: 35,
  },
  {
    name: '女性',
    value: 65,
  },
];

option = {
  // backgroundColor: '#000f26',
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
  },
  series: [
    {
      center: ['50%', '50%'],
      radius: ['60%', '88%'],
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
          color: '#034089',
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
      zlevel: 10,
      center: ['50%', '50%'],
      radius: ['35%', '85%'],
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
        // show: false,
        position: 'outside',
        // formatter: '{a|{b}：{d}%}\n{hr|}',
        formatter: '{a|{b}：{d}%}',
        alignTo: 'labelLine',
        rich: {
          // hr: {
          //   backgroundColor: '#eee',
          //   borderRadius: 4,
          //   width: 4,
          //   height: 4,
          //   padding: [1, 1, 0, -10],
          // },
          a: {
            color: '#eee',
            padding: [30, -20, 0, -20],
          },
        },
      },
      labelLine: {
        normal: {
          length: 40,
          length2: 30,
          lineStyle: {
            width: 1,
            color: '#eee',
          },
        },
      },
      data: data,
    },
    // 外圈
    {
      type: 'pie',
      center: ['50%', '50%'],
      radius: ['85%', '100%'],
      hoverOffset: 0,
      itemStyle: {
        normal: {
          color: function (params) {
            return colorList2[params.dataIndex];
          },
        },
      },
      label: {
        show: false,
      },
      data: data,
    },
  ],
};
