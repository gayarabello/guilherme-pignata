<template>
  <div class="mobile">
    <div class="my-8 py-2 px-6">
      <h4 class="my-4">{{ title }}</h4>
      <p v-html="description"></p>
      <v-btn
        variant="flat"
        color="red"
        @click="router.push('initial-consultation')"
        class="my-4"
      >
        Book consultation
      </v-btn>
      <v-btn
        @click="router.push(`/service/${serviceId}`)"
        variant="outlined"
        class="my-4 ml-4"
      >
        See Plans
      </v-btn>
    </div>
  </div>
  <div class="desktop">
    <v-container class="container">
      <v-row class="align-center my-2 py-2">
        <v-col cols="12" md="6">
          <h3
            :style="{
              backgroundImage: `url(${backgroundUrl})`,
              backgroundSize: 'cover',
            }"
            class="subtitle"
          >
            {{ subtitle }}
          </h3>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="my-4 text-uppercase font-weight-bold">
            {{ title }}
          </h3>
          <p v-html="description"></p>
          <v-btn
            variant="flat"
            color="red"
            @click="router.push('initial-consultation')"
            class="my-4"
          >
            Book consultation
          </v-btn>
          <v-btn
            @click="router.push(`/service/${serviceId}`)"
            variant="outlined"
            class="my-4 ml-4"
          >
            See Plans
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
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
    const backgroundUrl = require(`@/assets/images/${props.serviceId}.png`);

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
}
</style>
