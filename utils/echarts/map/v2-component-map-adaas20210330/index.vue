<template>
  <div
    :style="model.commonStyle"
    class="v2-component-map-adaas"
    :class="widgetClass"
  >
    <el-select
      v-model="selectedArea"
      @change="areaChange"
      filterable
      placeholder="请选择省份"
    >
      <el-option
        v-for="item in areaOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div
      class="chart-content"
      style="height: 700px;width: 900px;"
      ref="_op_componentEchart_chart"
    ></div>
  </div>
</template>
<script>
import echarts from "echarts";
// import "echarts-gl";

import guangdong from "./geoJson/guangdong.json";
import jiangxi from "./geoJson/jiangxi.json";
import guangzhou from "./geoJson/guangzhou.json";

export default {
  name: "v2-component-map-adaas",
  data() {
    return {
      chart: null,
      selectedArea: "",
      areaOptions: [
        {
          value: "guangdong",
          label: "广东",
        },
        {
          value: "jiangxi",
          label: "江西",
        },
        {
          value: "guangzhou",
          label: "广州",
        },
        // {
        //   value: "hubei",
        //   label: "湖北",
        // },
        // {
        //   value: "hunan",
        //   label: "湖南",
        // },
        // {
        //   value: "hebei",
        //   label: "河北",
        // },
        // {
        //   value: "henan",
        //   label: "河南",
        // },
      ],
      areaJson: {
        guangdong: guangdong,
        jiangxi: jiangxi,
        guangzhou: guangzhou,
        // hubei: "hubei",
        // hunan: "hunan",
        // hebei: "hebei",
        // henan: "henan",
      },
      selectedJson: null,
    };
  },
  computed: {},
  methods: {
    areaChange() {
      this.selectedJson = this.areaJson[this.selectedArea];
      console.log("当前选中城市: ", this.selectedArea);
      console.log("当前选中JSON: ", this.selectedJson);

      this.renderMap(this.selectedJson);
    },
    renderMap(activeMap) {
      let ctx = this;

      // let activeMap = guangdong;

      var cities = activeMap.features.map((e) => e.properties.name);

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
          colorStops: [
            {
              offset: 0,
              color: "#FFFFFF", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#FFF2B2", // 100% 处的颜色
            },
          ],
          // ],
          global: false, // 缺省为 false
        },
        _selected: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#FFCD85", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#FF954F", // 100% 处的颜色
            },
          ],
        },
        border: "#005C77",
        borderSelected: "#f06000",
      };

      var option;

      echarts.registerMap("map", activeMap);

      ctx.chart.setOption(
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
            borderWidth: 1,
            textStyle: {
              color: "#005C77",
            },
            // color: "#007e8d",
            // color: "#01b4b3"
            backgroundColor: "#fff",
            // formatter: function (item) {
            //   if (item.name in emptyLabelMap || !item.name) {
            //     return "";
            //   } else {
            //     return `<div class="echarts-tooltip">${item.name}</br>网点数：${item.value}</div>`;
            //   }
            // },
            formatter: "{b0}<br />网点数: {c0}",
          },
          geo: [
            {
              map: "map",
              roam: false, //是否允许缩放
              zoom: 1.005, //默认显示级别
              // left: 50,
              // right: 50,
              // top: 50,
              // bottom: 50,
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
              map: "map",
              roam: false, //是否允许缩放
              zoom: 1.005, //默认显示级别
              // left: 50,
              // right: 50,
              // top: 50,
              // bottom: 50,
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
              mapType: "map",
              // left: 50,
              // right: 50,
              // top: 50,
              // bottom: 50,
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
                  borderWidth: 0.5,
                },
              },
              data: cities.map((c, i) => {
                return {
                  value: i + 1,
                  selected: false,
                  name: c,
                };
              }),
            },
          ],
        })
      );
    },
    initMap() {
      let ctx = this;
      this.chart = echarts.init(this.$refs._op_componentEchart_chart);
      this.selectedArea = this.areaOptions[0].value;
      this.selectedJson = this.areaJson[this.selectedArea];
      this.renderMap(this.selectedJson);

      this.chart.on("click", function(map) {
        console.log('选中省份: ', this.selectedArea)
        console.log("选中城市: ", map.name)
        // TODO: 请求对应地区数据给右侧面板展示
      });
    },
    // openBranchPage(branch) {
    //   console.log("打开支行页面： ", branch);
    //   // alert(branch)
    //   // window.open("");
    //   // jj-new/jj1_page1?source=IDE
    //   // window.location.href="/#/jj-new/jj2_page?source=IDE&branch=" + branch;
    //   window.open("/#/jj-new/jj2_page?source=IDE&branch=" + branch, "_self");
    //   // window.history.back(-1)
    // },
    // convertData(data) {
    //   var res = [];
    //   for (var i = 0; i < data.length; i++) {
    //     var geoCoord = this.geoCoordMap[data[i].name];
    //     if (geoCoord) {
    //       res.push({
    //         name: data[i].name,
    //         value: geoCoord.concat(data[i].value),
    //       });
    //     }
    //   }
    //   return res;
    // },
  },
  mounted() {
    let ctx = this;

    this.initMap();

    // ctx.chart = echarts.init(ctx.$refs._op_componentEchart_chart);
    // ctx.renderMap(ctx.maps["江西省"]);

    // // ECharts 支持常规的鼠标事件类型，包括 'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup'、'mouseover'、'mouseout'、'globalout'、'contextmenu' 事件。
    // ctx.chart.on("click", function(map) {
    //   console.log('ctx.chart.on("click")');
    //   console.log("map: ", map);
    //   ctx.mapInfoClass = "";
    //   if (map.name == "赣州市") {
    //     ctx.activeMapData = ctx.ganzhouMapData;
    //     console.log("ctx.model.mapData: ", ctx.model.mapData);
    //     console.log("ctx.mapData: ", ctx.mapData);
    //   }
    //   try {
    //     // 下钻地图的渲染
    //     ctx.renderMap(ctx.maps[map.name]);
    //   } catch (error) {
    //     // 打开支行页面
    //     ctx.openBranchPage(map.name);
    //   }
    // });
    // // mouseover 事件在吉安不触发，这里用mouseover做兼容处理
    // let mapInfoCity = '';
    // ctx.chart.on("mousemove", function(map) {
    //   if(mapInfoCity != ctx.maps[map.name].key || ctx.mapInfoClass == '') {
    //     mapInfoCity = ctx.maps[map.name].key;
    //     console.log('ctx.chart.on("mousemove")');
    //     console.log("map: ", map);
    //     // 地图信息提示窗切换
    //     ctx.mapInfoClass = "map-info-" + ctx.maps[map.name].key;
    //   }else {
    //     console.warn("当前地图信息已显示！");
    //   }
    // });
  },
};
</script>

<style lang="scss" scoped>
.v2-component-map-adaas {
  // width: 100%;
  // height: 100%;
  background-image: url("./img/BG.png");
}
.chart-content {
  // 由于全局 body 设置了 0.85 的缩放,这里平衡回来
  // zoom: 1.176470588235294 !important;
  position: relative;
  height: 700px;
  width: 900px;
}
</style>
