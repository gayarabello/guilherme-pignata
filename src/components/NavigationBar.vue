<template>
  <div class="bg-blue-9 text-white">
    <div class="mobile">
      <div class="d-flex align-center pa-4">
        <v-btn
          class="mr-4"
          @click="$emit('toggle-drawer')"
          icon="mdi-menu"
          variant="outlined"
        ></v-btn>
        <img
          class="cursor-pointer"
          @click="$router.push(`/`)"
          :src="logo"
          alt="logo"
          height="40"
        />
      </div>
    </div>
    <div class="desktop">
      <div
        class="d-flex container justify-space-between align-center py-3"
      >
        <div class="cursor-pointer mt-2" @click="$router.push(`/`)">
          <img :src="logo" alt="logo" height="40" />
        </div>
        <div class="flex align-baseline">
          <router-link to="/">Home</router-link>
          <router-link to="/service/health-coach">Health Coach</router-link>
          <router-link to="/service/personal-training"
            >Personal Training</router-link
          >
          <router-link to="/initial-consultation"
            >Initial Consultation</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.svg";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  emits: ["toggle-drawer"],
  setup() {
    return {
      logo,
    };
  },
};
</script>
