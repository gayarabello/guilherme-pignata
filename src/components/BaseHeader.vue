<template>
  <div class="flex space-between py-6 items-center bg-blue-9 text-white">
    <div @click="$router.push(`/`)">
      <h2>
        <span class="font-weight: 800">Gui</span
        ><span style="font-weight: 400">Pignata</span>
      </h2>
      <span style="font-size: 0.65rem">HEALTH COACH & PERSONAL TRAINER</span>
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

