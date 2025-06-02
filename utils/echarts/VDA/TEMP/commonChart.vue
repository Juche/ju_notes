<template>
  <div style="width: 100%;height: 100%">
    <div
      class="common-chart"
      :class="{
        'monitoring-common-chart': isMonitoring,
        'no-border': isMonitoring && !isBorder
      }"
      v-if="!isTotalBlock"
    >
      <div
        class="common-chart-header"
        v-if="isHasHeader"
        :class="{ 'common-chart-header-cursor-pointer': !isDropDown }"
      >
        <span>{{ title }}</span>
        <div style="display: flex;align-items: center">
          <span v-if="isTable">
            <el-input
              class="search-name"
              placeholder="请输入内容"
              v-model="searchName"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </span>
          <el-dropdown
            v-if="isDropDown"
            trigger="click"
            @command="handleDropDown"
            style="cursor:pointer"
          >
            <span class="el-dropdown-link" style="margin: 0 10px;">
              <i class="el-icon-more"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="edit">编辑</el-dropdown-item>
              <el-dropdown-item command="transform">克隆</el-dropdown-item>
              <el-dropdown-item command="remove">移除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span v-if="!isDropDown">
            <el-tooltip
              class="item"
              effect="dark"
              :content="data.promQL"
              placement="top"
              style="margin-left: 10px"
            >
              <i class="el-icon-info" style="color: rgba(169, 189, 199, 1)"></i>
            </el-tooltip>
          </span>
        </div>
      </div>
      <div
        class="common-chart-content"
        v-loading="loading"
        :class="{
          'padding-top-10': !isDropDown,
          'padding-15': isMonitoring && isTable
        }"
      >
        <v-chart
          v-if="!isBlock && !isTable"
          :options="polar"
          ref="vchart"
          theme="ovilia-green"
          @legendselectchanged="legendselectchanged"
        />
        <div
          v-if="isBlock"
          class="common-chart-graph-block"
          :id="i"
          :style="customStyle"
          :options="polar"
        >
          {{ blockText }}
        </div>
        <el-table
          v-if="isTable"
          style="width: 100%;"
          :options="polar"
          :style="customStyle"
          :data="tableData"
          :cell-style="cellStyle"
          height="100%"
          class="echarts-table"
        >
          <el-table-column
            v-for="item in headLine"
            :key="item.prop"
            v-bind="item"
            :class="item.cka"
            :formatter="handleSign"
            show-overflow-tooltip
            sortable
            v-if="item.isShow"
            :sort-method="(a, b) => sortMethod(a, b, item.prop)"
          >
          </el-table-column>
          <el-table-column width="50" align="right">
            <template slot="header" slot-scope="scope">
              <el-popover placement="bottom" width="150" trigger="click">
                <el-checkbox-group
                  v-model="checkList"
                  @change="
                    val => {
                      changeCheckbox(val, headLine, title, i);
                    }
                  "
                >
                  <el-checkbox
                    :label="item.label"
                    v-for="(item, i) in headLine"
                    :key="i"
                    style="display: block;"
                    >{{ item.label }}</el-checkbox
                  >
                </el-checkbox-group>
                <span class="filterClass" slot="reference"
                  ><i class="iconfont icon-logkeeper-setting"></i
                ></span>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div
      v-if="isTotalBlock"
      class="monitoring-common-chart"
      style="height: 100%;border-radius: 6px;padding: 0 15px;"
    >
      <div
        v-for="(item, index) in polar.series"
        :key="index"
        class="block-list"
      >
        <svg class="icon" aria-hidden="true" style="margin-right: 8px">
          <use :xlink:href="item.icon"></use>
        </svg>
        <span>{{ item.name }}</span>
        <span class="block-list-num">
          <span
            :class="{
              'color-black':
                item.name === '日交易总量' || item.name === '成功率',
              abnormal: item.name === '日异常总量'
            }"
            >{{ item.num }}</span
          >
          <span>
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.ql"
              placement="top"
              style="margin-left: 10px;cursor: pointer"
            >
              <i class="el-icon-info" style="color: rgba(169, 189, 199, 1)"></i>
            </el-tooltip>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
// 支持数据格式(line,pie,bar,table,block)
import {
  ref,
  reactive,
  computed,
  onMounted,
  watch,
  watchEffect
} from "@vue/composition-api";
import {
  formatterBt,
  formatterKb,
  formatterMb,
  formatterGb,
  formatterMs,
  formatterS,
  formatterM,
  formatterH,
  formatterPt,
  formatterTime
} from "@/views/page/alarmCenter/dashboard/formatterData";
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/lines";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/graph";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/markLine";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/polar";
import "echarts/lib/component/legendScroll";
import theme from "./echart_theme.json";
// import { chartType } from "@/views/page/alarmCenter/dashboard/transformData";
// import { getUID } from "@/utils/common";
// import { nextTick } from "_@vue_composition-api@1.0.0-beta.18@@vue/composition-api";
// registering custom theme
ECharts.registerTheme("ovilia-green", theme);
export default {
  name: "commonChart",
  components: {
    "v-chart": ECharts
  },
  props: {
    isDropDown: {
      // 是否显示dropdown的操作
      type: Boolean,
      default: () => true
    },
    isMonitoring: {
      // 是否是监控页面
      type: Boolean,
      default: () => false
    },
    isBorder: {
      // 是否显示四周的边框
      type: Boolean,
      default: () => true
    },
    isShowChartTitle: {
      // 是否显示echarts图表的title
      type: Boolean,
      default: () => false
    },
    i: {
      type: String,
      default: () => ""
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    data: {
      type: Object,
      default: function() {
        return {
          title: {
            text: "title"
          }
        };
      }
    },
    isHasHeader: {
      // 是否显示header
      type: Boolean,
      default: () => true
    }
  },
  setup(props, { root, refs, emit }) {
    const headLine = computed(
      () =>
        (props.data.custom &&
          props.data.custom.headLine &&
          props.data.custom.headLine.data) ||
        []
    );
    let searchName = ref("");
    let checkList = ref([]);
    let isCheckBox = ref(false);
    let LocalStorageCheckList = ref([]);
    LocalStorageCheckList.value = JSON.parse(
      global.myLocalStorage.getItem(
        props.i + "-" + (props.data.title && props.data.title.text)
      )
    );
    if (LocalStorageCheckList.value && headLine) {
      checkList.value = LocalStorageCheckList.value;
      headLine.value.map(list => {
        if (checkList.value.indexOf(list.label) === -1) {
          // Vue.$set(list,'isShow',false)
          list.isShow = false;
        } else {
          list.isShow = true;
        }
      });
    } else {
      props.data.custom && props.data.custom.checkList
        ? (checkList.value = props.data.custom.checkList)
        : null;
    }
    function changeCheckbox(val, data, title, i) {
      isCheckBox.value = true;
      data.map(list => {
        if (val.indexOf(list.label) === -1) {
          list.isShow = false;
        } else {
          list.isShow = true;
        }
      });
      global.myLocalStorage.setItem(i + "-" + title, JSON.stringify(val));
      // console.log(global);
      // console.log(root);
      // console.log(i);
      // console.log(title);
      // console.log(val);
      // console.log(data);
    }
    function sortMethod(obj1, obj2, column) {
      //对表格列进行排序逻辑
      var at = obj1[column];
      var bt = obj2[column];
      // console.log(at, bt)
      if (Number(at) > Number(bt)) {
        return -1;
      } else {
        return 1;
      }
    }
    function handleSign(row, column, cellValue, index) {
      // console.log(headLine);
      let result = null;
      headLine.value.map(item => {
        if (item.prop === column.property) {
          if (item.unitType === "TIME") {
            switch (item.unitValue) {
              case "ms":
                result = formatterMs(cellValue, item);
                break;
              case "s":
                result = formatterS(cellValue, item);
                break;
              case "m":
                result = formatterM(cellValue, item);
                break;
              case "h":
                result = formatterH(cellValue, item);
                break;
              case "d":
                result = cellValue.toFixed(item.precisions) + "d";
                break;
            }
          } else if (item.unitType === "COMPUTER") {
            switch (item.unitValue) {
              case "bytes":
                result = formatterBt(cellValue, item, "bytes");
                break;
              case "kb":
                result = formatterKb(cellValue, item, "kb");
                break;
              case "mb":
                result = formatterMb(cellValue, item, "mb");
                break;
              case "gb":
                result = formatterGb(cellValue, item);
                break;
              case "tb":
                result = cellValue.toFixed(item.precisions) + "TB";
                break;
            }
          } else if (item.unitType === "PERCENTAGE") {
            switch (item.unitValue) {
              case "%":
                result = formatterPt(cellValue, item);
                break;
            }
          } else if (item.unitType === "RATE") {
            switch (item.unitValue) {
              case "b/s":
                result = formatterBt(cellValue, item, "b/s");
                break;
              case "k/s":
                result = formatterKb(cellValue, item, "k/s");
                break;
              case "m/s":
                result = formatterMb(cellValue, item, "m/s");
                break;
              case "g/s":
                result = cellValue.toFixed(item.precisions) + "g/s";
                break;
            }
          } else if (item.unitType === "TIMEFORMAT") {
            formatterTime(cellValue, item.unitValue);
          } else {
            if (item.precisions) {
              item.unitValue
                ? (result =
                    Number(cellValue).toFixed(item.precisions) + item.unitValue)
                : (result = Number(cellValue).toFixed(item.precisions));
            } else {
              result = cellValue;
              // cellValue.indexOf('.') !== -1 ? result = Number(cellValue).toFixed(2) : result = cellValue
            }
          }
        }
      });
      return result;
    }
    function resize() {
      refs["vchart"] && refs["vchart"].resize();
    }
    function handleDropDown(command) {
      emit("dropdown", command, props.i, props.data.title.text || "default");
    }
    const polar = computed(() => {
      if (props.data.title) {
        const { title, ...helloWorld } = props.data;
        if (props.isShowChartTitle) {
          return props.data;
        }
        // console.log(helloWorld);
        return helloWorld;
      }
      return props.data;
    });
    function scalarArrayEquals(array1, array2) {
      return (
        array1.length === array2.length &&
        array1.every(function(v, i) {
          return v === array2[i];
        })
      );
    }
    watch(
      props,
      function(newVal, oldVal) {
        if (!isCheckBox.value) {
          LocalStorageCheckList.value = JSON.parse(
            global.myLocalStorage.getItem(
              newVal.i + "-" + (newVal.data.title && newVal.data.title.text)
            )
          );
          // console.log(LocalStorageCheckList.value);
          if (LocalStorageCheckList.value && headLine) {
            checkList.value = LocalStorageCheckList.value;
            headLine.value.map(list => {
              if (checkList.value.indexOf(list.label) === -1) {
                list.isShow = false;
              } else {
                list.isShow = true;
              }
            });
          } else {
            newVal.data.custom && newVal.data.custom.checkList
              ? (checkList.value = newVal.data.custom.checkList)
              : null;
          }
        }
      }
      // {
      //   immediate: true
      // }
    );
    const title = computed(() => props.data.title.text || "default");
    const isBlock = computed(
      () => props.data.custom && props.data.series[0].type === "block"
    );
    const isTotalBlock = computed(() => {
      return (
        props.data.series &&
        props.data.series[0] &&
        props.data.series[0].type === "totalBlock"
      );
    });
    const isTable = computed(
      () => props.data.custom && props.data.series[0].type === "table"
    );
    const blockText = computed(() => props.data.series[0].data);
    const customStyle = computed(
      () => (props.data.custom && props.data.custom.style) || ""
    );
    // console.log(props.data);
    const tableData = computed(() => {
      if (searchName.value) {
        let data = JSON.parse(
          JSON.stringify((props.data.custom && props.data.series[0].data) || [])
        ).filter(dataNews => {
          return Object.keys(dataNews).some(key => {
            return (
              String(dataNews[key])
                .toLowerCase()
                .indexOf(searchName.value) !== -1
            );
          });
        });
        return data;
      } else {
        return (props.data.custom && props.data.series[0].data) || [];
      }
    });
    function getCss(data, unitType) {
      //PERCENTAGE
      let num = null;
      if (unitType === "PERCENTAGE") {
        num = data * 100;
      } else {
        num = data;
      }
      if (parseInt(num) >= 90) {
        return {
          background: "rgba(242, 48, 48, 1)",
          color: "#ffffff"
        };
      }
      if (parseInt(num) >= 50 && parseInt(num) < 90) {
        return {
          background: "rgba(255, 152, 77, 1)",
          color: "#ffffff"
        };
      }
      if (parseInt(num) <= 50) {
        return {
          background: "rgba(19, 191, 177, 1)",
          color: "#ffffff"
        };
      }
    }
    const cellStyle = computed(
      () => ({ row, column, rowIndex, columnIndex }) => {
        // console.log(row);
        if (
          column.label === "内存使用率" ||
          column.label === "CPU使用率" ||
          column.label === "分区使用率"
        ) {
          let sty = {};
          headLine.value.map(item => {
            if (item.label === column.label) {
              sty = getCss(row[column.property], item.unitType);
            }
          });
          return sty;
        } else {
          const propStyle = props.data.custom && props.data.series[0].cellStyle;
          const helloWrold =
            propStyle &&
            propStyle.find(
              item =>
                item.rowIndex === rowIndex && item.columnIndex === columnIndex
            );
          return helloWrold ? helloWrold.style : {};
        }
      }
    );
    return {
      searchName,
      changeCheckbox,
      isTotalBlock,
      polar,
      title,
      isBlock,
      blockText,
      customStyle,
      isTable,
      headLine,
      cellStyle,
      tableData,
      resize,
      handleDropDown,
      handleSign,
      sortMethod,
      checkList
    };
  },
  methods: {
    legendselectchanged(item) {
      let selectedName = item.name;
      let selectedArray = item.selected;
      let length = Object.keys(selectedArray).length;
      let unselectedNum = 0;
      for(let key in selectedArray){
        if(!selectedArray[key]){
          unselectedNum++;
        }
      }
      if(length !== 1){
        if(length === unselectedNum){
          this.$refs.vchart.dispatchAction({
            type: 'legendAllSelect'
          });
        }
        if(unselectedNum === 1){
          this.$refs.vchart.dispatchAction({
            type: 'legendInverseSelect'
          });
        }
        if(length - unselectedNum >= 2){
          for(let key in selectedArray){
            if(key === selectedName){
              this.$refs.vchart.dispatchAction({
                type: 'legendSelect',
                name: key
              });
            }
            else{
              this.$refs.vchart.dispatchAction({
                type: 'legendUnSelect',
                name: key
              });
            }
          }
        }
      }
    }
  }
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
<style>
/*.el-table-filter .el-table-filter__bottom{*/
/*  display: none;*/
/*}*/
</style>
<style lang="less" scoped>
/deep/ .el-table-filter__bottom {
  display: none;
}
.echarts-table /deep/ .el-table__column-filter-trigger i {
  font-size: 0;
}
.select-column {
  width: 120px;
  height: 272px;
  background: #ffffff;
  box-shadow: 0px 2px 6px 0px rgba(55, 78, 113, 0.3);
  border-radius: 6px;
  //position: fixed;
  //z-index: 9;
  text-align: left;
  padding: 5px 10px;
  box-sizing: border-box;
  //overflow: hidden;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
<style lang="scss" scoped>
.echarts {
  width: 100% !important;
  height: 100% !important;
  position: inherit !important;
}
.search-name /deep/ .el-input__inner {
  border-radius: 15px;
}
</style>
