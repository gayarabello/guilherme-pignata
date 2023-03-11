<template>
    <div>
    <SiteHero />
    <button class="white block" @click="$router.push('initial-consultation')"> Free initial Consultation</button>
    <ServiceItem
      v-for="{title, id, description, action} in services"
      :serviceId="id"
      :key="title"
      :title="title"
      :description="description"
      :action="action"
    />
    </div>
</template>

<script>

import SiteHero from "@/components/SiteHero.vue";
import ServiceItem from "@/components/ServiceItem.vue";
import services from '@/data/services.js'

export default {
  name: "HomePage",
  components: {
    SiteHero,
    ServiceItem,
  },
  setup() {
    return {
      services
    };
  },
};
</script>