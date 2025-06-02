<style lang="less" scoped></style>

<template>
  <v-chart v-if="props.data && props.data.list" class="limit" :option="chartData" :update-options="{ notMerge: true }" :autoresize="true" ref="chartRef" />
</template>

<script setup lang="ts">
// import { Loading, EmptyView } from "@/components/Base";
import { ref, reactive, computed } from "vue";
import { deepMerge, hexToRgba } from "@/utils/utils";
import dayjs from "dayjs";

defineExpose({ resize, clear, dispose });
const chartRef = ref();
function resize() {
  if (chartRef.value) {
    chartRef.value?.resize();
  }
}
function clear() {
  chartRef.value?.clear();
}
function dispose() {
  chartRef.value?.dispose();
}

const props = withDefaults(
  defineProps<{
    data: any;
    opts?: {
      colors?: any[];
    };
    souceOpts?: AnyObject;
  }>(),
  {
    opts: () => {
      return {};
    },
    souceOpts: () => {
      return {};
    },
  }
);

const times = [];
for (let i = 1; i <= 60; i++) {
  times.push(i);
}

// 图表配置
const chartData = computed(() => {
  const option = {
    polar: {
      radius: [30, "80%"],
    },
    radiusAxis: {
      axisTick: {
        show: false,
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ["#D0EFF0", "#D0EFF0", "#FCF7EB", "#FEF0EB"]
        }
      },
      splitLine: {
        lineStyle: {
          width: 3,
          color: ["#f00", "#f0f"],
        }
      },
      scale: true,
      splitNumber: 3,
    },
    angleAxis: {
      type: "category",
      data: times,
      startAngle: 90,
      axisLabel: {
        interval: 0,
        formatter: function (value) {
          return value % 5 === 0 ? Math.ceil(value / 5) : "";
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: "#ECEFEF",
        },
      },
    },

    tooltip: {},
    series: {
      type: "bar",
      data: [2, 1, 3],
      coordinateSystem: "polar",
      label: {
        show: true,
        position: "middle",
        formatter: "{b}: {c}",
      },
    },
  };
  return option;
});
</script>
