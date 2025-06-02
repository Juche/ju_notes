/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/

var uploadedDataURL = "/asset/get/s/data-1509940365453-SkScnUTCW.json";
myChart.showLoading();
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap("jiangxi", geoJson);
  myChart.hideLoading();
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
  var data = [
    {
      name: "赣州市",
      value: 199,
    },
    {
      name: "吉安市",
      value: 39,
    },
    {
      name: "上饶市",
      value: 152,
    },
    {
      name: "九江市",
      value: 299,
    },
    {
      name: "抚州市",
      value: 89,
    },
    {
      name: "宜春市",
      value: 52,
    },
    {
      name: "南昌市",
      value: 9,
    },
    {
      name: "景德镇市",
      value: 352,
    },
    {
      name: "萍乡市",
      value: 99,
    },
    {
      name: "鹰潭市",
      value: 39,
    },
    {
      name: "新余市",
      value: 480,
    },
  ];
  var max = 480,
    min = 9; // todo
  var maxSize4Pin = 100,
    minSize4Pin = 20;

  var convertData = function (data) {
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

  option = {
    title: {
      text: "“绿色金融” - 江西省",
      subtext: "",
      x: "center",
      textStyle: {
        color: "#ccc",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        if (typeof params.value[2] == "undefined") {
          return params.name + " : " + params.value;
        } else {
          return params.name + " : " + params.value[2];
        }
      },
    },
    legend: {
      orient: "vertical",
      y: "bottom",
      x: "right",
      data: ["credit_pm2.5"],
      textStyle: {
        color: "#fff",
      },
    },
    visualMap: {
      show: false,
      min: 0,
      max: 500,
      left: "left",
      top: "bottom",
      text: ["高", "低"], // 文本，默认为数值文本
      calculable: true,
      seriesIndex: [1],
      inRange: {
        // color: ['#3B5077', '#031525'] // 蓝黑
        // color: ['#ffc0cb', '#800080'] // 红紫
        // color: ['#3C3B3F', '#605C3C'] // 黑绿
        color: ["#0f0c29", "#302b63", "#24243e"], // 黑紫黑
        // color: ['#23074d', '#cc5333'] // 紫红
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#1488CC', '#2B32B2'] // 浅蓝
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
        // color: ['#00467F', '#A5CC82'] // 蓝绿
      },
    },
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //             dataView: {readOnly: false},
    //             restore: {},
    //             saveAsImage: {}
    //             }
    // },
    // geo: {
    //     show: true,
    //     map: 'jiangxi',
    //     label: {
    //         normal: {
    //             show: false
    //         },
    //         emphasis: {
    //             show: false,
    //         }
    //     },
    //     roam: true,
    //     itemStyle: {
    //         normal: {
    //             areaColor: '#031525',
    //             borderColor: '#3B5077',
    //         },
    //         emphasis: {
    //             areaColor: '#2B91B7',
    //         }
    //     }
    // },
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
      data: data,
    },
    series: [
      {
        name: "credit_pm2.5",
        type: "scatter3D",
        coordinateSystem: "geo3D",
        data: convertData(data),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        label: {
          show: false,
          normal: {
            formatter: "{b}",
            position: "right",
            show: true,
          },
          emphasis: {
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#05C3F9",
          },
        },
      },
      {
        type: "map3D",
        map: "jiangxi",
        geoIndex: 0,
        aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
            textStyle: {
              color: "#fff",
            },
          },
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: "#031525",
            borderColor: "#3B5077",
          },
          emphasis: {
            areaColor: "#2B91B7",
          },
        },
        animation: false,
        data: data,
      },
      {
        name: "点",
        type: "scatter3D",
        coordinateSystem: "geo3D",
        symbol: "pin",
        symbolSize: function (val) {
          var a = (maxSize4Pin - minSize4Pin) / (max - min);
          var b = minSize4Pin - a * min;
          b = maxSize4Pin - a * max;
          return a * val[2] + b;
        },
        label: {
          show: false,
          normal: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 9,
            },
          },
        },
        itemStyle: {
          normal: {
            color: "#F62157", //标志颜色
          },
        },
        zlevel: 6,
        data: convertData(data),
      },
      {
        name: "Top 5",
        type: "effectScatter",
        coordinateSystem: "geo3D",
        data: convertData(
          data
            .sort(function (a, b) {
              return b.value - a.value;
            })
            .slice(0, 5)
        ),
        symbolSize: function (val) {
          return val[2] / 10;
        },
        showEffectOn: "render",
        rippleEffect: {
          brushType: "stroke",
        },
        hoverAnimation: true,
        label: {
          show: false,
          normal: {
            formatter: "{b}",
            position: "right",
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color: "#05C3F9",
            shadowBlur: 10,
            shadowColor: "#05C3F9",
          },
        },
        zlevel: 1,
      },
    ],
  };
  myChart.setOption(option);
});
