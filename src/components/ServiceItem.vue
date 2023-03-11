<template>
    <div class="my-8 py-2">
        <h4 class="my-4">{{ title }}</h4>
        <p v-html="description"></p>
        <button @click="router.push(`/service/${serviceId}`)"  class="my-4 red block">
          {{action}}
        </button>        
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
    description: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  setup(){
    const router = useRouter()
    return {
      router
    }
  }
};
</script>
