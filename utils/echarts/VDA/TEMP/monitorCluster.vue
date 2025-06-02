<template>
  <div id="monitorCluster">
    <header class="header">
      <div class="left-select">
        <!--        <el-select-->
        <!--          v-model="clusterName"-->
        <!--          placeholder="请选择"-->
        <!--          @change="handleChange"-->
        <!--        >-->
        <!--          <el-option-->
        <!--            v-for="item in clusterOptions"-->
        <!--            :key="item.clusterId"-->
        <!--            :label="item.clusterName"-->
        <!--            :value="item.clusterId"-->
        <!--          ></el-option>-->
        <!--        </el-select>-->
        <el-select
          v-model="clusterName"
          placeholder="请选择"
          @change="handleChange"
        >
          <el-option-group v-for="group in clusterOptions" :key="group.envId">
            <i
              class="iconfont icon-new-folder"
              style="padding-left:10px;padding-right:10px;"
            ></i>
            {{ group.envId }}
            <el-option
              v-for="item in group.clusters"
              :key="item.clusterId"
              :label="item.clusterName"
              :value="item.clusterId"
            >
              <i
                class="iconfont icon-new-moban"
                style="padding-left:20px;padding-right:10px;"
              ></i>
              {{ item.clusterName }}
              <span style="float: right">{{ item.num }}</span>
            </el-option>
          </el-option-group>
        </el-select>
        <span style="margin: 0 15px">监控集群:</span>
        <el-select v-model="promeCluId" placeholder="请选择">
          <el-option
            v-for="item in monitorClusterOptions"
            :key="item.clusterId"
            :label="item.clusterName"
            :value="item.clusterId"
          ></el-option>
        </el-select>
      </div>
      <div class="right-select">
        <el-select
          v-model="timeName"
          clearable
          placeholder="请选择"
          @change="handleTime"
          class="time"
          style="width: 170px;"
        >
          <template slot="prefix">
            <i
              class="el-input__icon iconfont icon-logkeeper-time"
              style="margin-left: 8px"
            ></i>
          </template>
          <el-option
            v-for="item in timeOptions"
            :key="item.value"
            :label="item.name"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </header>
    <topContent
      ref="monitorClusterTopChild"
      style="margin-top: 15px"
      :data="clusterData"
      :is-icon="false"
      :promeCluId="promeCluId"
      :is-cluster="true"
    ></topContent>
    <section class="content-wrap">
      <div class="tabs" :id="getId(name, 'tabs')" :ref="getId(name, 'tabs')">
        <div class="tab-list-wrap" :id="getId(name, 'tabListWrap')">
          <div
            class="tab-list"
            :class="{
              'no-tab-list-active': tabsCurrentIndex !== index,
              'tab-list-active-next': tabsCurrentIndex + 1 === index,
              'tab-list-active-prev': tabsCurrentIndex - 1 === index,
              'tab-active': tabsCurrentIndex === index
            }"
            @click="clickTabslist(item, index)"
            v-for="(item, index) in tabsData"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
        <div
          class="tabs-blank"
          :style="{
            borderBottom: '1px solid #E7ECEF',
            width: blankWidth + 'px'
          }"
        >
          <div v-if="tabsCurrentIndex === 2">
            <el-select
              class="node"
              v-model="instanceId"
              clearable
              placeholder="请选择节点"
              @change="handleChangeByInstance"
            >
              <el-option
                v-for="item in instanceOptions"
                :key="item.key"
                :label="item.value"
                :value="item.key"
              ></el-option>
            </el-select>
            <el-select
              class="service"
              v-model="serviceId"
              clearable
              placeholder="请选择服务"
              @change="handleChangeByService"
            >
              <el-option
                v-for="item in serviceOption"
                :key="item.key"
                :label="item.value"
                :value="item.key"
              ></el-option>
            </el-select>
            <el-select
              class="scenario"
              v-model="sceneId"
              clearable
              placeholder="请选择场景"
            >
              <el-option
                v-for="item in sceneOption"
                :key="item.key"
                :label="item.value"
                :value="item.key"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <tabContent
        :data="tabContentData"
        v-if="tabsCurrentIndex !== tabsData.length - 1"
      ></tabContent>
      <!-- 自定义-->
      <div v-if="tabsCurrentIndex === tabsData.length - 1">
        <dashboard style="background: white"></dashboard>
      </div>
    </section>
  </div>
</template>

<script>
import topContent from "@/views/page/monitor/topContent";
import tabContent from "@/views/page/monitor/tabContent";
import dashboard from "@/views/page/alarmCenter/dashboard/dashboard";
import elementResizeDetectorMaker from "element-resize-detector";

//集群总览中的系统总览
var sysResourceViewJson = require("@/views/page/monitor/monitorClusterJson/sys/sysResourceView.json");
var sysTotalLoadJson = require("@/views/page/monitor/monitorClusterJson/sys/sysTotalLoad.json");
var sysTotalMemoryJson = require("@/views/page/monitor/monitorClusterJson/sys/sysTotalMemory.json");
var sysTotalDiskJson = require("@/views/page/monitor/monitorClusterJson/sys/sysTotalDisk.json");
//集群总览中的JVM总览
var JVMThredMemoryJson = require("@/views/page/monitor/monitorClusterJson/JVM/JVMThredMemory.json");
var JVMmemoryJson = require("@/views/page/monitor/monitorClusterJson/JVM/JVMmemory.json");
var JVMUseJson = require("@/views/page/monitor/monitorClusterJson/JVM/JVMUse.json");
var JVMGCJson = require("@/views/page/monitor/monitorClusterJson/JVM/JVMGC.json");

//集群总览中的服务总览
var tradeNumJson = require("@/views/page/monitor/monitorClusterJson/service/tradeNum.json");
var queueTimeJson = require("@/views/page/monitor/monitorClusterJson/service/queueTime.json");
var tradingTimeJson = require("@/views/page/monitor/monitorClusterJson/service/tradingTime.json");
var refusedDataJson = require("@/views/page/monitor/monitorClusterJson/service/refusedNum.json");
var abnormalNumJson = require("@/views/page/monitor/monitorClusterJson/service/abnormalNum.json");
var timeOutJson = require("@/views/page/monitor/monitorClusterJson/service/timeout.json");
var saturatedJson = require("@/views/page/monitor/monitorClusterJson/service/saturated.json");
var failureJson = require("@/views/page/monitor/monitorClusterJson/service/failure.json");
var threadJson = require("@/views/page/monitor/monitorClusterJson/service/threadNum.json");

import moment from "moment";
import {
  getAllService,
  getAllCluster,
  getService,
  getInstance,
  getMetric,
  getCluster,
  getMetricCluster,
  getServiceSelect
} from "@/api/monitorApi";
import {
  formatterBt,
  formatterGb,
  formatterH,
  formatterKb,
  formatterM,
  formatterMb,
  formatterMs,
  formatterPt,
  formatterS,
  formatterTime
} from "@/views/page/alarmCenter/dashboard/formatterData";
const erd = elementResizeDetectorMaker();
function debounce(fn, delay) {
  // 记录上一次的延时器
  let timer = null;
  let delays = delay || 200;
  return function() {
    let args = arguments;
    let that = this;
    // 清除上一次延时器
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(that, args);
    }, delays);
  };
}
function formatterUnit(item, data) {
  let result = null;
  if (item.unitType === "TIME") {
    switch (item.unitValue) {
      case "ms":
        result = formatterMs(data, item);
        break;
      case "s":
        result = formatterS(data, item);
        break;
      case "m":
        result = formatterM(data, item);
        break;
      case "h":
        result = formatterH(data, item);
        break;
      case "d":
        result = data.toFixed(item.precisions) + "d";
        break;
    }
  } else if (item.unitType === "COMPUTER") {
    switch (item.unitValue) {
      case "bytes":
        result = formatterBt(data, item, "bytes");
        break;
      case "kb":
        result = formatterKb(data, item, "kb");
        break;
      case "mb":
        result = formatterMb(data, item, "mb");
        break;
      case "gb":
        result = formatterGb(data, item);
        break;
      case "tb":
        result = data.toFixed(item.precisions) + "TB";
        break;
    }
  } else if (item.unitType === "PERCENTAGE") {
    switch (item.unitValue) {
      case "%":
        result = formatterPt(data, item);
        break;
    }
  } else if (item.unitType === "RATE") {
    switch (item.unitValue) {
      case "b/s":
        result = formatterBt(data, item, "b/s");
        break;
      case "k/s":
        result = formatterKb(data, item, "k/s");
        break;
      case "m/s":
        result = formatterMb(data, item, "m/s");
        break;
      case "g/s":
        result = data.toFixed(item.precisions) + "g/s";
        break;
    }
  } else if (item.unitType === "TIMEFORMAT") {
    formatterTime(data, item.unitValue);
  } else {
    if (item.precisions) {
      item.unitValue
        ? (result = Number(data).toFixed(item.precisions) + item.unitValue)
        : (result = Number(data).toFixed(item.precisions));
    } else {
      // data.indexOf('.') !== -1 ? result = Number(data).toFixed(2) : result = data
      result = data;
    }
  }
  return result;
}
export default {
  name: "monitorCluster",
  components: {
    topContent,
    tabContent,
    dashboard
  },
  computed: {
    changeData() {
      const { clusterName, timeName } = this;
      return {
        clusterName,
        timeName
      };
    },
    changeSelect() {
      const { instanceId, serviceId, sceneId } = this;
      return {
        instanceId,
        serviceId,
        sceneId
      };
    }
  },
  data() {
    return {
      monitorClusterOptions: [],
      instanceId: "",
      serviceId: "",
      sceneId: "",
      name: "monitorCluster",
      tabContentData: null,
      tabsCurrentIndex: 0,
      blankWidth: 0,
      tabsData: [
        {
          name: "系统总览",
          id: "系统总览"
        },
        {
          name: "JVM总览",
          id: "JVM总览"
        },
        {
          name: "服务总览",
          id: "服务总览"
        },
        {
          name: "自定义",
          id: "自定义"
        }
      ],
      clusterData: {
        type: "health",
        typeTitle: "集群状态",
        iconName: "node",
        iconText: "节点数",
        content: {}
      },
      clusterName: "",
      clusterOptions: [],
      instanceOptions: [],
      serviceOption: [],
      sceneOption: [],
      optionParams: {
        ql: "",
        condition: {}
      },
      timeName: "24",
      envId: "",
      timeOptions: [
        {
          value: "24",
          name: "最近24小时"
        },
        {
          value: "6",
          name: "最近6小时"
        }
      ],
      end: "",
      start: "",
      tabTableParams: {
        custom: {
          headLine: {
            data: []
          },
          style: {
            bg_error: {
              backgroundColor: "#483",
              color: "#fff"
            },
            bg_normal: {
              backgroundColor: "#f3d",
              color: "#fff"
            },
            bg_warn: {
              backgroundColor: "#f00",
              color: "#fff"
            }
          }
        },
        series: [
          {
            data: [],
            type: "table"
          }
        ],
        title: {
          text: "test"
        },
        w: 12,
        h: "240"
      },
      tabChartsParams: {
        title: {
          text: "交易量",
          textStyle: {
            fontSize: 14
          }
        },
        tooltip: {
          trigger: "axis",
          confine: true,
          position: function(pos, params, el, elRect, size) {
            var obj = { top: 10 };
            obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
            // console.log(obj);
            return obj;
          },
          formatter: function(params) {
            // console.log(params);
            var res = params[0].name;
            for (var i = 0; i < params.length; i++) {
              let result = formatterUnit(resource.series[i], params[i].data);
              // console.log(result);
              res +=
                "<br>" +
                params[i].marker +
                params[i].seriesName +
                "：" +
                result;
            }
            return res;
          }
        },
        legend: {
          // right: 0,
          data: [],
          selected: {},
          icon: "circle", // 圆形
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 10
        },
        color: [
          "rgba(91, 124, 140, 1)",
          "rgba(7, 182, 181, 1)",
          "rgba(255, 136, 76, 1)"
        ],
        grid: {
          left: "2%",
          right: "4%",
          bottom: "5%",
          // top: "10%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: [],
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed" //x轴网格虚线
            }
          },
          axisLine: {
            show: false //隐藏x轴
          },
          axisLabel: {
            color: "rgba(51, 51, 51, 1)"
          }
        },
        yAxis: {
          type: "value",
          max: function(value){
            
          },
          axisLine: {
            show: false //隐藏y轴
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed" //y轴网格虚线
            }
          },
          axisLabel: {
            color: "rgba(51, 51, 51, 1)"
          }
        },
        animation: false,
        series: [],
        w: 6,
        h: "260"
      },
      //系统总览
      sysResourceViewData: {}, //资源总览
      sysTotalLoadData: {}, //整体总负载与整体平均CPU
      sysTotalMemoryData: {}, //整体内存与整体平均内存
      sysTotalDiskData: {}, //整体总磁盘与整体磁盘
      sysTotalNetworkData: {}, //整体总网络与整体网络
      //JVM总览
      JVMThredMemoryData: {}, //JVM进程内存
      JVMmemoryData: {}, //JVM内存
      JVMUseData: {}, //JVM使用情况
      JVMGCData: {}, //GC信息

      tradingTotal: {}, //日交易
      abnormalTotal: {}, // 日异常
      refusedTotal: {}, //拒绝
      timeoutTotal: {}, //超时
      successRate: "", //成功率
      failureRate: "", //失败率
      params: {
        end: "",
        start: "",
        condition: {},
        panel: {
          inline: "",
          series: "label",
          dashboard: {
            id: "",
            cluID: ""
          },
          dimension: [
            {
              id: "",
              isUserDefined: true,
              name: "",
              panelTable: [],
              precisions: 1,
              promQL: "",
              unitType: "",
              unitValue: ""
            }
          ]
        }
      },
      promeCluId: ""
    };
  },
  watch: {
    promeCluId(val) {
      this.getData();
    },
    changeData(val) {
      if (val.clusterName) {
        this.getClusterData();
      }
    },
    changeSelect(val) {
      this.tabContentData = [];
      this.getData();
    }
  },
  methods: {
    handleChangeByInstance(val) {
      this.getServiceOption();
    },
    handleChangeByService(val) {
      this.getSceneOption();
    },
    getMetricClusterData(envId) {
      getMetricCluster(envId).then(res => {
        if (res.success === true) {
          this.monitorClusterOptions = res.content;
          console.log(res.content);
          this.promeCluId = res.content[0].clusterId;
        } else {
          this.$notify.error({
            title: "错误",
            message: "获取监控集群数据失败"
          });
        }
      });
    },
    handleChange(val) {
      // console.log(val);
      // console.log(this.clusterOptions);
      this.clusterOptions.map(item => {
        if (item.clusters && item.clusters.length > 0) {
          item.clusters.map(list => {
            if (list.clusterId === val) {
              this.getMetricClusterData(list.envId);
            }
          });
        }
      });
      this.start = moment()
        .subtract(parseInt(this.timeName), "hours")
        .format("YYYY-MM-DD HH:mm:ss");
      this.end = moment().format("YYYY-MM-DD HH:mm:ss");
      this.tabContentData = [];
      this.getData();
    },
    handleTime(val) {
      this.start = moment()
        .subtract(parseInt(val), "hours")
        .format("YYYY-MM-DD HH:mm:ss");
      this.end = moment().format("YYYY-MM-DD HH:mm:ss");
      this.tabContentData = [];
      if (this.tabsCurrentIndex === 0) {
        this.getSysData();
      }
      if (this.tabsCurrentIndex === 1) {
        this.getJVMData();
      }
      if (this.tabsCurrentIndex === 2) {
        this.getServiceChartsData();
      }
    },
    getId(name, str) {
      return name + "-" + str;
    },
    async clickTabslist(data, index) {
      this.tabsCurrentIndex = index;
      this.tabContentData = [];
      this.start = moment()
        .subtract(parseInt(this.timeName), "hours")
        .format("YYYY-MM-DD HH:mm:ss");
      this.end = moment().format("YYYY-MM-DD HH:mm:ss");
      this.getData();
    },
    async getClusterData() {
      let params = {
        time: this.timeName,
        clusterId: this.clusterName
      };
      let result = await getCluster(params);
      if (result.success === true) {
        this.clusterData = {};
        this.clusterData.type = "health";
        this.clusterData.typeTitle = "服务状态";
        this.clusterData.iconName = "node";
        this.clusterData.iconText = "节点数";
        this.clusterData.pathData = {
          name: "进入节点",
          path: "/monitorCenter/monitorNode"
        };
        this.clusterData.textData = [
          {
            name: "节点数",
            num: result.content.instanceSize
          },
          {
            name: "服务数",
            num: result.content.serviceNum
          }
        ];
        this.clusterData.content = result.content;
        if (result.content.instance && result.content.instance.length > 0) {
          this.$refs[this.name + "TopChild"].debounceMethods(
            result.content.instance[0]
          );
        }
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取监控数据失败"
        });
      }
    },
    async getAllClusterData() {
      let result = await getAllCluster();
      if (result.success === true) {
        this.clusterOptions = result.content;
        // console.log(result.content);
        this.clusterName = result.content[0].clusters[0].clusterId;
        this.getMetricClusterData(result.content[0].clusters[0].envId);
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取集群失败"
        });
      }
    },
    async init() {
      await this.getAllClusterData();
    },
    async getChartsData(data, msg, needSortColor) {
      data.panel.dashboard.cluID = this.promeCluId;
      var promQL = await this.getPromQL(data);
      this.clusterName
        ? (data.condition.cluster_id = this.clusterName)
        : data.condition.cluster_id
        ? this.$delete(data.condition, "cluster_id")
        : null;
      if (this.tabsCurrentIndex === 2) {
        this.instanceId
          ? (data.condition.instance = this.instanceId)
          : data.condition.instance
          ? this.$delete(data.condition, "instance")
          : null;
        this.serviceId
          ? (data.condition.service_name = this.serviceId)
          : data.condition.service_name
          ? this.$delete(data.condition, "service_name")
          : null;
        this.sceneId
          ? (data.condition.scene_name = this.sceneId)
          : data.condition.scene_name
          ? this.$delete(data.condition, "scene_name")
          : null;
      }
      data.start = this.start;
      data.end = this.end;
      let result = await getMetric(data);
      if (result.success === true) {
        let obj = JSON.parse(JSON.stringify(this.tabChartsParams));
        obj.tooltip.position = function(pos, params, el, elRect, size) {
          var obj = { top: 10 };
          obj[["left", "right"][+(pos[0] < size.viewSize[0] / 2)]] = 30;
          // console.log(obj);
          return obj;
        };
        obj.tooltip.formatter = function(params) {
          // console.log(params);
          var res = params[0].name;
          for (var i = 0; i < params.length; i++) {
            let results = formatterUnit(
              result.content.series[i],
              params[i].data
            );
            // console.log(result);
            res +=
              "<br>" + params[i].marker + params[i].seriesName + "：" + results;
          }
          return res;
        };
        let arr = result.content.series.map(function(item) {
          return item.name;
        });
        if (
          msg === "整体总磁盘与整体磁盘" ||
          msg === "失败率和失败笔数"
        ) {
          obj.w = 12;
        }
        if (msg === "交易量") {
          obj.w = 10;
          obj.h = "240";
          // result.content.series.map(item => {
          //   item.areaStyle = {};
          //   item.smooth = true;
          // });
        }
        let series = JSON.parse(JSON.stringify(result.content.series));
        if(msg.indexOf("CPU") > -1){
          let index = series.findIndex(item => item.name.indexOf("总核数") > -1);
         if(index > -1){
           series.splice(index, 1);
         } 
        }
        if(msg.indexOf("磁盘") > -1|| msg.indexOf("内存") > -1){
          for(let i = 0 ; i < series.length; i++){
            if(series[i].name.indexOf("使用率") > -1){
              obj.legend.selected[series[i].name] = true;
            }
            else{
              obj.legend.selected[series[i].name] = false;
            }
          }
        }
        if(needSortColor){
          for(let i = 0 ; i < series.length; i++){
            let key = series[i].name.split("-")[0];
            this.$store.commit("color/ADD_COLOR", key);
            series[i].itemStyle = {color: this.$store.state.color.legendColor[key]};
            if(key === "ctrl" || key === "monitor"){
              obj.legend.selected[series[i].name] = false;
            }
          }
        }
        obj.series = series;
        obj.xAxis.data = result.content.xaxis;
        obj.legend.data = arr;
        obj.title.text = msg;
        obj.promQL = promQL;
        return obj;
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取" + msg + "数据失败"
        });
      }
    },
    async getTableData(data, msg) {
      data.panel.dashboard.cluID = this.promeCluId;
      var promQL = await this.getPromQL(data);
      this.clusterName
        ? (data.condition.cluster_id = this.clusterName)
        : data.condition.cluster_id
        ? this.$delete(data.condition, "cluster_id")
        : null;
      if (this.tabsCurrentIndex === 2) {
        this.instanceId
          ? (data.condition.instance = this.instanceId)
          : data.condition.instance
          ? this.$delete(data.condition, "instance")
          : null;
        this.serviceId
          ? (data.condition.service_name = this.service_name)
          : data.condition.service_name
          ? this.$delete(data.condition, "service_name")
          : null;
        this.sceneId
          ? (data.condition.scene_name = this.scene_name)
          : data.condition.scene_name
          ? this.$delete(data.condition, "scene_name")
          : null;
      }
      data.start = this.start;
      data.end = this.end;
      let result = await getMetric(data);
      if (result.success === true) {
        let obj = JSON.parse(JSON.stringify(this.tabTableParams));
        let res = result.content;
        let apple = Object.entries(res.series);
        let tableData = [];
        if (apple.length > 0) {
          // console.log(apple);
          for (let i = 0; i < apple[0][1].results.length; i++) {
            const entries = new Map();
            for (let j = 0; j < apple.length; j++) {
              // entries.set(apple[j][0], apple[j][1][i]);
              entries.set(apple[j][0], apple[j][1]["results"][i]);
            }
            const obj = Object.fromEntries(entries);
            // console.log(obj);
            tableData.push(obj);
          }
        }
        let headLineData = [];
        res.xaxis.map(item => {
          headLineData.push({
            prop: item.id,
            label: item.name,
            isShow: true
          });
        });
        for (const key in res.series) {
          headLineData.map(item => {
            if (item.prop === key) {
              item.precisions = res.series[key].precisions;
              item.unitType = res.series[key].unitType;
              item.unitValue = res.series[key].unitValue;
            }
          });
        }
        obj.title.text = msg;
        obj.custom.headLine.data = headLineData;
        obj.custom.checkList = headLineData.map(item => {
          return item.label;
        });
        obj.series[0].data = tableData;
        obj.promQL = promQL;
        return obj;
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取" + msg + "数据失败"
        });
      }
    },
    getData: debounce(function() {
      if (this.tabsCurrentIndex === 0) {
        this.getSysData();
      }
      if (this.tabsCurrentIndex === 1) {
        this.getJVMData();
      }
      if (this.tabsCurrentIndex === 2) {
        this.getServiceChartsData();
        this.getInstanceOptions();
      }
    }, 1500),
    //获取系统总览数据
    async getSysData() {
      this.tabContentData = [];
      //资源总览
      this.sysResourceViewData = await this.getTableData(
        sysResourceViewJson,
        "资源总览表"
      );
      this.tabContentData.push(this.sysResourceViewData);
      //整体总负载与整体平均CPU
      this.sysTotalLoadData = await this.getChartsData(
        sysTotalLoadJson,
        "整体总负载与整体平均CPU"
      );
      this.tabContentData.push(this.sysTotalLoadData);
      //整体内存与整体平均内存
      this.sysTotalMemoryData = await this.getChartsData(
        sysTotalMemoryJson,
        "整体内存与整体平均内存"
      );
      this.tabContentData.push(this.sysTotalMemoryData);
      //整体总磁盘与整体磁盘
      this.sysTotalDiskData = await this.getChartsData(
        sysTotalDiskJson,
        "整体总磁盘与整体磁盘"
      );
      this.tabContentData.push(this.sysTotalDiskData);
    },
    //获取JVM数据
    async getJVMData() {
      this.tabContentData = [];
      //JVM进程内存
      this.JVMThredMemoryData = await this.getChartsData(
        JVMThredMemoryJson,
        "JVM进程内存",
        true
      );
      this.tabContentData.push(this.JVMThredMemoryData);
      //JVM内存
      this.JVMmemoryData = await this.getChartsData(JVMmemoryJson, "JVM内存", true);
      this.tabContentData.push(this.JVMmemoryData);
      //JVM使用情况
      this.JVMUseData = await this.getTableData(JVMUseJson, "JVM使用情况");
      this.tabContentData.push(this.JVMUseData);
      //JVMGCJson
      this.JVMGCData = await this.getTableData(JVMGCJson, "GC信息");
      this.tabContentData.push(this.JVMGCData);
    },
    async getServiceChartsData() {
      this.tabContentData = [];
      //
      this.params.panel.dashboard.cluID = this.promeCluId;
      this.clusterName
        ? (this.params.condition.cluster_id = this.clusterName)
        : this.params.condition.cluster_id
        ? this.$delete(this.params.condition, "cluster_id")
        : null;
      if (this.tabsCurrentIndex === 2) {
        this.instanceId
          ? (this.params.condition.instance = this.instanceId)
          : this.params.condition.instance
          ? this.$delete(this.params.condition, "instance")
          : null;
        this.serviceId
          ? (this.params.condition.service_name = this.serviceId)
          : this.params.condition.service_name
          ? this.$delete(this.params.condition, "service_name")
          : null;
        this.sceneId
          ? (this.params.condition.scene_name = this.sceneId)
          : this.params.condition.scene_name
          ? this.$delete(this.params.condition, "scene_name")
          : null;
      }
      //
      this.tradingTotal = await this.getTradingTotal(
        JSON.parse(JSON.stringify(this.params))
      );
      this.timeoutTotal = await this.getTimeoutTotal(
        JSON.parse(JSON.stringify(this.params))
      );
      this.abnormalTotal = await this.getAbnormalTotal(
        JSON.parse(JSON.stringify(this.params))
      );
      this.refusedTotal = await this.getRefusedTotal(
        JSON.parse(JSON.stringify(this.params))
      );
      this.tabContentData.push({
        title: {
          text: "总block",
          textStyle: {
            fontSize: 14
          }
        },
        series: [
          {
            name: "日交易总量",
            num: this.tradingTotal.num,
            ql: this.tradingTotal.promQL,
            type: "totalBlock",
            icon: "#iconjiaoyi"
          },
          {
            name: "日拒绝总量",
            num: this.refusedTotal.num,
            ql: this.refusedTotal.promQL,
            type: "totalBlock",
            icon: "#iconjujue"
          },
          {
            name: "日超时总量",
            num: this.timeoutTotal.num,
            ql: this.timeoutTotal.promQL,
            type: "totalBlock",
            icon: "#iconchaoshi"
          },
          {
            name: "日异常总量",
            num: this.abnormalTotal.num,
            ql: this.abnormalTotal.promQL,
            type: "totalBlock",
            icon: "#iconyichang"
          },
          {
            name: "成功率",
            num:
              this.abnormalTotal.num && this.tradingTotal.num
                ? (1 -
                    (
                      Number(this.abnormalTotal.num) /
                      Number(this.tradingTotal.num)
                    ).toFixed(2)) *
                    100 +
                  "%"
                : 0,
            type: "totalBlock",
            icon: "#iconchenggong"
          }
        ],
        w: 2,
        h: "240"
      });
      //交易量
      this.tradingData = await this.getChartsData(tradeNumJson, "交易量", true);
      this.tabContentData.push(this.tradingData);
      //队列耗时
      this.tradingData = await this.getChartsData(queueTimeJson, "队列耗时", true);
      this.tabContentData.push(this.tradingData);
      //交易耗时
      this.tradingTimeData = await this.getChartsData(
        tradingTimeJson,
        "交易耗时",
        true
      );
      this.tabContentData.push(this.tradingTimeData);
      //拒绝交易量
      this.refusedData = await this.getChartsData(
        refusedDataJson,
        "拒绝交易量",
        true
      );
      this.tabContentData.push(this.refusedData);
      //异常交易量
      this.abnormalData = await this.getChartsData(
        abnormalNumJson,
        "异常交易量",
        true
      );
      this.tabContentData.push(this.abnormalData);
      //超时交易量
      this.timeoutData = await this.getChartsData(timeOutJson, "超时交易量", true);
      this.tabContentData.push(this.timeoutData);
      //业务处理器饱和率
      this.saturatedData = await this.getChartsData(
        saturatedJson,
        "业务处理器饱和率",
        true
      );
      this.tabContentData.push(this.saturatedData);
      //失败率和失败败笔数
      this.failureData = await this.getChartsData(
        failureJson,
        "失败率和失败败笔数",
        true
      );
      this.tabContentData.push(this.failureData);
      //业务线程
      this.threadData = await this.getTableData(threadJson, "业务线程");
      this.tabContentData.push(this.threadData);
    },
    allBlockPush(data) {
      data.panel.dashboard.cluID = this.promeCluId;
      this.clusterName
        ? (data.condition.cluster_id = this.clusterName)
        : data.condition.cluster_id
        ? this.$delete(data.condition, "cluster_id")
        : null;
    },
    //交易
    async getTradingTotal(data) {
      this.allBlockPush(data);
      // data.panel.dashboard.cluID = this.promeCluId;
      // this.clusterName
      //   ? (data.condition.cluster_id = this.clusterName)
      //   : data.condition.cluster_id
      //   ? this.$delete(data.condition, "cluster_id")
      //   : null;
      data.end = this.end;
      data.start = this.start;
      data.panel.dimension[0].name = "日交易总量";
      data.panel.dimension[0].promQL =
        "sum(agree_afa_engine_svc_scene_execute_per_day_total{cluster_id='$cluster_id', instance=\"$instance\", service_name='$service_name'})";
      const res = await getMetric(data);
      if (res.success === true) {
        return {
          num:
            res.content.series.indexOf(".") !== -1
              ? Number(res.content.series).toFixed(4)
              : Number(res.content.series),
          promQL: await this.getPromQL(data)
        };
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取日交易总量数据失败"
        });
      }
    },
    // 异常
    async getAbnormalTotal(data) {
      this.allBlockPush(data);
      // data.panel.dashboard.cluID = this.promeCluId;
      // this.clusterName
      //   ? (data.condition.cluster_id = this.clusterName)
      //   : data.condition.cluster_id
      //   ? this.$delete(data.condition, "cluster_id")
      //   : null;
      data.end = this.end;
      data.start = this.start;
      data.panel.dimension[0].name = "日异常总量";
      data.panel.dimension[0].promQL =
        "sum(agree_afa_engine_svc_scene_execute_exception_failed_per_day_total{cluster_id='$cluster_id', instance=\"$instance\", service_name='$service_name'})";
      const res = await getMetric(data);
      if (res.success === true) {
        return {
          num:
            res.content.series.indexOf(".") !== -1
              ? Number(res.content.series).toFixed(4)
              : Number(res.content.series),
          promQL: await this.getPromQL(data)
        };
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取日异常总量数据失败"
        });
      }
    },
    //拒绝
    async getRefusedTotal(data) {
      this.allBlockPush(data);
      // data.panel.dashboard.cluID = this.promeCluId;
      // this.clusterName
      //   ? (data.condition.cluster_id = this.clusterName)
      //   : data.condition.cluster_id
      //   ? this.$delete(data.condition, "cluster_id")
      //   : null;
      data.end = this.end;
      data.start = this.start;
      data.panel.dimension[0].name = "日拒绝总量";
      data.panel.dimension[0].promQL =
        "sum(agree_afa_engine_svc_scene_rejected_per_day_total{cluster_id='$cluster_id', instance=\"$instance\", service_name='$service_name'})";
      const res = await getMetric(data);
      if (res.success === true) {
        return {
          num:
            res.content.series.indexOf(".") !== -1
              ? Number(res.content.series).toFixed(4)
              : Number(res.content.series),
          promQL: await this.getPromQL(data)
        };
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取日拒绝总量数据失败"
        });
      }
    },
    // 超时
    async getTimeoutTotal(data) {
      this.allBlockPush(data);
      // data.panel.dashboard.cluID = this.promeCluId;
      // this.clusterName
      //   ? (data.condition.cluster_id = this.clusterName)
      //   : data.condition.cluster_id
      //   ? this.$delete(data.condition, "cluster_id")
      //   : null;
      data.end = this.end;
      data.start = this.start;
      data.panel.dimension[0].name = "日超时总量";
      data.panel.dimension[0].promQL =
        "sum(agree_afa_engine_svc_scene_timeout_per_day_total{cluster_id='$cluster_id', instance=\"$instance\", service_name='$service_name'})";
      const res = await getMetric(data);
      if (res.success === true) {
        return {
          num:
            res.content.series.indexOf(".") !== -1
              ? Number(res.content.series).toFixed(4)
              : Number(res.content.series),
          promQL: await this.getPromQL(data)
        };
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取日超时总量数据失败"
        });
      }
    },
    async getInstanceOptions() {
      this.optionParams.ql =
        "label_values(agree_afa_engine_runtime_milliseconds{cluster_id='$cluster_id'}, instance)";
      this.optionParams.condition.cluster_id = this.clusterName;
      const res = await getServiceSelect(this.promeCluId, this.optionParams);
      if (res.success === true) {
        this.instanceOptions = res.content;
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取节点数据失败"
        });
      }
    },
    async getServiceOption() {
      this.optionParams.ql =
        "label_values(agree_afa_engine_runtime_milliseconds{instance='$instance'}, service_name)";
      this.optionParams.condition.instance = this.instanceId;
      const res = await getServiceSelect(this.promeCluId, this.optionParams);
      if (res.success === true) {
        this.serviceOption = res.content;
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取服务数据失败"
        });
      }
    },
    async getSceneOption() {
      this.optionParams.ql =
        "label_values(agree_afa_engine_svc_scene_executed_milliseconds{cluster_id='$cluster_id', service_name='$service_name'}, scene_name)";
      this.optionParams.condition.cluster_id = this.clusterName;
      this.optionParams.condition.service_name = this.serviceId;
      const res = await getServiceSelect(this.promeCluId, this.optionParams);
      if (res.success === true) {
        this.sceneOption = res.content;
      } else {
        this.$notify.error({
          title: "错误",
          message: "获取场景数据失败"
        });
      }
    },
    async getPromQL(data) {
      var promQL = "";
      data.panel.dimension.map(item => {
        promQL = promQL + ";" + item.promQL;
      });
      promQL = promQL.substr(1);
      promQL = promQL.replaceAll("$cluster_id", this.clusterName);
      if (this.tabsCurrentIndex === 2) {
        promQL = promQL.replaceAll("$service_name", this.serviceId);
        promQL = promQL.replaceAll("$scene_name", this.sceneId);
        promQL = promQL.replaceAll("$instance", this.instanceId);
      }
      return promQL;
    }
  },

  async mounted() {
    let that = this;
    this.start = moment()
      .subtract(parseInt(this.timeName), "hours")
      .format("YYYY-MM-DD HH:mm:ss");
    this.end = moment().format("YYYY-MM-DD HH:mm:ss");
    this.$nextTick(() => {
      let oTabs = document.getElementById(this.name + "-" + "tabs");
      let oTabListWrap = document.getElementById(
        this.name + "-" + "tabListWrap"
      );
      erd.listenTo(oTabs, function(ele) {
        let tabsW = oTabs && oTabs.scrollWidth;
        let tabListW = oTabListWrap && oTabListWrap.scrollWidth;
        if (tabListW < tabsW) {
          that.blankWidth = tabsW - tabListW - 1;
        }
      });
    });
    this.tabContentData = [];
    this.init();
    // let environment = JSON.parse(global.myLocalStorage.getItem("environment"));
    // this.envId = environment.id;
    //
    this.getData();
  },

  beforeDestroy() {
    erd.uninstall(this.$refs[this.name + "-" + "tabs"]);
  }
};
</script>

<style lang="less" scoped>
#monitorCluster {
  //padding: 14px 18px;
  background: rgba(231, 236, 239, 1);
  padding: 0 13px 0 0;
  box-sizing: border-box;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left-select,
  .right-select {
    display: flex;
    align-items: center;
  }
  .left-select {
  }
  .right-select {
  }
  .cluster {
    /deep/ .el-input__inner {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding: 0 30px 0 40px;
      box-sizing: border-box;
    }
  }
  .node {
    /deep/ .el-input__inner {
      border-radius: 0;
      padding: 0 30px 0 40px;
      box-sizing: border-box;
    }
  }
  .time {
    /deep/ .el-input__inner {
      padding: 0 30px 0 40px;
      box-sizing: border-box;
    }
  }
}
.content-wrap {
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
  //height: 379px;
  margin: 20px 0;
  overflow: hidden;
  .tabs {
    background: white;
    display: flex;
    height: 38px;
    align-items: center;
    .tabs-blank {
      display: flex;
      align-items: center;
      text-align: right;
      background: rgba(231, 236, 239, 0.2);
      height: 39px;
      justify-content: flex-end;
      padding-right: 15px;
      box-sizing: border-box;
      .node /deep/ .el-input__inner {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .service /deep/ .el-input__inner {
        border-radius: 0;
      }
      .scenario /deep/ .el-input__inner {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
    //border-top-left-radius: 8px;
    //border-top-right-radius: 8px;
    .tab-list-wrap {
      display: flex;
      height: 100%;
    }
    .tab-list {
      display: inline-block;
      height: 38px;
      line-height: 38px;
      //min-width: 38px;
      padding: 0 15px;
      cursor: pointer;
      //border-right: 1px solid transparent;
      //border-left: 1px solid transparent;
      border: 1px solid transparent;
      border-top: none;
    }
    //.custom{
    //  padding: 0;
    //  width: 68px;
    //  text-align: center;
    //}
    .tab-active {
      color: rgba(0, 154, 166, 1);
    }
    .tab-list-active-prev {
      //border-right: 1px solid #E7ECEF;
      border-right-color: #e7ecef;
      border-bottom-right-radius: 8px;
    }
    .tab-list-active-next {
      //border-left: 1px solid #E7ECEF;
      border-left-color: #e7ecef;
      border-bottom-left-radius: 8px;
    }
    .no-tab-list-active {
      background: rgba(231, 236, 239, 0.2);
      border-bottom: 1px solid #e7ecef;
    }
  }
}
</style>
