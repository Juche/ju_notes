// var jiangxisheng = "/asset/get/s/data-1566876250425-5KOygeD3A.json";

var yichun = "/asset/get/s/data-1566876354738-Eh1cufe1l.json";
var xinyu = "/asset/get/s/data-1566876332728-O-Fvqqw9V.json";
var shangrao = "/asset/get/s/data-1566876321731-VO8N4vczw.json";
var pingxiang = "/asset/get/s/data-1566876306157-1Gke-s6tB.json";
var nanchang = "/asset/get/s/data-1566876294654-OrNytYJbe.json";
var jiujiang = "/asset/get/s/data-1566876280019-6g2VfsAJT.json";
var jingdezhen = "/asset/get/s/data-1566876264856-X1WYaSWXr.json";
var jian = "/asset/get/s/data-1566876224608-KmCb1FAjB.json";
var fuzhou = "/asset/get/s/data-1566876207678-2ifDcX1eM.json";
var yingtan = "/asset/get/s/data-1566876159089-Xlb0p3RrU.json";
var ganzhou = "/asset/get/s/data-1566877015283-F6DHB71Uj.json";

// var jiangxi = 'https://geo.datav.aliyun.com/areas_v2/bound/360000_full.json'
var hefei = "https://geo.datav.aliyun.com/areas_v2/bound/340100_full.json";
// var guangzhou = 'https://geo.datav.aliyun.com/areas_v2/bound/440100_full.json'
var guangzhou = "/asset/get/s/data-1576821068997-HGlupX6J.json";
var jiangxi = "/asset/get/s/data-1566876250425-5KOygeD3A.json";

// // var jiangxisheng = 'https://geo.datav.aliyun.com/areas_v2/bound/360000_full.json'
// // var jiangxisheng = 'https://geo.datav.aliyun.com/areas_v2/bound/340100_full.json'
// var jiangxisheng = 'https://geo.datav.aliyun.com/areas_v2/bound/440100_full.json'

const convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  return res;
};

const renderMap = (activeMap) => {
  // mapOption.series[0].map = activeMap.name;
  // mapOption.series[0].viewControl.distance = activeMap.distance;
  mapOption.geo3D.map = activeMap.name;
  mapOption.geo3D.viewControl.distance = activeMap.distance;
  $.get(activeMap.map, function (geoJson) {
    echarts.registerMap(activeMap.name, geoJson);
    myChart.setOption(mapOption, true);
  });
};

var max = 4000,
  min = 0; // todo
var maxSize4Pin = 100,
  minSize4Pin = 20;

var geoCoordMap = {
  赣州市: [114.940278, 25.85097],
  吉安市: [114.986373, 27.111699],
  上饶市: [117.971185, 28.44442],
  九江市: [115.992811, 29.712034],
  抚州市: [116.358351, 27.98385],
  宜春市: [114.391136, 27.8043],
  南昌市: [115.892151, 28.676493],
  景德镇市: [117.214664, 29.29256],
  萍乡市: [113.852186, 27.622946],
  鹰潭市: [117.033838, 28.238638],
  新余市: [114.930835, 27.810834],
};

var maps = {
  江西省: {
    map: jiangxi,
    name: "江西省",
    distance: 150,
  },
  合肥市: {
    map: hefei,
    name: "合肥市",
    distance: 151,
  },
  广州市: {
    map: guangzhou,
    name: "广州市",
    distance: 152,
  },
  宜春市: {
    map: yichun,
    name: "宜春市",
    distance: 150.1,
  },
  南昌市: {
    map: xinyu,
    name: "南昌市",
    distance: 150.2,
  },
  新余市: {
    map: shangrao,
    name: "新余市",
    distance: 150.3,
  },
  上饶市: {
    map: pingxiang,
    name: "上饶市",
    distance: 150.4,
  },
  萍乡市: {
    map: nanchang,
    name: "萍乡市",
    distance: 150.5,
  },
  九江市: {
    map: jiujiang,
    name: "九江市",
    distance: 150.6,
  },
  景德镇市: {
    map: jingdezhen,
    name: "景德镇市",
    distance: 150.7,
  },
  吉安市: {
    map: jian,
    name: "吉安市",
    distance: 150.8,
  },
  抚州市: {
    map: fuzhou,
    name: "抚州市",
    distance: 150.9,
  },
  鹰潭市: {
    map: yingtan,
    name: "鹰潭市",
    distance: 150.1,
  },
  赣州市: {
    map: ganzhou,
    name: "赣州市",
    distance: 150.11,
  },
};

var mapData = [
  {
    name: "宜春市",
    value: "598",
  },
  {
    name: "新余市",
    value: "2223",
  },
  {
    name: "上饶市",
    value: "637",
  },
  {
    name: "萍乡市",
    value: "885",
  },
  {
    name: "南昌市",
    value: "768",
  },
  {
    name: "九江市",
    value: "1233",
  },
  {
    name: "景德镇市",
    value: "1633",
  },
  {
    name: "吉安市",
    value: "1768",
  },
  {
    name: "抚州市",
    value: "1233",
  },
  {
    name: "鹰潭市",
    value: "3633",
  },
  {
    name: "赣州市",
    value: "3888",
  },
  {
    name: "江西省",
    value: "5633",
  },
];

var mapOption = {
  visualMap: {
    // show: false,
    min: 0,
    max: 3000,
    right: 10,
    // splitNumber: 3,
    orient: "horizontal",
    // inRange: {
    //   color: [
    //       "#A0FFF1",
    //       "#FFEFA0",
    //       "#FF6060"
    //     // "#313695",
    //     // "#4575b4",
    //     // "#74add1",
    //     // "#abd9e9",
    //     // "#e0f3f8",
    //     // "#ffffbf",
    //     // "#fee090",
    //     // "#fdae61",
    //     // "#f46d43",
    //     // "#d73027",
    //     // "#a50026",
    //   ],
    // },
    type: "piecewise",
    bottom: 100,
    textStyle: {
      color: "#FFFF",
    },
    splitList: [
      {
        lt: 1000,
        color: "#A0FFF1",
        label: "1000人以内",
      },
      {
        gte: 1000,
        lte: 3000,
        color: "#FFEFA0 ",
        label: "1000-3000",
      },
      {
        gte: 3000,
        color: "#FF6060",
        label: "大于3000",
      },
    ],
  },
  tooltip: {
    trigger: "item",
    show: true,
    formatter: function (params) {
      if (params.data) {
        return `${params.name}</br>
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#1197b8"></span>
                规划数量：${params.data.value}</br>`;
      } else {
        return;
      }
    },
  },
  geo3D: {
    type: "map3D",
    // map: "world",
    map: "jiangxi",
    selectedMode: "single", //地图高亮单选
    boxDepth: 90, //地图倾斜度
    regionHeight: 6, //地图高度
    viewControl: {
      distance: 150, //地图视角 控制初始大小
      rotateSensitivity: 0, //禁止旋转
      // zoomSensitivity: 0, //禁止缩放
    },
    // 标签样式
    label: {
      show: true, //是否显示数据标签(geo模式才有效)
      textStyle: {
        color: "#333", //文字颜色
        fontSize: 16, //文字大小
        fontWeight: "bold",
        backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
        // borderColor: '#000',
      },
    },
    // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
    // roam: true,
    // 地图子项边缘配色
    itemStyle: {
      // color: "#81d0f1", //地图颜色
      borderWidth: 1,
      borderColor: "#4bb5ff",
      opacity: 1,
    },
    //   itemStyle: {
    //             normal: {
    //                 areaColor: '#f00',
    //                 borderColor: '#0a53e9',//线
    //                 shadowColor: '#092f8f',//外发光
    //                 shadowBlur: 20
    //             },
    //  emphasis: {
    //                 areaColor: '#0f0',//悬浮区背景
    //             }
    //         },
    emphasis: {
      label: {
        show: true, //是否显示高亮
        textStyle: {
          color: "#f00", //高亮文字颜色
        },
      },
    },
    //高亮市区 echarts bug 不生效
    //   regions: [
    //     {
    //       name: "ganzhou",
    //       itemStyle: {
    //         areaColor: "#f00",
    //       },
    //     },
    //   ],
    // 真实感材质相关的配置项，在 shading 为'realistic'时有效
    shading: "realistic",
    realisticMaterial: {
      // 材质细节的纹理贴图
      //   detailTexture: "/asset/get/s/data-1497261115431-B1XrEJ2f-.jpg",
    },
    // 可以通过 postEffect 下的 colorCorrection 配置项去手动的调整颜色。
    // colorCorrection 下有常见的曝光 exposure、亮度 brightness、对比度 contrast 和饱和度 saturation 选项
    postEffect: {
      enable: true,
      colorCorrection: {
        //  lookupTexture: "/asset/get/s/data-1497261115431-B1XrEJ2f-.jpg",
      },
    },
    // 光照
    light: {
      // 主光源
      main: {
        intensity: 1,
        // 为主光源添加阴影
        shadow: true,
        // 通过设置主光源 alpha、beta 两个属性设置不同的光照角度
        alpha: 150,
        beta: 70,
      },
      // 环境光
      ambient: {
        intensity: 0,
      },
      // 使用一张全景贴图作为环境光源
      // 推荐一个有不少免费的HDR全景图资源的网站 http://www.hdrlabs.com/sibl/archive.html
      ambientCubemap: {
        diffuseIntensity: 1,
        texture: "/asset/get/s/data-1497251035660-HkVJTnsMW.hdr",
        // exposure: 1,
      },
    },
    // 地面
    groundPlane: {
      show: false,
    },
    //   data: regionData,
    data: mapData,
  },
  series: [
    // {
    //   //被攻击点样式
    //   type: "effectScatter",
    //   coordinateSystem: "geo3D",
    //   rippleEffect: {
    //     //涟漪特效
    //     period: 4, //动画时间，值越小速度越快
    //     brushType: "fill", //波纹绘制方式 stroke, fill
    //     scale: 3, //波纹圆环最大限制，值越大波纹越大
    //   },
    //   label: {
    //     normal: {
    //       show: true,
    //       position: "right", //显示位置
    //       offset: [10, 0], //偏移设置
    //       // formatter: function(params) { //圆环显示文字
    //       //     return params.data.name;
    //       // },
    //       formatter: "{b}", //圆环显示文字
    //       fontSize: 13,
    //       //   color: "#CBE5FF",
    //       // color: 'rgba(255, 255, 255, 0.5)',
    //       color: "rgba(158, 226, 255, 0.8)",
    //     },
    //     emphasis: {
    //       show: true,
    //     },
    //   },
    //   // 包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    //   symbol: "circle",
    //   symbolSize: function (val) {
    //     // return 4 + val[2] / 10; //圆环大小
    //     return 8; //圆环大小
    //   },
    //   itemStyle: {
    //     //坐标点颜色
    //     normal: {
    //       show: true,
    //       //   color: 'rgba(255, 255, 255, 0.1)',
    //       color: "rgba(158, 226, 255, 0.2)",
    //       // shadowBlur: 10,
    //       //   shadowColor: '#fff'
    //     },
    //     // emphasis: {
    //     //     areaColor: '#f00'
    //     // }
    //   },
    //   data: convertData(
    //     mapData
    //       .sort(function (a, b) {
    //         return b.value - a.value;
    //       })
    //       .slice(0, 5)
    //   ),
    //   // data: item[1].map(function (dataItem) {
    //   //   return {
    //   //     name: dataItem[0].name,
    //   //     value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
    //   //   };
    //   // }),
    // },
    {
      name: "bar3D",
      type: "bar3D",
      coordinateSystem: "geo3D",
      barSize: 3, //柱子粗细
      minHeight: 1,
      shading: "lambert", // 三维图形的着色效果
      bevelSize: 0, // 柱子倒角
      bevelSmoothness: 2, // 柱子倒角的光滑/圆润度
      label: {
        show: false,
      },
      itemStyle: {
        opacity: 1,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      data: convertData(mapData),
    },
    // {
    //   name: "点",
    //   type: "scatter3D",
    //   coordinateSystem: "geo3D",
    //   symbol: "pin",
    // //   symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACZUlEQVRYR7WX300bQRDGfyPBc0gFMRWQVBBb8j2TDoAKAhUEVxCoAFJB4PlO4lxBnApiKgg829JEuz7b92f3dm9F7sWStTPzzezM980KCZ9OGSOcsWImJcsEFzsTSTHWMSMO+WNtlWspmKX4MTZJAGzcDK0FXQAXkmN+B31vBcBU4gVhMhREEgDN+Aj8cqS6YMVESl5iy5AGYMolwndPkB+Sc/5/AWT2rk+8QVYcx07H4ApUI/jUm6FyJQU3MVUYBEDHHHGICW56oO+bS8747QFk3ANnEY6XknMccS6eBzQ+uI0reZzv4BXYsh9wh/AlJqOKHZ+lYKQZNygqBVc+214A1bzfRdx52/8c7HUZW/PdS86FC4QXgO12+IlwFJ35/qARqFHLzlC1AdX4nAA0s0SyRZ8Q32vyqU3VHQC27MpTYub9YJVSCib1Q10AU5YIH4JpK88ID8DX4Nn6AWUiBeX2rwYA7ef4vRvlkTXnHFhN+DYIADS0og0gJvudg8ReaZDUDkBFs38D2TTQNzajIWVY8X4r2XsAmz3PLzLKK2tGba3XkDK6gNX6YAgAp8JVU1MivIsuQhKAWtnagYb2Ql0n4npAeZWinxEHgPgt+V7Om1Pgv88oedUpDwingatoUHIbgJeCY+Q1OBWORm4C2EjvwsOEHR53Nnj/VHQEyacF3a5WZlJwHep09VO5c1v2qaERpDaIYB94r6Cibtd7wb8PbN5/Rr8/77IObLueSbiVnEtf5cIr2WY3MA5O7PNrbXd+58unVf559XDdKd+gjchBNmYVty8eV0ZV9gaoCWhWsKiH6j/NPeohS8oR6gAAAABJRU5ErkJggg==",
    // //   symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABHCAYAAACXgB6bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzZDQjQ5QzQ4Njg5MTFFOTg1Q0VBNkE1QzhCOTY3RjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDU1Mzk2MkE4NjhBMTFFOTg1Q0VBNkE1QzhCOTY3RjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNkNCNDlDMjg2ODkxMUU5ODVDRUE2QTVDOEI5NjdGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNkNCNDlDMzg2ODkxMUU5ODVDRUE2QTVDOEI5NjdGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr5aktUAAAtUSURBVHja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',
    // //   symbolSize: function (val) {
    // //     var a = (maxSize4Pin - minSize4Pin) / (max - min);
    // //     var b = minSize4Pin - a * min;
    // //     b = maxSize4Pin - a * max;
    // //     return a * val[2] + b;
    // //   },
    //   symbolSize: [30, 45],
    //   symbolOffset: [0, -18],
    //   label: {
    //     show: false,
    //     normal: {
    //       show: true,
    //       textStyle: {
    //         color: "#f00",
    //         fontSize: 9,
    //       },
    //     },
    //   },
    //   itemStyle: {
    //     normal: {
    //       color: "#F62157", //标志颜色
    //     },
    //   },
    //   zlevel: 6,
    //   data: convertData(mapData),
    // },
    // {
    //   // 攻击点样式
    //   type: "scatter3D",
    //   coordinateSystem: "geo3D",
    //   zlevel: 2,
    //   // 包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    //   // symbol: "pin",
    //   symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABHCAYAAACXgB6bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzZDQjQ5QzQ4Njg5MTFFOTg1Q0VBNkE1QzhCOTY3RjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDU1Mzk2MkE4NjhBMTFFOTg1Q0VBNkE1QzhCOTY3RjUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNkNCNDlDMjg2ODkxMUU5ODVDRUE2QTVDOEI5NjdGNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNkNCNDlDMzg2ODkxMUU5ODVDRUE2QTVDOEI5NjdGNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr5aktUAAAtUSURBVHja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',
    //   symbolSize: [30, 45],
    //   symbolOffset: [0, -18],
    //   itemStyle: {
    //     normal: {
    //       show: true,
    //       color: "#54E1FF",
    //     },
    //   },
    //   data: convertData( mapData),
    //   // data: [
    //   //   {
    //   //     name: item[0],
    //   //     value: geoCoordMap[item[0]],
    //   //   },
    //   // ],
    // },
    // {
    //     type: 'bar',
    //     coordinateSystem: 'geo3D',
    //     shading: 'lambert',
    //     data: convertData( mapData),
    //     barSize: 100,
    //     minHeight: 200,
    //     silent: true,
    //     itemStyle: {
    //         color: 'orange'
    //         // opacity: 0.8
    //     }
    // },
    //   {
    //     name: "credit_pm2.5",
    //     type: "scatter3D",
    //     coordinateSystem: "geo3D",
    //     data: convertData( mapData),
    //     symbolSize: function (val) {
    //       return val[2] / 30;
    //     },
    //     label: {
    //       show: false,
    //       normal: {
    //         formatter: "{b}",
    //         position: "right",
    //         show: false,
    //       },
    //       emphasis: {
    //         show: false,
    //       },
    //     },
    //     itemStyle: {
    //       normal: {
    //         color: "#05C3F9",
    //       },
    //     },
    //   },
    //   {
    //     type: "map3D",
    //     map: "jiangxi",
    //     geoIndex: 0,
    //     aspectScale: 0.75, //长宽比
    //     showLegendSymbol: false, // 存在legend时显示
    //     label: {
    //       normal: {
    //         show: false,
    //       },
    //       emphasis: {
    //         show: false,
    //         textStyle: {
    //           color: "#fff",
    //         },
    //       },
    //     },
    //     roam: true,
    //     itemStyle: {
    //       normal: {
    //         areaColor: "#031525",
    //         borderColor: "#3B5077",
    //       },
    //       emphasis: {
    //         areaColor: "#2B91B7",
    //       },
    //     },
    //     animation: false,
    //     data: mapData,
    //   },
    // {
    //   name: "Top 5",
    //   type: "effectScatter3D",
    //   coordinateSystem: "geo3D",
    //   data: convertData(
    //     mapData
    //       .sort(function (a, b) {
    //         return b.value - a.value;
    //       })
    //       .slice(0, 5)
    //   ),
    //   symbolSize: function (val) {
    //     return val[2] / 10;
    //   },
    //   showEffectOn: "render",
    //   rippleEffect: {
    //     brushType: "stroke",
    //   },
    //   hoverAnimation: true,
    //   label: {
    //     show: false,
    //     normal: {
    //       formatter: "{b}",
    //       position: "right",
    //       show: true,
    //     },
    //   },
    //   itemStyle: {
    //     normal: {
    //       color: "#05C3F9",
    //       shadowBlur: 10,
    //       shadowColor: "#05C3F9",
    //     },
    //   },
    //   zlevel: 1,
    // },
  ],
};

renderMap(maps["江西省"]);

// setTimeout(() => {
//   // activeMap = maps['合肥市'];
//   renderMap(maps["合肥市"]);
// }, 5000);

// setTimeout(() => {
//   // activeMap = maps['广州市'];
//   renderMap(maps["广州市"]);
// }, 10000);

// ECharts 支持常规的鼠标事件类型，包括 'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup'、'mouseover'、'mouseout'、'globalout'、'contextmenu' 事件。
myChart.on("click", function (map) {
  renderMap(maps[map.name]);
});
