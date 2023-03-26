<template>
  <div style="cursor: pointer;" class="flex space-between py-6 items-center bg-blue-9 text-white">
    <div @click="$router.push(`/`)">
      <h2>
        <span class="font-weight: 800">Gui</span
        ><span style="font-weight: 400">Pignata</span>
      </h2>
      <span style="font-size: 0.65rem">HEALTH COACH & PERSONAL TRAINER</span>
    </div>
    <div class="flex">
      <router-link to="/service/health-coach">Health Coach</router-link>
      <router-link to="/service/personal-training">Personal Training</router-link>
      <router-link to="/service/jiu-jitsu">Jiu-jitsu</router-link>
    </div>  
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

