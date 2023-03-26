<template>
  <div style="max-width: 900px; margin: 0 auto"  class="px-5">
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
