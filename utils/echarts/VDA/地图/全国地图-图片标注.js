
var geoCoordMap = {
  上海: [121.4648, 31.2891],
  东莞: [113.8953, 22.901],
  东营: [118.7073, 37.5513],
  中山: [113.4229, 22.478],
  临汾: [111.4783, 36.1615],
  临沂: [118.3118, 35.2936],
  丹东: [124.541, 40.4242],
  丽水: [119.5642, 28.1854],
  乌鲁木齐: [87.9236, 43.5883],
  佛山: [112.8955, 23.1097],
  保定: [115.0488, 39.0948],
  兰州: [103.5901, 36.3043],
  包头: [110.3467, 41.4899],
  北京: [116.4551, 40.2539],
  北海: [109.314, 21.6211],
  南京: [118.8062, 31.9208],
  南宁: [108.479, 23.1152],
  南昌: [116.0046, 28.6633],
  南通: [121.1023, 32.1625],
  厦门: [118.1689, 24.6478],
  台州: [121.1353, 28.6688],
  合肥: [117.29, 32.0581],
  呼和浩特: [111.4124, 40.4901],
  咸阳: [108.4131, 34.8706],
  哈尔滨: [127.9688, 45.368],
  唐山: [118.4766, 39.6826],
  嘉兴: [120.9155, 30.6354],
  大同: [113.7854, 39.8035],
  大连: [122.2229, 39.4409],
  天津: [117.4219, 39.4189],
  太原: [112.3352, 37.9413],
  威海: [121.9482, 37.1393],
  宁波: [121.5967, 29.6466],
  宝鸡: [107.1826, 34.3433],
  宿迁: [118.5535, 33.7775],
  常州: [119.4543, 31.5582],
  广州: [113.5107, 23.2196],
  廊坊: [116.521, 39.0509],
  延安: [109.1052, 36.4252],
  张家口: [115.1477, 40.8527],
  徐州: [117.5208, 34.3268],
  德州: [116.6858, 37.2107],
  惠州: [114.6204, 23.1647],
  成都: [103.9526, 30.7617],
  扬州: [119.4653, 32.8162],
  承德: [117.5757, 41.4075],
  拉萨: [91.1865, 30.1465],
  无锡: [120.3442, 31.5527],
  日照: [119.2786, 35.5023],
  昆明: [102.9199, 25.4663],
  杭州: [119.5313, 29.8773],
  枣庄: [117.323, 34.8926],
  柳州: [109.3799, 24.9774],
  株洲: [113.5327, 27.0319],
  武汉: [114.3896, 30.6628],
  汕头: [117.1692, 23.3405],
  江门: [112.6318, 22.1484],
  沈阳: [123.1238, 42.1216],
  沧州: [116.8286, 38.2104],
  河源: [114.917, 23.9722],
  泉州: [118.3228, 25.1147],
  泰安: [117.0264, 36.0516],
  泰州: [120.0586, 32.5525],
  济南: [117.1582, 36.8701],
  济宁: [116.8286, 35.3375],
  海口: [110.3893, 19.8516],
  淄博: [118.0371, 36.6064],
  淮安: [118.927, 33.4039],
  深圳: [114.5435, 22.5439],
  清远: [112.9175, 24.3292],
  温州: [120.498, 27.8119],
  渭南: [109.7864, 35.0299],
  湖州: [119.8608, 30.7782],
  湘潭: [112.5439, 27.7075],
  滨州: [117.8174, 37.4963],
  潍坊: [119.0918, 36.524],
  烟台: [120.7397, 37.5128],
  玉溪: [101.9312, 23.8898],
  珠海: [113.7305, 22.1155],
  盐城: [120.2234, 33.5577],
  盘锦: [121.9482, 41.0449],
  石家庄: [114.4995, 38.1006],
  福州: [119.4543, 25.9222],
  秦皇岛: [119.2126, 40.0232],
  绍兴: [120.564, 29.7565],
  聊城: [115.9167, 36.4032],
  肇庆: [112.1265, 23.5822],
  舟山: [122.2559, 30.2234],
  苏州: [120.6519, 31.3989],
  莱芜: [117.6526, 36.2714],
  菏泽: [115.6201, 35.2057],
  营口: [122.4316, 40.4297],
  葫芦岛: [120.1575, 40.578],
  衡水: [115.8838, 37.7161],
  衢州: [118.6853, 28.8666],
  西宁: [101.4038, 36.8207],
  西安: [109.1162, 34.2004],
  贵阳: [106.6992, 26.7682],
  连云港: [119.1248, 34.552],
  邢台: [114.8071, 37.2821],
  邯郸: [114.4775, 36.535],
  郑州: [113.4668, 34.6234],
  鄂尔多斯: [108.9734, 39.2487],
  重庆: [107.7539, 30.1904],
  金华: [120.0037, 29.1028],
  铜川: [109.0393, 35.1947],
  银川: [106.3586, 38.1775],
  镇江: [119.4763, 31.9702],
  长春: [125.8154, 44.2584],
  长沙: [113.0823, 28.2568],
  长治: [112.8625, 36.4746],
  阳泉: [113.4778, 38.0951],
  青岛: [120.4651, 36.3373],
  韶关: [113.7964, 24.7028],
};
var SHData = [
  [{ name: "北京", value: 100 }, { name: "上海" }],
  [{ name: "广州", value: 70 }, { name: "上海" }],
  [{ name: "哈尔滨", value: 30 }, { name: "上海" }],
  [{ name: "青岛", value: 50 }, { name: "上海" }],
  [{ name: "南昌", value: 20 }, { name: "上海" }],
  [{ name: "银川", value: 10 }, { name: "上海" }],
  [{ name: "拉萨", value: 80 }, { name: "上海" }],
  [{ name: "西安", value: 55 }, { name: "上海" }],
  [{ name: "乌鲁木齐", value: 90 }, { name: "上海" }],
];
var CDData = [
  [{ name: "北京", value: 100 }, { name: "成都" }],
  [{ name: "广州", value: 70 }, { name: "成都" }],
  [{ name: "哈尔滨", value: 30 }, { name: "成都" }],
  [{ name: "青岛", value: 50 }, { name: "成都" }],
  [{ name: "南昌", value: 20 }, { name: "成都" }],
  [{ name: "银川", value: 10 }, { name: "成都" }],
  [{ name: "拉萨", value: 80 }, { name: "成都" }],
  [{ name: "西安", value: 55 }, { name: "成都" }],
  [{ name: "乌鲁木齐", value: 90 }, { name: "成都" }],
];
var FZData = [
  [{ name: "北京", value: 100 }, { name: "福州" }],
  [{ name: "广州", value: 70 }, { name: "福州" }],
  [{ name: "哈尔滨", value: 30 }, { name: "福州" }],
  [{ name: "青岛", value: 50 }, { name: "福州" }],
  [{ name: "南昌", value: 20 }, { name: "福州" }],
  [{ name: "银川", value: 10 }, { name: "福州" }],
  [{ name: "拉萨", value: 80 }, { name: "福州" }],
  [{ name: "西安", value: 55 }, { name: "福州" }],
  [{ name: "乌鲁木齐", value: 90 }, { name: "福州" }],
];
var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var dataItem = data[i];
    var fromCoord = geoCoordMap[dataItem[1].name];
    var toCoord = geoCoordMap[dataItem[0].name];
    if (fromCoord && toCoord) {
      res.push([
        {
          coord: fromCoord,
          value: dataItem[0].value,
        },
        {
          coord: toCoord,
        },
      ]);
    }
  }
  return res;
};

// var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [
  {
    type: "map",
    // mapType: 'china',
    map: "china",
    zlevel: 0,
    aspectScale: 1,
    layoutCenter: ["50%", "50%"], //地图位置
    layoutSize: "145%",
    // zoom: 1, //当前视角的缩放比例
    roam: false, //是否开启平游或缩放
    scaleLimit: {
      //滚轮缩放的极限控制
      min: 1,
      max: 2,
    },
    itemStyle: {
      normal: {
        // areaColor: "rgba(33, 66, 120, 0.3)",
        areaColor: "rgba(15, 32, 81, 1)",
        borderColor: "#077DEA", //省市边界线00fcff 516a89
        borderWidth: 2.5,
      },
      emphasis: {
        // areaColor: "rgba(33, 66, 120, 0.5)",
        areaColor: "rgba(20, 54, 129, 1)",
        label: {
          color: "#fff",
        },
      },
    },
    data: [
      {
        name: "南海诸岛",
        value: 0,
        itemStyle: {
          normal: {
            opacity: 0,
            label: {
              show: false,
            },
          },
        },
      },
    ],
  },
];
// SHData  上海
// CDData  成都
// FZData  福州
[
  ["上海", SHData],
  ["成都", CDData],
  ["福州", FZData],
].forEach(function (item, i) {
  series.push(
    {
      type: "lines",
      zlevel: 2,
      effect: {
        show: true,
        period: 8, //箭头指向速度，值越小速度越快
        trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
        // 包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        symbol: "diamond", //箭头图标
        symbolSize: 4, //图标大小
        // color: "#fff",
        color: "rgba(158, 226, 255, 0.5)",
      },
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                // color: "rgba(203, 229, 255, 0)",
                color: "rgba(158, 226, 255, 0)",
              },
              {
                offset: 0.05,
                // color: "rgba(203, 229, 255, 0.1)",
                color: "rgba(158, 226, 255, 0.1)",
              },
              {
                offset: 0.1,
                // color: "rgba(203, 229, 255, 0.5)",
                color: "rgba(158, 226, 255, 0.5)",
              },
              {
                offset: 0.5,
                // color: "rgba(203, 229, 255, 0.8)",
                color: "rgba(158, 226, 255, 0.7)",
              },
              {
                offset: 0.7,
                // color: "rgba(203, 229, 255, 0.5)",
                color: "rgba(158, 226, 255, 0.5)",
              },
              {
                offset: 0.8,
                // color: "rgba(203, 229, 255, 0.1)",
                color: "rgba(158, 226, 255, 0.1)",
              },
              {
                offset: 1,
                // color: "rgba(203, 229, 255, 0)",
                color: "rgba(158, 226, 255, 0)",
              },
            ],
            false
          ),
          width: 0.5, //尾迹线条宽度
          opacity: 0.1, //尾迹线条透明度
          curveness: 0.15, //尾迹线条曲直度
          //   shadowColor: "rgba(203, 229, 255, 0.5)",
          //   shadowBlur: 1.5,
          //   shadowOffsetX: 5,
          //   shadowOffsetY: 5,
        },
      },
      data: convertData(item[1]),
    },
    {
      //被攻击点样式
      type: "effectScatter",
      coordinateSystem: "geo",
      rippleEffect: {
        //涟漪特效
        period: 4, //动画时间，值越小速度越快
        brushType: "fill", //波纹绘制方式 stroke, fill
        scale: 3, //波纹圆环最大限制，值越大波纹越大
      },
      label: {
        normal: {
          show: true,
          position: "right", //显示位置
          offset: [10, 0], //偏移设置
          // formatter: function(params) { //圆环显示文字
          //     return params.data.name;
          // },
          formatter: "{b}", //圆环显示文字
          fontSize: 13,
          //   color: "#CBE5FF",
          // color: 'rgba(255, 255, 255, 0.5)',
          color: "rgba(158, 226, 255, 0.8)",
        },
        emphasis: {
          show: true,
        },
      },
      // 包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
      symbol: "circle",
      symbolSize: function (val) {
        // return 4 + val[2] / 10; //圆环大小
        return 8; //圆环大小
      },
      itemStyle: {
        //坐标点颜色
        normal: {
          show: true,
          //   color: 'rgba(255, 255, 255, 0.1)',
          color: "rgba(158, 226, 255, 0.2)",
          // shadowBlur: 10,
          //   shadowColor: '#fff'
        },
        // emphasis: {
        //     areaColor: '#f00'
        // }
      },
      data: item[1].map(function (dataItem) {
        return {
          name: dataItem[0].name,
          value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
        };
      }),
    },
    {
      // 攻击点样式
      type: "scatter",
      coordinateSystem: "geo",
      zlevel: 2,
      // 包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
      // symbol: "pin",
      symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABHCAYAAACXgB6bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzZDQjQ5QzQ4Njg5MTFFOTg1Q0VBNkE1QzhCOTY3RjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDU1Mzk2MkE4NjhBMTFFOTg1Q0VBNkE1QzhCOTY3RjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNkNCNDlDMjg2ODkxMUU5ODVDRUE2QTVDOEI5NjdGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNkNCNDlDMzg2ODkxMUU5ODVDRUE2QTVDOEI5NjdGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr5aktUAAAtUSURBVHja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',
      symbolSize: [30, 45],
      symbolOffset: [0, -18],
      itemStyle: {
        normal: {
          show: true,
          color: "#54E1FF",
        },
      },
      data: [
        {
          name: item[0],
          value: geoCoordMap[item[0]],
        },
      ],
    },
    {
      // 攻击点样式
      // 被攻击点样式
      // type: "scatter",
      type: "effectScatter",
      coordinateSystem: "geo",
      //   zlevel: 2,
      rippleEffect: {
        //涟漪特效
        period: 15, //动画时间，值越小速度越快
        brushType: "fill", //波纹绘制方式 stroke, fill
        scale: 4, //波纹圆环最大限制，值越大波纹越大
      },
      label: {
        normal: {
          show: true,
          position: "right", //显示位置
          offset: [10, 0], //偏移设置
          // formatter: function(params) { //圆环显示文字
          //     return params.data.name;
          // },
          formatter: "{b}", //圆环显示文字
          fontSize: 13,
          //   color: "#CBE5FF",
          // color: 'rgba(255, 255, 255, 0.5)',
          color: "rgba(158, 226, 255, 0.8)",
        },
        emphasis: {
          show: true,
        },
      },
      // 包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
      symbol: "circle",
      symbolSize: function (val) {
        // return 4 + val[2] / 10; //圆环大小
        return 15; //圆环大小
      },
      itemStyle: {
        //坐标点颜色
        normal: {
          show: true,
          //   color: 'rgba(255, 255, 255, 0.1)',
          color: "rgba(158, 226, 255, 0.6)",
          // shadowBlur: 10,
          //   shadowColor: '#fff'
        },
        // emphasis: {
        //     areaColor: '#f00'
        // }
      },
      data: [
        {
          name: item[0],
          value: geoCoordMap[item[0]],
        },
      ],
    }
  );
});

option = {
  // backgroundColor: "#0A1432",
  // title: {
  //   text: "",
  //   textStyle: {
  //     color: "#fff",
  //     fontSize: 14,
  //   },
  //   padding: [20, 20, 20, 20],
  // },
  //   tooltip: {
  //     trigger: "item",
  //     backgroundColor: "rgba(17, 71, 156, 0.9)",
  //     borderColor: "#CBE5FF",
  //     borderWidth: 1,
  //     showDelay: 0.2,
  //     hideDelay: 0.2,
  //     enterable: true,
  //     transitionDuration: 0,
  //     extraCssText: "z-index:100",
  //     formatter: function (params, ticket, callback) {
  //       //根据业务自己拓展要显示的内容
  //       var res = "";
  //       var name = params.name;
  //       var value = params.value;
  //       res = "<span>" + name + "</span><br/>坐标：" + value;
  //       return res;
  //     },
  //   },

  visualMap: {
    //图例值控制
    // type: 'piecewise', // 分段型piecewise 连续型continuous
    min: 0,
    max: 100,
    show: false,
    calculable: true,
    color: ["#ff3333", "orange", "yellow", "lime", "aqua"],
    inRange: {
      // color: ['#9EE2FF'],
      // symbolSize: [6, 8],
      // 包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
      // symbol: ''
    },
    // color: ["#9EE2FF", "#9EE2FF", "#9EE2FF", "#9EE2FF", "#9EE2FF"],
    // textStyle: {
    //   color: "#fff",
    // },
  },
  geo: {
    map: "china",
    label: {
      emphasis: {
        show: false,
      },
    },
    // zlevel: 0,
    roam: false, //是否允许缩放
    layoutCenter: ["50%", "51.5%"], //地图位置
    layoutSize: "145%",
    aspectScale: 1, //长宽比
    itemStyle: {
      normal: {
        areaColor: "rgba(33, 66, 120, 0.3)",
        borderColor: "rgba(7, 124, 234, 0.3)", //省市边界线
        borderWidth: 2.5,
      },
      emphasis: {
        color: "rgba(33, 66, 120, 0.5)",
      },
      //   shadowColor: '#f00',
      //   shadowOffsetX: 0,
      //   shadowOffsetY: 0,
      //   shadowBlur: 10
    },
    regions: [
      {
        name: "南海诸岛",
        itemStyle: {
          areaColor: "rgba(0, 10, 52, 1)",

          borderColor: "rgba(0, 10, 52, 1)",
          normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
          },
        },
        label: {
          show: false,
          color: "#FFFFFF",
          fontSize: 12,
        },
      },
    ],
  },

  series: series,
}

// var counts = option.series[0].data.length; //获取所有闪动圆环数量
// var dataIndex = 0;
// //让圆环的提示框自动触发轮播显示
// function autoHoverTip() {
//   for (var i = 0; i < counts; i++) {
//     (function (i) {
//       ts = setTimeout(function () {
//         myChart.dispatchAction({
//           type: "showTip",
//           seriesIndex: 1,
//           dataIndex: i,
//         });
//       }, 5000 * i);
//     })(i);
//   }
// }

// setTimeout(function () {
//   autoHoverTip();
//   tv = setInterval(autoHoverTip, counts * 5600);
// }, 500);

