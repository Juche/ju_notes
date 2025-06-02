<template>
  <div
    id=""
    v-if="data && data.length > 0"
    style="padding: 20px;box-sizing: border-box"
  >
    <el-row :gutter="20">
      <el-col
        v-if="item !== undefined && item !== null"
        :style="{ height: item.h + 'px' }"
        style="margin-bottom: 20px"
        :span="item.w * 2"
        v-for="(item, index) in data"
        :key="index"
      >
        <commonChart
          :data="item"
          ref="commonChart"
          :is-show-chart-title="false"
          i="monitor"
          :loading="false"
          :is-drop-down="false"
          :is-monitoring="true"
        ></commonChart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import commonChart from "@/components/xt/commonChart/commonChart";
export default {
  name: "tabContent",
  components: {
    commonChart
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    echartsResize() {
      if (this.$refs["commonChart"]) {
        this.$refs["commonChart"].map(item => {
          item.resize();
        });
      }
      // this.$refs["commonChart"] && this.$refs["commonChart"].resize();
    }
  },
  created() {
    console.log(this.data);
  },
  mounted() {
    window.addEventListener("resize", this.echartsResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.echartsResize);
  },
  watch: {
    data: {
      handler: function(val, oldVal) {
        // console.log(val);
        // this.$forceUpdate();
      },
      deep: true //对象内部的属性监听，也叫深度监听
    }
  }
};
</script>

<style lang="less" scoped></style>
