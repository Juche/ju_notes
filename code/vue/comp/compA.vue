<template><button @click="toBus">子组件A-传给兄弟组件</button></template>

<script type="module">
import Bus from "../js/bus.js";
export default {
  methods: {
    toBus() {
      Bus.$emit("on", "来自兄弟组件");
    },
  },
};
</script>
