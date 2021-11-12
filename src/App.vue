<template>
  <div>
    <MyButton></MyButton>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据

  components: {
    MyButton,
  },
  // 组件状态值
  data() {
    return {};
  },
};
</script> 


<style scoped>
</style>
