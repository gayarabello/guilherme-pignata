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
  <div style="max-width: 960px; margin: 3rem auto; align-items: center;" class="desktop flex my-8 py-6">
    <div class="col-6">
      <h3 :style="{backgroundImage: `url(${backgroundUrl})`, backgroundSize: 'cover'}" class="subtitle">{{ subtitle }}</h3>
    </div>
    <div class="title">
      <h3 class="my-4" style="text-transform: uppercase; font-weight: 900;">
        {{ title }}
      </h3>
      <p v-html="description"></p>
      <button
      
        @click="router.push('initial-consultation')"
        class="my-4 red block"
      >
        Book a free consultation
      </button>
      <button
        @click="router.push(`/service/${serviceId}`)"
        style="color: #172835; border: 1px solid #172835"
        class="my-4 mx-4"
      >
      See Plans
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
  setup(props) {
    const router = useRouter();
    const backgroundUrl = require(`@/assets/images/${props.serviceId}.png`)
    
    return {
      backgroundUrl,
      router,
    };
  },
};
</script>
<style lang="scss">
.subtitle {
  font-size: 1.5rem;
  line-height: 130%;
  padding: 5rem 3rem;
  color: white;
  max-width: 360px;    
}

.col-6 {
  flex: 6
}

.title {
  flex: 6;
  max-width: 400px;
}

.service-item {
  max-width: 30%;
  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
}
</style>
