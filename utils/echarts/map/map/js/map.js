$(function () {
  var myChart = echarts.init($("#map")[0]);

  $(window).on("resize", function () {
    myChart.resize();
  });

  var gdMap = "./geoJson/guangdong.json";

  // $.getJSON('/data/geo.json',function(geoJson){
  $.getJSON(gdMap, function (geoJson) {
    // $.getJSON('file:///F:/AWEBASSETS/1.%E5%A4%A7%E5%B1%8F%E8%B5%84%E6%BA%90/%E5%9C%B0%E5%9B%BE_files/geo.json',function(geoJson){
    var cities = geoJson.features.map((e) => e.properties.name);
    // var emptyLabelMap = {
    //   '厚度':'',
    //   '阴影':''
    // };
    var colorMap = {
      textColor: "#374E71",
      厚度: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
          offset: 0,
          color: "#005c76",
        },
        {
          offset: 1,
          color: "#007e8d",
          // color: "#01b4b3"
        },
      ]),
      阴影: "rgba(0,66,8,0.2)",
      _default: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#FFFFFF", // 100% 处的颜色
          },
          {
            offset: 1,
            color: "#80C3C8", // 0% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      // areaColor: 'linear-gradient(0deg, #FFCD85, #FF954F)',
      // linear-gradient(0deg, #92CDD1, #FFFFFF)
      // linear-gradient(0deg, #fff2b2, #FFFFFF)
      _default_hover: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#FFFFFF' // 0% 处的颜色
        }, {
            offset: 1, color: '#FFF2B2' // 100% 处的颜色
        }],
        // colorStops: [
        //   {
        //     offset: 0,
        //     color: "rgba(0,66,8,0.2)",
        //   },
        //   {
        //     offset: 1,
        //     color: "rgba(0,66,8,0.2)",
        //   },
        // ],
        global: false, // 缺省为 false
      },
      _selected: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0, color: '#FFCD85' // 0% 处的颜色
        }, {
            offset: 1, color: '#FF954F' // 100% 处的颜色
        }],
      },
      border: "#005C77",
      borderSelected: "#f06000",
    };

    var option;

    echarts.registerMap("gdMap", geoJson);

    myChart.setOption(
      (option = {
        title: {
          // text: "ADaaS 地图",
          text: "",
          textStyle: {
            color: "white",
          },
        },
        tooltip: {
          trigger: "item",
          // position: function (point, params, dom, rect, size) {
          //   // 固定在顶部
          //   return [point[0,0], '10%', '', '', [50,200]];
          // },
          // borderColor: "#005C77",
          borderColor: "#01b4b3",
          textStyle: {
            color: "#005C77",
          },
          // color: "#007e8d",
          // color: "#01b4b3"
          // backgroundColor: "rgba(50,50,50,0.7)",
          // formatter: function (item) {
          //   if (item.name in emptyLabelMap || !item.name) {
          //     return "";
          //   } else {
          //     return `<div class="echarts-tooltip">${item.name}</br>网点数：${item.value}</div>`;
          //   }
          // },
          formatter: '{b0}<br />网点数: {c0}'
        },
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //         dataView: {readOnly: false},
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        // dataRange: {
        //   x: "-1000 px", //图例横轴位置
        //   y: "-1000 px", //图例纵轴位置
        //   splitList: cities.map((c, i) => {
        //     return {
        //       start: i + 1,
        //       end: i + 1,
        //       label: c,
        //       color: colorMap[c] || colorMap._default,
        //     };
        //   }),
        // },
        geo: [
          {
            map: "gdMap",
            roam: false, //是否允许缩放
            zoom: 1.005, //默认显示级别
            left:50,
            right:50,
            top:50,
            bottom:50,
            // scaleLimit: {
            //     min: 0,
            //     max: 3
            // }, //缩放级别
            itemStyle: {
              normal: {
                areaColor: "rgba(0, 92, 118, 0.6)",
                shadowColor: "rgba(0, 92, 118, 0.6)",
                shadowBlur: 0,
                shadowOffsetX: 30,
                shadowOffsetY: 35,
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            map: "gdMap",
            roam: false, //是否允许缩放
            zoom: 1.005, //默认显示级别
            left:50,
            right:50,
            top:50,
            bottom:50,
            // scaleLimit: {
            //     min: 0,
            //     max: 3
            // }, //缩放级别
            itemStyle: {
              normal: {
                areaColor: "rgba(0, 92, 118, 0.9)",
                shadowColor: "rgba(0, 92, 118, 0.9)",
                shadowBlur: 0,
                shadowOffsetX: 18,
                shadowOffsetY: 22,
              },
            },
            tooltip: {
              show: false,
            },
          },
        ],
        series: [
          {
            type: "map",
            mapType: "gdMap",
            left:50,
            right:50,
            top:50,
            bottom:50,
            label: {
              normal: {
                show: true, //显示省份标签
                textStyle: {
                  color: colorMap.textColor,
                }, //省份标签字体颜色
              },
              emphasis: {
                //对应的鼠标悬浮效果
                show: true,
                textStyle: {
                  color: colorMap.textColor,
                },
              },
            },
            // aspectScale: 0.75,
            // zoom: 1.2,
            itemStyle: {
              normal: {
                borderWidth: 0.3, //区域边框宽度
                borderColor: colorMap.border, //区域边框颜色
                areaColor: colorMap._default, //区域颜色
                // shadowColor: "#f00",
                // shadowBlur: 5,
                // shadowOffsetX: 5,
                // shadowOffsetY: 10,
              },
              emphasis: {
                borderWidth: 0.3,
                borderColor: colorMap.border, //区域边框颜色
                areaColor: colorMap._default_hover, //区域颜色
              },
            },
            select: {
              itemStyle: {
                // areaColor: '#fff',
                areaColor: colorMap._selected,
                borderColor: colorMap.borderSelected,
                borderWidth: 0.5
              },
            },
            data: cities.map((c, i) => {
              return {
                value: i + 1,
                selected: false,
                name: c,
              };
            }),
            // nameMap: (function(){
            //     let ret={
            //         ...emptyLabelMap
            //     };

            //     cities.map(c=>{
            //         if(!(c in emptyLabelMap)){
            //             ret[c]=c;
            //         }else {

            //         }
            //     })

            //     return ret;
            // }())
          },
        ],
      })
    );

    myChart.on("click", function(map) {
      // renderMap(maps[map.name]);
      console.log('map: ', map)
      alert(map.name)
    });

    window.echartsOpt = option;

    console.log(option);
  });
});
