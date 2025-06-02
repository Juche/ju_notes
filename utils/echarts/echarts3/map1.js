/** @type {V2ViewType} */
// let ctx = this;

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

var mtPath =
  "path://M752.151 866.527H579.133v-47.486c173.631-32.436 304.931-184.675 304.931-367.785 0-153.623-92.46-285.338-224.778-342.977-0.023 0.032-0.047 0.062-0.069 0.094-45.734-20.009-96.17-31.258-149.294-31.258s-103.559 11.249-149.292 31.257l-0.069-0.093c-132.32 57.64-224.78 189.355-224.78 342.977 0 183.11 131.3 335.349 304.93 367.785v47.486H267.694c-33.178 0-34.62 34.589-34.62 34.589v69.215h553.699v-69.215c0-19.054-15.533-34.589-34.622-34.589zM634.962 135.969c-32.767 30.62-76.618 49.472-125.039 49.472-48.422 0-92.272-18.851-125.038-49.473 38.734-15.516 80.86-24.269 125.038-24.269s86.304 8.752 125.039 24.27z m-308.89 315.286c0-101.556 82.229-183.82 183.85-183.82 101.554 0 183.851 82.264 183.851 183.82 0 101.585-82.297 183.849-183.851 183.849-101.62 0-183.85-82.264-183.85-183.849z m281.179 0c0-53.781-43.547-97.296-97.328-97.296-18.52 0-35.629 5.436-50.359 14.393 4.596-1.442 9.363-2.381 14.395-2.381 27.274 0 49.348 22.075 49.348 49.351 0 27.245-22.073 49.317-49.348 49.317-27.277 0-49.318-22.073-49.318-49.317 0-5.064 0.972-9.831 2.384-14.428-8.994 14.732-14.428 31.841-14.428 50.361 0 53.81 43.511 97.324 97.325 97.324 53.782 0.001 97.329-43.514 97.329-97.324z";
var serverPath =
  "path://M960 320H64c-35.346 0-64-28.654-64-64V128c0-35.346 28.654-64 64-64h896c35.346 0 64 28.654 64 64v128c0 35.346-28.654 64-64 64z m-96-176c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z m-128 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z m224 496H64c-35.346 0-64-28.654-64-64v-128c0-35.346 28.654-64 64-64h896c35.346 0 64 28.654 64 64v128c0 35.346-28.654 64-64 64z m-96-176c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z m-128 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z m224 496H64c-35.346 0-64-28.654-64-64v-128c0-35.346 28.654-64 64-64h896c35.346 0 64 28.654 64 64v128c0 35.346-28.654 64-64 64z m-96-176c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z m-128 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z";

// var color = ['#a6c84c', '#ffa022', '#46bee9'];
var series = [
  {
    type: "map",
    // mapType: 'china',
    map: "china",
    zlevel: 0,
    aspectScale: 0.85,
    layoutCenter: ["50%", "50%"], //地图位置
    layoutSize: "120%",
    // zoom: 1, //当前视角的缩放比例
    // roam: true, //是否开启平游或缩放
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
      symbol: "pin",
      //   symbol: serverPath,
      symbolSize: 40,
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
  backgroundColor: "#0A1432",
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
    // roam: true, //是否允许缩放
    layoutCenter: ["50%", "51.5%"], //地图位置
    layoutSize: "120%",
    aspectScale: 0.85, //长宽比
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
};

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

// return option;
