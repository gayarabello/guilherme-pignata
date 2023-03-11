<template>
  <div
    class="my-4 px-4 py-3"
    style="border: 1px solid #56ccf2; border-radius: 1rem"
  >
    <h2>{{ title }}</h2>
    <h3 class="my-4">
      £{{ price }}
      <span style="font-weight: 500">/ for {{ period }} months</span>
    </h3>
    <div :class="{ collapsed: !expanded }">
      <ul>
        <li v-for="planPoint in planPoints" :key="planPoint">
          {{ planPoint }}
        </li>
      </ul>
    </div>
    <button @click="toggleExpand">
      {{ expanded ? "show less" : "show more" }}
    </button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    planPoints: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
  },
  setup() {
    const expanded = ref(false);

    return {
      expanded,
      toggleExpand() {
        expanded.value = !expanded.value;
      },
    };
  },
};
</script>
<style>
.collapsed {
  height: 200px;
  overflow: hidden;
}
button {
  background: none;
  color: white;
  text-align: center;
  margin: 0 auto
}
</style>
