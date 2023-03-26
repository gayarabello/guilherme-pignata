<template>
  <div class="mobile service-item my-8 py-2">
    <h4 class="my-4">{{ title }}</h4>
    <p v-html="description"></p>
    <button
      @click="router.push(`/service/${serviceId}`)"
      class="my-4 red block"
    >
      {{ action }}
    </button>
  </div>
  <div class="desktop flex my-8 py-6">
    <div style="flex: 6; ">
      <h3 style="font-size: 2rem; color: white; max-width: 360px; padding: 2rem; background-color: rgba(0,0,0,0.4)">{{ subtitle }}</h3>
    </div>
    <div style="flex: 6; max-width: 400px;" >
      <h3 style="text-transform: uppercase">
        {{ title }}
      </h3>
      <p v-html="description"></p>
      <button
        @click="router.push(`/service/${serviceId}`)"
        class="my-4 red block"
      >
        {{ action }}
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    serviceId: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
<style lang="scss">
.service-item {
  max-width: 30%;
  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
}
</style>
