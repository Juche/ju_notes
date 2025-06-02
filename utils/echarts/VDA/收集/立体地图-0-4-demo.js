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

var jiangxi = 'https://geo.datav.aliyun.com/areas_v2/bound/360000_full.json'
var hefei = "https://geo.datav.aliyun.com/areas_v2/bound/340100_full.json";
var guangzhou = 'https://geo.datav.aliyun.com/areas_v2/bound/440100_full.json'
// var guangzhou = "/asset/get/s/data-1576821068997-HGlupX6J.json";
// var jiangxi = "/asset/get/s/data-1566876250425-5KOygeD3A.json";

// // var jiangxisheng = 'https://geo.datav.aliyun.com/areas_v2/bound/360000_full.json'
// // var jiangxisheng = 'https://geo.datav.aliyun.com/areas_v2/bound/340100_full.json'
// var jiangxisheng = 'https://geo.datav.aliyun.com/areas_v2/bound/440100_full.json'

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
    distance: 150.10,
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
      map: "",
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

const renderMap = (activeMap) => {
  mapOption.series[0].map = activeMap.name;
  mapOption.series[0].viewControl.distance = activeMap.distance;
  $.get(activeMap.map, function (geoJson) {
    echarts.registerMap(activeMap.name, geoJson);
    myChart.setOption(mapOption, true);
  });
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
