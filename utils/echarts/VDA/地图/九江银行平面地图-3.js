// var uploadedDataURL = "/asset/get/s/data-1592366734603-Z-iQwIHJk.json";

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
// var guangzhou = 'https://geo.datav.aliyun.com/areas_v2/bound/440100_full.json'
var hefei = "https://geo.datav.aliyun.com/areas_v2/bound/340100_full.json";
var guangzhou = "/asset/get/s/data-1576821068997-HGlupX6J.json";
var jiangxi = "/asset/get/s/data-1566876250425-5KOygeD3A.json";

// var center = {
//   南京市: [118.767413, 32.041544],
//   无锡市: [120.301663, 31.574729],
//   徐州市: [117.184811, 34.261792],
//   常州市: [119.946973, 31.772752],
//   苏州市: [120.619585, 31.299379],
//   南通市: [120.864608, 32.016212],
//   连云港市: [119.178821, 34.600018],
//   淮安市: [119.021265, 33.597506],
//   盐城市: [120.139998, 33.377631],
//   扬州市: [119.421003, 32.393159],
//   镇江市: [119.452753, 32.204402],
//   泰州市: [119.915176, 32.484882],
//   宿迁市: [118.275162, 33.963008],
// };

let ctx = {
  chart: null,
  activeMap: {
    map: jiangxi,
    name: "江西省",
  },
  mapTabs: ["江西全辖", "合肥", "广州"],
  activeMapTabIdx: 0,
  mapBorderWidth: 2,
  mapInfoClass: "",
  maps: {
    江西省: {
      map: jiangxi,
      key: "jiangxi",
      name: "江西省",
    },
    合肥市: {
      map: hefei,
      key: "hefei",
      name: "合肥市",
    },
    广州市: {
      map: guangzhou,
      key: "guangzhou",
      name: "广州市",
    },
    九江市: {
      map: jiujiang,
      key: "jiujiang",
      name: "九江市",
    },
    景德镇市: {
      map: jingdezhen,
      key: "jingdezhen",
      name: "景德镇市",
    },
    上饶市: {
      map: shangrao,
      key: "shangrao",
      name: "上饶市",
    },
    宜春市: {
      map: yichun,
      key: "yichun",
      name: "宜春市",
    },
    南昌市: {
      map: nanchang,
      key: "nanchang",
      name: "南昌市",
    },
    鹰潭市: {
      map: yingtan,
      key: "yingtan",
      name: "鹰潭市",
    },
    萍乡市: {
      map: pingxiang,
      key: "pingxiang",
      name: "萍乡市",
    },
    新余市: {
      map: xinyu,
      key: "xinyu",
      name: "新余市",
    },
    抚州市: {
      map: fuzhou,
      key: "fuzhou",
      name: "抚州市",
    },
    吉安市: {
      map: jian,
      key: "jian",
      name: "吉安市",
    },
    赣州市: {
      map: ganzhou,
      key: "ganzhou",
      name: "赣州市",
    },
  },
  mapData: [
    {
      name: "九江市",
      key: "jiujiang",
      value: "598",
    },
    {
      name: "景德镇市",
      key: "jingdezhen",
      value: "2223",
    },
    {
      name: "上饶市",
      key: "shangrao",
      value: "637",
    },
    {
      name: "宜春市",
      key: "yichun",
      value: "885",
    },
    {
      name: "南昌市",
      key: "nanchang",
      value: "768",
    },
    {
      name: "鹰潭市",
      key: "yingtan",
      value: "1233",
    },
    {
      name: "萍乡市",
      key: "pingxiang",
      value: "1633",
    },
    {
      name: "新余市",
      key: "xinyu",
      value: "1768",
    },
    {
      name: "抚州市",
      key: "fuzhou",
      value: "1233",
    },
    {
      name: "吉安市",
      key: "jian",
      value: "3633",
    },
    {
      name: "赣州市",
      key: "ganzhou",
      value: "3888",
    },
    {
      name: "江西省",
      value: "5633",
    },
  ],
  activeMapData: [
    {
      name: "九江市",
      value: "598",
    },
    {
      name: "景德镇市",
      value: "2223",
    },
    {
      name: "上饶市",
      value: "637",
    },
    {
      name: "宜春市",
      value: "885",
    },
    {
      name: "南昌市",
      value: "768",
    },
    {
      name: "鹰潭市",
      value: "1233",
    },
    {
      name: "萍乡市",
      value: "1633",
    },
    {
      name: "新余市",
      value: "1768",
    },
    {
      name: "抚州市",
      value: "1233",
    },
    {
      name: "吉安市",
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
  ],
  jiangxiMapData: [
    {
      name: "九江市",
      value: "1233",
    },
    {
      name: "景德镇市",
      value: "1633",
    },
    {
      name: "上饶市",
      value: "637",
    },
    {
      name: "宜春市",
      value: "598",
    },
    {
      name: "南昌市",
      value: "768",
    },
    {
      name: "鹰潭市",
      value: "3633",
    },
    {
      name: "萍乡市",
      value: "885",
    },
    {
      name: "新余市",
      value: "2223",
    },
    {
      name: "抚州市",
      value: "1233",
    },
    {
      name: "吉安市",
      value: "1768",
    },
    {
      name: "赣州市",
      value: "3888",
    },
    {
      name: "江西省",
      value: "5633",
    },
  ],
  ganzhouMapData: [
    {
      name: "上犹县",
      value: "6000",
    },
    {
      name: "大臾县",
      value: "7000",
    },
    {
      name: "信丰县",
      value: "8000",
    },
  ],
  geoCoordMap: {
    九江市: [115.992811, 29.712034],
    景德镇市: [117.214664, 29.29256],
    上饶市: [117.971185, 28.44442],
    宜春市: [114.391136, 27.8043],
    南昌市: [115.892151, 28.676493],
    鹰潭市: [117.033838, 28.238638],
    萍乡市: [113.852186, 27.622946],
    新余市: [114.930835, 27.810834],
    抚州市: [116.358351, 27.98385],
    吉安市: [114.986373, 27.111699],
    赣州市: [114.940278, 25.85097],
    上犹县: [114.54345703125, 25.780107118422244],
    大臾县: [114.345703125, 25.393660521998022],
    信丰县: [114.90600585937499, 25.393660521998022],
    // 赣州市: [114.9334716796875, 25.859223554761407],
    // 吉安市: [114.9005126953125, 27.044449217654016],
    // 上饶市: [117.90802001953125, 28.44937385955666],
    // 九江市: [115.9881591796875, 29.726222319395504],
    // 抚州市: [116.3507080078125, 27.994401411046148],
    // 宜春市: [114.3731689453125, 27.79535068974912],
    // 南昌市: [115.8837890625, 28.671310915880834],
    // 景德镇市: [117.20214843749999, 29.28160772298835],
    // 萍乡市: [113.84582519531249, 27.6251403350933],
    // 鹰潭市: [117.02636718749999, 28.241488817301672],
    // 新余市: [114.9334716796875, 27.805068967813085],
  },
  iconImgs: {
    icon1:
      "image://data:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAD20lEQVRIS6WVT4gbVRzHv++9mcxkJrvJZNdqF/ZPE9FCXNtde7BKV7AFDwVBj4qIoIJIr0IRoZ6sZz2JKIiX6sGLeAiiBWHrn3Zr2bCs6GZtZbVq83eTSebPe0/eJNndZFNJdYZ3mPfefOY7v9/3O0Mw5DgrNx+TEE8NWxucI2AX3iJzl/bPD8y8Jn95ngLvASQ2ChhAC5AvnCf3Xti7n+y9OCs33hTAGwTomx/hAUICr79Nsud7eyPAOVmItRH/AMCzI0D+ZYt830T2lXOEhOSM/NmwQfMAlv4fdOfuvInM6UjxqdJ3ctGZACV3WoF+KUJK/FC+ha8nH+6QMte/lHPWGBbTaWiU/ifhgRC4Ui7hhttAcfbULjjBYjhoWMg5ScTYncE9LlCoVHHTc9HkwX5wUjMwqZu4LzUGQuVIyiUHfqo1UPJbqHEfDe4PAbMYHM1Ezk7DZAwm1WBQBp3QTv0lwCERSoG2COEJjjYPUWhWUA3bqHEPjR3F8rKeuVH1VSmSzICjm8hZDmymwyI6TMoQowyM0C5YwBMKHMAVIVzhd8C8jVrYVTxT1qLmHfo1/2qCme+kNIM4uoGclYZNdVhUgTXEKAUDjWLDpQJztAWHG8EDFJplVEIPNd4WzSB8sXjo5IcEX5wxUvXJfNyZWMrkFjBhJJCznS5Yg0n1XTBUKXpgpXZXcandQLGwglatmq/dLTo+nvr+Y+lubsK0Eji6cBwL6anhihVYKZZKcQ8c4EppC9euLsNrubCzWWwde2bXbqy+jdL6GjRNx6MPLWEufRApzcQ4i0UlUeWQEgikgMt91LmPauihWNrC8so34IJj8nAO4Zi93xVG28P11avgYYBUIgVGCBhI5Ah1qkNCQiVMuYNLiep2FVrMwMz8AjxDQ4OHKM6e7A+IcoXFJTZWL+NWrTySjw+k7kJmfhFNCtW824A1Aw4zcb+RQMt1I6sZRINOKWhXsYCAim+nzhxx28a6V0c1UK5QPu4FpM/HscjHD1jpqK59dlM+7jUvslu3edxHoVVBNVABGfBx9revXraJ/m6S6XovecrH8Wjs8fEwVyiw20ue7zd5+NLG7OMf7Xwnj/y+/MQ4ZZ+kmDk+bzsRVME7AVHJ60W6lzylOIDLAxTcsop0ZTsMnv5x+sRF9WZ9H+ATf377oMPin+csZ7qTvCEBGfBxk/tYa1eLdRmcvjh5bL3v17S3/U/+vTJ1NHHgkk7YjD0I7kbaFxytbo0DGRZXa+Xjn91z5K/b/kx7C8/dvGY7ZupwUtehhgUdlq5Hy24QwEWAWtAZf2xvrX06/Uhr0Jv/ANxaE1TNrR/1AAAAAElFTkSuQmCC",
    icon2:
      "image://data:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAADfUlEQVRIS6WVTWhcVRiGn+/+zb0zd9I0jYmNTbvJQtNiF9GCLvqzamJX1qWgCFYQdedOXLhzJ1gXIqLiriKulKQBMbip1D+ktQqVotGYP5KYdCYz9+8cufdOJjOTTE3wwtmcc+5zXr7vfc8Rdvm0fvSMQj2521rnnIG6IvLjtc556ZyI9dizAu+BOHsBAzWNPGfJt1da97eBEz32BsjrwI4D732IVsBrpnz/5ta+DKD1qJPgfSDI03tU2WWbft+g/KLITCxajxQSeqcFTv8/aP63Rk+blC9kius3z2prtILsswCdQtKCxDfLuCe/ylGVyQltHtbYJ1YRMy3X/j8dG0Q3DpEsgj8xuQ2WgovRZ2I/NIc40b7IOnCIfhlCrSXooL4TLG4ROeBgj8wizvqe4Do4SHx7GFUJ0LXNDvDUhBbHJQUbRR/z0BBSDBHLBstGDBMMI2+N0pAkkEToOERvusQrc+jNCrreAtbfjdnV5YEwLYV4RcTzsfqOkh3kOGA5YFqImYKBRKGTGKIQHQXoMCBenW0Dl+76Vta8u1PnXxLHu2y4JZFiDsYpIOmwG+BMMehEQRKjoxA6wbWq0lHteX/86ody+20KYQ/Tnjd4euCBs5h+77biFOo4iGFBQ/EWOFWsogAaipPKKot/zVCrL08fP0bu4/nPjuvVjVvYhV4OjzyBOzjavRRKoeP2UtQXfmb+ty+Iwg36e04wePFGw25TE7qerLO0ch3DLHDs1CvY5fvyGtvdFac1DjeWmL1+Ga0SBvpPURAff2Kq3ceRhCz8PYNKQpxSP2RuEEQMmrHUGrRCKwVKEVaXMS2P+4fOYCm7i4+9EsqChT++JKjM78nHbs8RBofPYUQqt1tYxx/vSF5utzLGgUGiaB1JrWZZefOM/CLJlGY+jjMf204v6p95dK3SHpBuPsZxMRo+FvO/XdEakKaPq1fHXxCn+A5u0Rav1PDxNrg1IDvsFgTEa82AhDqsX/LHJz9uXpSVr586b9ruJ3h+TzN5DR9n4EZAtpK3S0DWJAgueuc+nUlL1nYDV7555mHTK35uHRweTiOdheMekW4GZO3PO0ZUv1B45KNf256m1vZXf3h5qDBw5BqWfbQJzhq4e6SJ4zu1ld8fK598d6nrY7q1sPDTq6W+Xu9BikWyYafDzpejCKJN2MzH4lzl1vDjb9U6vfkv8x/wLgHjo/8AAAAASUVORK5CYII=",
    icon3:
      "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAD1ElEQVRIS6WV22vkVBzHvycnlyYzk5npNN1dt1XLVtFWVrCFdX2oKIjIgqCwYJFFBBXEP0F88M13fRJR0Id13UfFh3maB3Vd3IKI6327S710bp1rJplJcs6RJDNtpjNKVwN5OTn55sv39/meEEy5xObZRwE8M+3Z5Bq5RC5+deXwOjm8EGw+/IIEvAsQ9WjCcLkQL8off30puX9MWGyeeVMI6Q0QTHzw3z8iOIF4nVy8+tZoXyQgzq+oXDbfJyDPH9Hl1G0C5D1pV32VlEoBEU8tayJnFQFs/B/R/XcFiqSsnYsc//n4KXF83gIht5nAISdCCOyWK1go3YyVrq9Zwpwt4EQhB+k/ijMusLvXQLfZxOpW7UBYTmVgmDkcS2uQb9N4IAjKdh9uu4nA6WJ1q54QNjJQMjnMZPOwpACUe0eKnEkaaozC7TQRdFsInE5CeN0SVM9ANXNQzQLMlAVFkUE1HZKqgcgKCKUgAuCcQQQemDcAH7jwfYa2XYPfqcOz2wh6XTwQRnFtDYoOy6NDx2q2gGz6GKiegqynIIXiihYJQwCCB+CeBz5wwFwHgWuj3avAazcix34URS1O8/t16zVZz7ytmjmimLFwKEpnhsKh6wlhF4Hbi4Q7dgVepwG/0+RsYL+0+k3tA/L5MrS+mitmVHXj7hMnoefmYI6EQ3FVB1E1SJRChI5ZAO7HjoO+A+bYaNtVuK0abpX/Qs/3i7nrzZjjLx+cFdVAYEZVce+p+2HlF2LHYRTqMGeJIix6JDyMIhhGUWv+jl9u/AzP9zCvSHjk270DKvqyhj96Dqgs48zpDaRyhSiKcICRY4mGEU847jVruPrdFxCMYSFtQPPdw7ilEWgp3KxVwTiHkcmCUBmSJAES3W9l2C7BGcAZOGNwui3IVMbSnAUaxhMPb5JjGBnc2LkFu9c5EsdmOoulxbsApwt/guM1SyRxS+sF9AWPBpfkOMYt5ph7A7CBixmJwnbr8NuNofDQ8YhjecixMuR4YnghbqOME8NjIccj3LotMKeLlRHHP67PvyLp6XeUTF5RsrMHHI9RIYNAgCcKcoBbBX7EcctjffvllWvVD/ePm18fW36SGtlPVHPWnMYxCXELHSeF3bB9Mcd+Z6/JnM6z95R+K4X7xs6x7acfOq2m5j4z0/OL481TIVE5LggPIDwPLFlpp7oddBvnlj7d+mns15Qc/85zT9yRzxy/QnXjzrGCTDkrwoJwt7ddGVTPLn9UrP7jz3T0oHzhQoqezN9nGFkgm4ViGFAUA/B9+NHtwG+34bfr6O/Uf1i8fNk9zObf2icfgW418y4AAAAASUVORK5CYII=",
  },
};

var max = 4000,
  min = 1000; // todo
var maxSize4Pin = 60,
  minSize4Pin = 20;

var option = null;
option = {
  backgroundColor: "#020933",
  // visualMap: {
  //   // show: false,
  //   min: 0,
  //   max: 3000,
  //   right: 50,
  //   bottom: 20,
  //   // splitNumber: 3,
  //   orient: "horizontal",
  //   // inRange: {
  //   //   color: [
  //   //       "#A0FFF1",
  //   //       "#FFEFA0",
  //   //       "#FF6060",
  //   //   ],
  //   // },
  //   type: "piecewise",
  //   textStyle: {
  //     color: "#FFFF",
  //   },
  //   splitList: [
  //     {
  //       lt: 1000,
  //       // color: "#A0FFF1",
  //       color: "#0ff",
  //       label: "1000人以内",
  //       // symbol: ctx.iconImgs.icon1,
  //     },
  //     {
  //       gte: 1000,
  //       lte: 3000,
  //       // color: "#FFEFA0 ",
  //       color: "#FF0",
  //       label: "1000-3000",
  //       // symbol: ctx.iconImgs.icon2,
  //     },
  //     {
  //       gte: 3000,
  //       // color: "#FF6060",
  //       color: "#F33",
  //       label: "大于3000",
  //       // symbol: ctx.iconImgs.icon3,
  //     },
  //   ],
  // },
  geo: [
    {
      map: "jiangxi",
      roam: false, //是否允许缩放
      zoom: 1.1, //默认显示级别
      // scaleLimit: {
      //     min: 0,
      //     max: 3
      // }, //缩放级别
      itemStyle: {
        normal: {
          areaColor: "#013C62",
          shadowColor: "#013C62",
          shadowBlur: 5,
          shadowOffsetX: 15,
          shadowOffsetY: 20,
        },
      },
      tooltip: {
        show: false,
      },
    },
  ],
  series: [
    //地图
    {
      type: "map",
      mapType: "jiangxi",
      geoIndex: -1,
      zoom: 1.1, //默认显示级别
      // label: {
      //   show: true,
      //   color: "#ffffff",
      //   emphasis: {
      //     color: "white",
      //     show: false,
      //   },
      // },
      // itemStyle: {
      //   normal: {
      //     borderColor: "#2980b9",
      //     borderWidth: 1,
      //     areaColor: "#12235c",
      //   },
      //   emphasis: {
      //     areaColor: "#FA8C16",
      //     borderWidth: 0,
      //     color: "green",
      //   },
      // },
      // 标签样式
      label: {
        show: true, //是否显示数据标签(geo模式才有效)
        distance: -200,
        textStyle: {
          color: "#F3FBFF", //文字颜色
          fontSize: 16, //文字大小
          fontWeight: "bold",
          backgroundColor: "rgba(0,0,0,0)", //透明度0清空文字背景
          // borderColor: '#4bb5ff',
          // borderWidth: 1,
          // { color , borderWidth , borderColor , fontFamily , fontSize , fontWeight }
        },
      },
      // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
      // roam: true,
      // 地图子项边缘配色
      itemStyle: {
        // color: "#81d0f1", //地图颜色
        color: "#0773FA", //地图颜色
        areaColor: "#12235c",
        borderWidth: 1,
        borderColor: "#4bb5ff",
        opacity: 1,
        emphasis: {
          areaColor: "#2AB8FF",
          borderWidth: 0,
          color: "green",
        },
      },
      data: ctx.mapData,
      // data: Object.keys(ctx.geoCoordMap).map((name) => {
      //   return {
      //     name: name,
      //     value: Math.random() * 100,
      //   };
      // }),
    },
    {
      type: "effectScatter",
      coordinateSystem: "geo",
      z: 5,
      // data: [],
      //   symbolSize: 14,
      rippleEffect: {
        brushType: "stroke",
      },
      showEffectOn: "render",
      itemStyle: {
        normal: {
          color: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "rgba(5,80,151,0.2)",
              },
              {
                offset: 0.8,
                color: "rgba(5,80,151,0.8)",
              },
              {
                offset: 1,
                color: "rgba(0,108,255,0.7)",
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
      label: {
        normal: {
          show: true,
          color: "#fff",
          fontWeight: "bold",
          position: "inside",
          formatter: function (para) {
            return "{cnNum|" + para.data.value[2] + "}";
          },
          rich: {
            cnNum: {
              fontSize: 13,
              color: "#D4EEFF",
            },
          },
        },
      },
      //   label: {
      //     normal: {
      //       show: true,
      //       formatter: function (params) {
      //         return (
      //           "{fline|地点：" +
      //           params.name +
      //           "}\n{tline|" +
      //           (params.value || "发生xx集件") +
      //           "}"
      //         );
      //       },
      //       position: "top",
      //       backgroundColor: "rgba(254,174,33,.8)",
      //       padding: [0, 0],
      //       borderRadius: 3,
      //       lineHeight: 32,
      //       color: "#f7fafb",
      //       rich: {
      //         fline: {
      //           padding: [0, 10, 10, 10],
      //           color: "#ffffff",
      //         },
      //         tline: {
      //           padding: [10, 10, 0, 10],
      //           color: "#ffffff",
      //         },
      //       },
      //     },
      //     emphasis: {
      //       show: true,
      //     },
      //   },
      symbol: "circle",
      symbolSize: function (val) {
        if (val[2] === 0) {
          return 0;
        }
        var a = (maxSize4Pin - minSize4Pin) / (max - min);
        var b = maxSize4Pin - a * max;
        return a * val[2] + b * 1.2;
      },
      data: convertData(ctx.mapData),
    //   zlevel: 1,
    },
  ],
};

function convertData(data) {
  var res = [];
  var color = [
    "rgba(0, 255, 255, 0.5)",
    "rgba(255, 255, 0, 0.5)",
    "rgba(255, 51, 51, 0.5)",
  ]
  for (var i = 0; i < data.length; i++) {
    var geoCoord = ctx.geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
        itemStyle: {
            color: color[i%3]
        }
      });
    }
  }
  return res;
}

$.get(jiangxi, function (json) {
  echarts.registerMap("jiangxi", json);
  myChart.setOption(option);
});

// const renderMap = (activeMap) => {
//   // mapOption.series[0].map = activeMap.name;
//   // mapOption.series[0].viewControl.distance = activeMap.distance;
//   mapOption.geo3D.map = activeMap.name;
//   mapOption.geo3D.viewControl.distance = activeMap.distance;
//   $.get(activeMap.map, function(geoJson) {
//       echarts.registerMap(activeMap.name, geoJson);
//       myChart.setOption(mapOption, true);
//   });
// };

// renderMap(maps["江西省"]);

// console.log(convertData(mapData))

// // ECharts 支持常规的鼠标事件类型，包括 'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup'、'mouseover'、'mouseout'、'globalout'、'contextmenu' 事件。
// myChart.on("click", function(map) {
//     renderMap(maps[map.name]);
// });

// function mapInfoSwitch(cityIndex) {
//   coordCity = Object.keys(ctx.geoCoordMap)[cityIndex];
//   coord = ctx.geoCoordMap[coordCity];
//   option.series[1].data = [
//     {
//       city: coordCity,
//       value: coord,
//     },
//   ];

//   myChart.setOption(option, true);

//   // 隐藏提示框
//   myChart.dispatchAction({
//     type: "hideTip",
//     seriesIndex: 0,
//     dataIndex: cityIndex,
//   });
//   // 显示提示框
//   myChart.dispatchAction({
//     type: "showTip",
//     seriesIndex: 0,
//     dataIndex: cityIndex,
//   });
//   // 取消高亮指定的数据图形
//   myChart.dispatchAction({
//     type: "downplay",
//     seriesIndex: 0,
//     dataIndex: cityIndex,
//   });
//   // 高亮指定的数据图形
//   myChart.dispatchAction({
//     type: "highlight",
//     seriesIndex: 0,
//     dataIndex: cityIndex,
//   });
// }

// var cityIndex = 0;
// // var runidx;
// var coordCity;
// var coord;

// var timer = setInterval(() => {
//   //数据情况重绘，清除formatter移动效果，也可根据自身需求是否需要，删除这两行代码
//   /*option.series[seriesjson[runidx].createType-1].data = [];
//     myChart.setOption(option, true);*/
//   //   for (var i = 0; i < 3; i++) {
//   //     option.series[i].data = [];
//   //   }
//   mapInfoSwitch(cityIndex);
//   cityIndex++;
//   if (cityIndex > 10) {
//     cityIndex = 0;
//   }
// }, 500);

// myChart.on("mousemove", function (e) {
//   clearInterval(timer);
//   mapInfoSwitch(e.dataIndex);
// });

// myChart.on("mouseout", function (e) {
//   clearInterval(timer);
//   cityIndex = e.dataIndex + 1;
//   timer = setInterval(function () {
//     mapInfoSwitch(cityIndex);
//     cityIndex++;
//     if (cityIndex > 10) {
//       cityIndex = 0;
//     }
//   }, 500);
// });
