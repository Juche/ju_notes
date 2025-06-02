<template>
  <div
    :style="model.commonStyle"
    class="v2-component-map3D"
    :class="widgetClass"
  >
    <div
      class="chart-content"
      style="width:100%;height:100%;"
      ref="_op_componentEchart_chart"
    ></div>
    <div class="map-tabs">
      <!-- <div class="map-tab map-tab-active" @click="renderMap(maps['江西省'])">
        <span>江西全辖</span>
      </div>
      <div class="map-tab" @click="renderMap(maps['合肥市'])">
        <span>合肥</span>
      </div>
      <div class="map-tab" @click="renderMap(maps['广州市'])">
        <span>广州</span>
      </div> -->
      <!-- 切换标签 -->
      <div
        v-for="(item, index) in mapTabs"
        :key="index"
        :class="['map-tab', index == activeMapTabIdx ? 'map-tab-active' : '']"
        @click="mapTabSwitch(item)"
      >
        <span>{{ item }}</span>
      </div>
    </div>
    <!--弹窗-->
    <div :class="['map-info-ctn', mapInfoClass]">
      <div class="map-info-box">
        <div class="map-info-header">
          <span class="bank">吉安分行</span>
          <span class="bank-no">(CZ09857)</span> >>
        </div>
        <div class="map-info-item">
          <div class="map-info-item-key">排队人数</div>
          <div class="map-info-item-val">17人</div>
        </div>
        <div class="map-info-item">
          <div class="map-info-item-key">机构人数</div>
          <div class="map-info-item-val">328人</div>
        </div>
        <div class="map-info-item">
          <div class="map-info-item-key">办理窗口</div>
          <div class="map-info-item-val">73个</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import "echarts-gl";

import jiangxi from "./geoJson/jiangxi.json";
import hefei from "./geoJson/hefei.json";
import guangzhou from "./geoJson/guangzhou.json";

import fuzhou from "./geoJson/jiangxi/fuzhou.json";
import ganzhou from "./geoJson/jiangxi/ganzhou.json";
import jian from "./geoJson/jiangxi/jian.json";
import jingdezhen from "./geoJson/jiangxi/jingdezhen.json";
import jiujiang from "./geoJson/jiangxi/jiujiang.json";
import nanchang from "./geoJson/jiangxi/nanchang.json";
import pingxiang from "./geoJson/jiangxi/pingxiang.json";
import shangrao from "./geoJson/jiangxi/shangrao.json";
import xinyu from "./geoJson/jiangxi/xinyu.json";
import yichun from "./geoJson/jiangxi/yichun.json";
import yingtan from "./geoJson/jiangxi/yingtan.json";

export default {
  name: "v2-component-map3D",
  data() {
    return {
      chart: null,
      activeMap: {
        map: jiangxi,
        name: "江西省",
        distance: 140,
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
          distance: 140,
        },
        合肥市: {
          map: hefei,
          key: "hefei",
          name: "合肥市",
          distance: 141,
        },
        广州市: {
          map: guangzhou,
          key: "guangzhou",
          name: "广州市",
          distance: 142,
        },
        宜春市: {
          map: yichun,
          key: "yichun",
          name: "宜春市",
          distance: 140.1,
        },
        南昌市: {
          map: nanchang,
          key: "nanchang",
          name: "南昌市",
          distance: 140.2,
        },
        新余市: {
          map: xinyu,
          key: "xinyu",
          name: "新余市",
          distance: 140.3,
        },
        上饶市: {
          map: shangrao,
          key: "shangrao",
          name: "上饶市",
          distance: 140.4,
        },
        萍乡市: {
          map: pingxiang,
          key: "pingxiang",
          name: "萍乡市",
          distance: 140.5,
        },
        九江市: {
          map: jiujiang,
          key: "jiujiang",
          name: "九江市",
          distance: 140.6,
        },
        景德镇市: {
          map: jingdezhen,
          key: "jingdezhen",
          name: "景德镇市",
          distance: 140.7,
        },
        吉安市: {
          map: jian,
          key: "jian",
          name: "吉安市",
          distance: 140.8,
        },
        抚州市: {
          map: fuzhou,
          key: "fuzhou",
          name: "抚州市",
          distance: 140.9,
        },
        鹰潭市: {
          map: yingtan,
          key: "yingtan",
          name: "鹰潭市",
          distance: 140.11,
        },
        赣州市: {
          map: ganzhou,
          key: "ganzhou",
          name: "赣州市",
          distance: 140.12,
        },
      },
      activeMapData: [
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
      ],
      jiangxiMapData: [
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
  },
  computed: {
    mapData() {
      // return this.model.mapData || mapData;
      return this.model.mapData || this.activeMapData;
    },
    // convertMapData() {
    //   return this.convertData(this.mapData);
    // },
    mapOption() {
      let option = {
        visualMap: {
          // show: false,
          min: 0,
          max: 3000,
          right: 50,
          bottom: 20,
          // splitNumber: 3,
          orient: "horizontal",
          // inRange: {
          //   color: [
          //       "#A0FFF1",
          //       "#FFEFA0",
          //       "#FF6060",
          //   ],
          // },
          type: "piecewise",
          textStyle: {
            color: "#FFFF",
          },
          splitList: [
            {
              lt: 1000,
              // color: "#A0FFF1",
              color: "#0ff",
              label: "1000人以内",
              symbol: this.iconImgs.icon1,
            },
            {
              gte: 1000,
              lte: 3000,
              // color: "#FFEFA0 ",
              color: "#FF0",
              label: "1000-3000",
              symbol: this.iconImgs.icon2,
            },
            {
              gte: 3000,
              // color: "#FF6060",
              color: "#F33",
              label: "大于3000",
              symbol: this.iconImgs.icon3,
            },
          ],
        },
        tooltip: {
          trigger: "item",
          show: true,
          formatter: function(params) {
            if (params.data) {
              // console.log('params: ', params)
              return `${params.name}</br>
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#1197b8"></span>
                值：${params.value[2]}</br>`;
            } else {
              return;
            }
          },
        },
        geo3D: {
          type: "map3D",
          // map: "world",
          map: this.activeMap.name,
          selectedMode: "single", //地图高亮单选
          regionHeight: 8, //地图高度
          boxDepth: 130, //地图倾斜度
          boxHeight: 20,
          boxWidth: 130,
          // 配置为全景贴图
          // environment: 'asset/starfield.jpg',
          // 配置为纯黑色的背景
          environment: "rgba(0,0,0,0)",
          // 配置为垂直渐变的背景
          // environment: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //   offset: 0, color: '#00aaff' // 天空颜色
          // }, {
          //   offset: 0.7, color: '#998866' // 地面颜色
          // }, {
          //   offset: 1, color: '#998866' // 地面颜色
          // }], false),
          viewControl: {
            distance: this.activeMap.distance, //地图视角 控制初始大小
            rotateSensitivity: 0, //禁止旋转
            zoomSensitivity: 0, //禁止缩放
          },
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
            // color: "#0773FA", //地图颜色
            borderWidth: this.mapBorderWidth,
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
          // emphasis: {
          //   label: {
          //     show: true, //是否显示高亮
          //     textStyle: {
          //       color: "#f00", //高亮文字颜色
          //     },
          //   },
          //   itemStyle: {
          //     color: "#0EBDFF",
          //     opacity: 1,
          //   },
          // },
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
            // detailTexture: "./img/worn-blue-burlap-albedo.png",
            // detailTexture: require("./img/worn-blue-burlap-ao.png"),
            // detailTexture: require("./img/worn-blue-burlap-Normal-dx.png"),
            // detailTexture: require("./img/tidalpool2_ao.png"),
            detailTexture: require("./img/worn-blue-burlap-albedo.png"),
          },
          // 可以通过 postEffect 下的 colorCorrection 配置项去手动的调整颜色。
          // colorCorrection 下有常见的曝光 exposure、亮度 brightness、对比度 contrast 和饱和度 saturation 选项
          postEffect: {
            enable: true,
            colorCorrection: {
              //  lookupTexture: "/asset/get/s/data-1497261115431-B1XrEJ2f-.jpg",
              // lookupTexture: "./img/worn-blue-burlap-albedo.png",
              // lookupTexture: require("./img/worn-blue-burlap-albedo.png"),
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
              // alpha: 150,
              // beta: 70,
              alpha: 120,
              beta: 60,
            },
            // 环境光
            ambient: {
              intensity: 0,
            },
            // 使用一张全景贴图作为环境光源
            // 推荐一个有不少免费的HDR全景图资源的网站 http://www.hdrlabs.com/sibl/archive.html
            ambientCubemap: {
              diffuseIntensity: 1,
              // texture: "/asset/get/s/data-1497251035660-HkVJTnsMW.hdr",
              // texture: require("./img/map-env.hdr"),
              texture: "./img/map-env.hdr",
              // exposure: 1,
            },
          },
          // 地面
          groundPlane: {
            show: false,
          },
          //   data: regionData,
          data: this.mapData,
        },
        series: [
          {
            name: "bar3D",
            type: "bar3D",
            coordinateSystem: "geo3D",
            barSize: 3, //柱子粗细
            minHeight: 5,
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
            tooltip: {
              show: false,
            },
            // data: this.convertMapData,
            data: this.convertData(this.mapData),
          },
          // {
          //   name: "点",
          //   type: "scatter3D",
          //   coordinateSystem: "geo3D",
          //   // symbol: "pin",
          //   symbol: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAD1ElEQVRIS6WV22vkVBzHvycnlyYzk5npNN1dt1XLVtFWVrCFdX2oKIjIgqCwYJFFBBXEP0F88M13fRJR0Id13UfFh3maB3Vd3IKI6327S710bp1rJplJcs6RJDNtpjNKVwN5OTn55sv39/meEEy5xObZRwE8M+3Z5Bq5RC5+deXwOjm8EGw+/IIEvAsQ9WjCcLkQL8off30puX9MWGyeeVMI6Q0QTHzw3z8iOIF4nVy8+tZoXyQgzq+oXDbfJyDPH9Hl1G0C5D1pV32VlEoBEU8tayJnFQFs/B/R/XcFiqSsnYsc//n4KXF83gIht5nAISdCCOyWK1go3YyVrq9Zwpwt4EQhB+k/ijMusLvXQLfZxOpW7UBYTmVgmDkcS2uQb9N4IAjKdh9uu4nA6WJ1q54QNjJQMjnMZPOwpACUe0eKnEkaaozC7TQRdFsInE5CeN0SVM9ANXNQzQLMlAVFkUE1HZKqgcgKCKUgAuCcQQQemDcAH7jwfYa2XYPfqcOz2wh6XTwQRnFtDYoOy6NDx2q2gGz6GKiegqynIIXiihYJQwCCB+CeBz5wwFwHgWuj3avAazcix34URS1O8/t16zVZz7ytmjmimLFwKEpnhsKh6wlhF4Hbi4Q7dgVepwG/0+RsYL+0+k3tA/L5MrS+mitmVHXj7hMnoefmYI6EQ3FVB1E1SJRChI5ZAO7HjoO+A+bYaNtVuK0abpX/Qs/3i7nrzZjjLx+cFdVAYEZVce+p+2HlF2LHYRTqMGeJIix6JDyMIhhGUWv+jl9u/AzP9zCvSHjk270DKvqyhj96Dqgs48zpDaRyhSiKcICRY4mGEU847jVruPrdFxCMYSFtQPPdw7ilEWgp3KxVwTiHkcmCUBmSJAES3W9l2C7BGcAZOGNwui3IVMbSnAUaxhMPb5JjGBnc2LkFu9c5EsdmOoulxbsApwt/guM1SyRxS+sF9AWPBpfkOMYt5ph7A7CBixmJwnbr8NuNofDQ8YhjecixMuR4YnghbqOME8NjIccj3LotMKeLlRHHP67PvyLp6XeUTF5RsrMHHI9RIYNAgCcKcoBbBX7EcctjffvllWvVD/ePm18fW36SGtlPVHPWnMYxCXELHSeF3bB9Mcd+Z6/JnM6z95R+K4X7xs6x7acfOq2m5j4z0/OL481TIVE5LggPIDwPLFlpp7oddBvnlj7d+mns15Qc/85zT9yRzxy/QnXjzrGCTDkrwoJwt7ddGVTPLn9UrP7jz3T0oHzhQoqezN9nGFkgm4ViGFAUA/B9+NHtwG+34bfr6O/Uf1i8fNk9zObf2icfgW418y4AAAAASUVORK5CYII=',
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
          //   // data: convertData(mapData),
          //   data: this.convertData(this.mapData),
          // },
        ],
      };

      return option;
    },
  },
  methods: {
    renderMap(activeMap) {
      let ctx = this;
      this.activeMap = activeMap;

      if (activeMap.name == "江西省") {
        this.mapBorderWidth = 2;
      } else {
        this.mapBorderWidth = 0;
      }
      // this.mapName = activeMap.name;
      // this.mapOption.geo3D.map = activeMap.name;
      // this.mapOption.geo3D.viewControl.distance = activeMap.distance;
      // $.get(activeMap.map, function(geoJson) {
      //   echarts.registerMap(activeMap.name, geoJson);
      //   ctx.chart.setOption(ctx.mapOption, true);
      // });
      echarts.registerMap(activeMap.name, activeMap.map);
      this.chart.setOption(this.mapOption, true);
    },
    openBranchPage(branch) {
      console.log("打开支行页面： ", branch);
      // alert(branch)
      // window.open("");
      // jj-new/jj1_page1?source=IDE
      // window.location.href="/#/jj-new/jj2_page?source=IDE&branch=" + branch;
      window.open("/#/jj-new/jj2_page?source=IDE&branch=" + branch, "_self");
      // window.history.back(-1)
    },
    convertData(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = this.geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      return res;
    },
    mapTabSwitch(tab) {
      this.mapInfoClass = "";
      if (tab == "江西全辖") {
        this.activeMapData = this.jiangxiMapData;
        this.renderMap(this.maps["江西省"]);
        this.activeMapTabIdx = 0;
      }
      if (tab == "合肥") {
        this.renderMap(this.maps["合肥市"]);
        this.activeMapTabIdx = 1;
      }
      if (tab == "广州") {
        this.renderMap(this.maps["广州市"]);
        this.activeMapTabIdx = 2;
      }
    },
  },
  mounted() {
    let ctx = this;

    ctx.chart = echarts.init(ctx.$refs._op_componentEchart_chart);
    ctx.renderMap(ctx.maps["江西省"]);

    // ECharts 支持常规的鼠标事件类型，包括 'click'、'dblclick'、'mousedown'、'mousemove'、'mouseup'、'mouseover'、'mouseout'、'globalout'、'contextmenu' 事件。
    ctx.chart.on("click", function(map) {
      console.log('ctx.chart.on("click")');
      console.log("map: ", map);
      ctx.mapInfoClass = "";
      if (map.name == "赣州市") {
        ctx.activeMapData = ctx.ganzhouMapData;
        console.log("ctx.model.mapData: ", ctx.model.mapData);
        console.log("ctx.mapData: ", ctx.mapData);
      }
      try {
        // 下钻地图的渲染
        ctx.renderMap(ctx.maps[map.name]);
      } catch (error) {
        // 打开支行页面
        ctx.openBranchPage(map.name);
      }
    });
    // mouseover 事件在吉安不触发，这里用mouseover做兼容处理
    let mapInfoCity = '';
    ctx.chart.on("mousemove", function(map) {
      if(mapInfoCity != ctx.maps[map.name].key || ctx.mapInfoClass == '') {
        mapInfoCity = ctx.maps[map.name].key;
        console.log('ctx.chart.on("mousemove")');
        console.log("map: ", map);
        // 地图信息提示窗切换
        ctx.mapInfoClass = "map-info-" + ctx.maps[map.name].key;
      }else {
        console.warn("当前地图信息已显示！");
      }
      // try {
      // } catch (error) {}
    });

    // $(window).on(
    //   "resize",
    //   (ctx.RESIZE_HANDLE = (e) => {
    //     setTimeout(() => {
    //       if (!$(ctx.$el).is(":hidden"))
    //         ctx.chart && ctx.chart.resize && ctx.chart.resize();
    //     }, 1000);
    //   })
    // );
  },
};
</script>

<style lang="scss" scoped>
.v2-component-map3D {
  // width: 740px;
  // height: 550px;
  width: 860px;
  height: 600px;
}
.chart-content {
  position: relative;
  width: 100%;
  height: 100%;
  mix-blend-mode: screen;
}
.map-tabs {
  position: absolute;
  right: 50px;
  bottom: 100px;
  // width: 250px;
  // height: 172px;
  text-align: right;

  .map-tab {
    width: 250px;
    // height: 48px;
    line-height: 48px;
    margin-bottom: 14px;
    background: url(./img/map-tab.png);
    cursor: pointer;

    span {
      margin-right: 25px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #f3fbff;
      text-shadow: 0px 2px 0px rgba(0, 10, 47, 0.5);
    }
  }
  .map-tab-active {
    background: url(./img/map-tab-active.png);
  }
}
.map-info-ctn {
  position: absolute;
  width: 280px;
  height: 120px;
  background: url(./img/map-info-box.png) no-repeat;
  color: #fff;
  text-shadow: 0px 1px 0px rgba(0, 9, 47, 0.5);
  display: none;

  &.map-info-jiujiang {
    display: block;
    top: 50px;
    left: 430px;
  }
  &.map-info-jingdezhen {
    display: block;
    top: 70px;
    left: 550px;
  }
  &.map-info-shangrao {
    display: block;
    top: 95px;
    left: 560px;
  }

  &.map-info-yichun {
    display: block;
    top: 135px;
    left: 240px;
  }
  &.map-info-xinyu {
    display: block;
    top: 140px;
    left: 305px;
  }
  &.map-info-pingxiang {
    display: block;
    top: 150px;
    left: 170px;
  }
  &.map-info-nanchang {
    display: block;
    top: 90px;
    left: 420px;
  }
  &.map-info-jian {
    display: block;
    top: 185px;
    left: 300px;
  }
  &.map-info-fuzhou {
    display: block;
    top: 135px;
    left: 473px;
  }
  &.map-info-yingtan {
    display: block;
    top: 110px;
    left: 550px;
  }
  &.map-info-ganzhou {
    display: block;
    top: 290px;
    left: 265px;
  }

  .map-info-box {
    margin-left: 60px;
    padding: 20px 0 20px 15px;
    width: 220px;
    box-sizing: border-box;
  }
  .map-info-header {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: #f3faff;
    cursor: pointer;
    .bank {
      font-size: 16px;
    }
  }
  .map-info-item {
    display: inline-block;
    width: 68px;
    margin-top: 10px;
    .map-info-item-key {
      font-size: 12px;
      font-family: Microsoft YaHei;
      color: #b2daff;
    }
    .map-info-item-val {
      margin-top: 10px;
      font-size: 16px;
      font-family: hanyikaku;
      font-style: italic;
      color: #7fffe1;
    }
  }
}
</style>
