// var jiangxisheng = "/asset/get/s/data-1566876250425-5KOygeD3A.json";

// var yichun = "/asset/get/s/data-1566876354738-Eh1cufe1l.json";
// var xinyu = "/asset/get/s/data-1566876332728-O-Fvqqw9V.json";
// var shangrao = "/asset/get/s/data-1566876321731-VO8N4vczw.json";
// var pingxiang = "/asset/get/s/data-1566876306157-1Gke-s6tB.json";
// var nanchang = "/asset/get/s/data-1566876294654-OrNytYJbe.json";
// var jiujiang = "/asset/get/s/data-1566876280019-6g2VfsAJT.json";
// var jingdezhen = "/asset/get/s/data-1566876264856-X1WYaSWXr.json";
// var jian = "/asset/get/s/data-1566876224608-KmCb1FAjB.json";
// var fuzhou = "/asset/get/s/data-1566876207678-2ifDcX1eM.json";
// var yingtan = "/asset/get/s/data-1566876159089-Xlb0p3RrU.json";
var ganzhou = "/asset/get/s/data-1566877015283-F6DHB71Uj.json";

// var jiangxi = 'https://geo.datav.aliyun.com/areas_v2/bound/360000_full.json'
var hefei = "https://geo.datav.aliyun.com/areas_v2/bound/340100_full.json";
// var guangzhou = 'https://geo.datav.aliyun.com/areas_v2/bound/440100_full.json'
var guangzhou = "/asset/get/s/data-1576821068997-HGlupX6J.json";
var jiangxi = "/asset/get/s/data-1566876250425-5KOygeD3A.json";

// // var jiangxisheng = 'https://geo.datav.aliyun.com/areas_v2/bound/360000_full.json'
// // var jiangxisheng = 'https://geo.datav.aliyun.com/areas_v2/bound/340100_full.json'
// var jiangxisheng = 'https://geo.datav.aliyun.com/areas_v2/bound/440100_full.json'

var activeMap = jiangxi;
var mapName = "江西省";
// var activeMap = guangzhou;
// var mapName = "广州市";

// var regionData = [
//   {
//     name: "jiangxisheng",
//     value: "5633",
//   },
//   {
//     name: "yichun",
//     value: "598",
//   },
//   {
//     name: "xinyu",
//     value: "2223",
//   },
//   {
//     name: "shangrao",
//     value: "637",
//   },
//   {
//     name: "pingxiang",
//     value: "885",
//   },
//   {
//     name: "nanchang",
//     value: "768",
//   },
//   {
//     name: "jiujiang",
//     value: "1233",
//   },
//   {
//     name: "jingdezhen",
//     value: "1633",
//   },
//   {
//     name: "jian",
//     value: "1768",
//   },
//   {
//     name: "fuzhou",
//     value: "1233",
//   },
//   {
//     name: "yingtan",
//     value: "3633",
//   },
//   {
//     name: "ganzhou",
//     value: "3888",
//   },
// ];

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

// var seriesdata = ;

var mapOption = {
  visualMap: {
    show: false,
    min: 0,
    max: 6000,
    inRange: {
      color: [
        "#313695",
        "#4575b4",
        "#74add1",
        "#abd9e9",
        "#e0f3f8",
        "#ffffbf",
        "#fee090",
        "#fdae61",
        "#f46d43",
        "#d73027",
        "#a50026",
      ],
    },
  },
  series: [
    // 左边地图
    {
      type: "map3D",
      // map: "world",
      map: mapName,
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
        // show: true,//是否显示市
        textStyle: {
          color: "#fff", //文字颜色
          fontSize: 20, //文字大小
          backgroundColor: "rgba(0,0,0,1)", //透明度0清空文字背景
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
      emphasis: {
        label: {
          show: true, //是否显示高亮
          textStyle: {
            color: "#f00", //高亮文字颜色
          },
        },
        itemStyle: {
          color: "#000", //地图高亮颜色
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
        // detailTexture: "/asset/get/s/data-1497261115431-B1XrEJ2f-.jpg",
      },
      // 可以通过 postEffect 下的 colorCorrection 配置项去手动的调整颜色。
      // colorCorrection 下有常见的曝光 exposure、亮度 brightness、对比度 contrast 和饱和度 saturation 选项
      postEffect: {
        enable: true,
        // colorCorrection: {
        //   lookupTexture: "/asset/get/s/data-1497261115431-B1XrEJ2f-.jpg",
        // },
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
        show: true,
      },
      //   data: regionData,
      data: mapData,
    },
  ],
};

$.get(activeMap, function (geoJson) {
  echarts.registerMap(mapName, geoJson);
  myChart.setOption(mapOption, true);
});

setTimeout(() => {
  activeMap = guangzhou;
  mapName = "广州市";
  mapOption.series[0].map = "广州市";
  mapOption.series[0].viewControl.distance = 150.1;
  //   activeMap = jiangxi;
  //   mapName = "江西省";
  //   mapOption.series[0].map = "江西省";
  $.get(activeMap, function (geoJson) {
    echarts.registerMap(mapName, geoJson);
    myChart.setOption(mapOption, true);
    // mapOption.series[0].viewControl.distance = 200;
    // myChart.resize();
  });
  //   mapOption.series[0].viewControl.distance = 150;
}, 5000);

setTimeout(() => {
  //   activeMap = hefei;
  //   mapName = "合肥市";
  //   mapOption.series[0].map = "合肥市";
  activeMap = ganzhou;
  mapName = "赣州市";
  mapOption.series[0].map = "赣州市";

  mapOption.series[0].viewControl.distance = 150.2;
  $.get(activeMap, function (geoJson) {
    echarts.registerMap(mapName, geoJson);
    myChart.setOption(mapOption, true);
  });
}, 10000);

const clickCity = (param) => {
  switch (param.name) {
    case "江西省":
      mapName = "江西省";
      mapOption.series[0].map = "江西省";
      city = jiangxisheng;
      break;
    case "宜春市":
      mapName = "宜春市";
      mapOption.series[0].map = "宜春市";
      city = yichun;
      break;
    case "南昌市":
      mapName = "南昌市";
      mapOption.series[0].map = "南昌市";
      city = nanchang;
      break;
    case "新余市":
      mapName = "新余市";
      mapOption.series[0].map = "新余市";
      city = xinyu;
      break;
    case "上饶市":
      mapName = "上饶市";
      mapOption.series[0].map = "上饶市";
      city = shangrao;
      break;
    case "萍乡市":
      mapName = "萍乡市";
      mapOption.series[0].map = "萍乡市";
      city = pingxiang;
      break;
    case "九江市":
      mapName = "九江市";
      mapOption.series[0].map = "九江市";
      city = jiujiang;
      break;
    case "景德镇市":
      mapName = "景德镇市";
      mapOption.series[0].map = "景德镇市";
      city = jingdezhen;
      break;
    case "吉安市":
      mapName = "吉安市";
      mapOption.series[0].map = "吉安市";
      city = jian;
      break;
    case "抚州市":
      mapName = "抚州市";
      mapOption.series[0].map = "抚州市";
      city = fuzhou;
      break;
    case "鹰潭市":
      mapName = "鹰潭市";
      mapOption.series[0].map = "鹰潭市";
      city = yingtan;
      break;
    case "赣州市":
      mapName = "赣州市";
      mapOption.series[0].map = "赣州市";
      city = ganzhou;
      break;
  }

  console.log("city: ", city);
  console.log("mapOption: ", mapOption);

  $.get(city, function (geoJson) {
    echarts.registerMap(mapName, geoJson);
    myChart.setOption(mapOption, true);
  });
};
// ECharts 支持常规的鼠标事件类型，包括 'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup'、'mouseover'、'mouseout'、'globalout'、'contextmenu' 事件。
myChart.on("click", clickCity);
