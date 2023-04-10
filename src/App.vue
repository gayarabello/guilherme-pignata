<template>
  <div >
    <BaseHeader/>
    <router-view ></router-view>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";
export default {
  name: "App",
  components: {
    BaseHeader,    
  },
};
</script>

<style lang="scss">
@import "./css/index.scss";

</style>
