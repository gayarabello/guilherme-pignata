<template>
  <v-app>
    <v-navigation-drawer
      v-model="toggleDrawer"
      location="left"
      temporary
      color="#172835"
    >
      <div class="d-flex align-center pa-4">
        <v-btn
          class="mr-4"
          color="white"
          @click="toggleDrawer = false"
          icon="mdi-close"
          variant="outlined"
        ></v-btn>
        <img :src="logo" alt="logo" height="30" />
      </div>

      <div class="d-flex flex-column">
        <router-link class="mb-4" to="/">Home</router-link>
        <router-link class="mb-4" to="/service/health-coach">Health Coach</router-link>
        <router-link class="mb-4" to="/service/personal-training"
          >Personal Training</router-link
        >
        <v-btn
          size="small"
          class="initial-consutation-cta"
          to="/initial-consultation"
          >Initial Consultation</v-btn
        >
      </div>
    </v-navigation-drawer>
    <NavigationBar @toggle-drawer="toggleDrawer = true" />
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import { defineComponent, ref } from "vue";
import logo from "@/assets/images/logo.svg";

export default defineComponent({
  name: "App",
  components: {
    NavigationBar,
  },
  setup() {
    const toggleDrawer = ref(false);

    return {
      logo,
      toggleDrawer,
    };
  },
});
</script>

<style lang="scss">
@import "./css/index.scss";
</style>
