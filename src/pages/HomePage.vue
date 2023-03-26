<template>
  <div>
    <SiteHero />

    <ServiceItem
      v-for="{ title, id, description, action, subtitle } in services"
      :serviceId="id"
      :key="title"
      :title="title"
      :description="description"
      :subtitle="subtitle"
      :action="action"
    />
  </div>
</template>

<script>
import SiteHero from "@/components/SiteHero.vue";
import ServiceItem from "@/components/ServiceItem.vue";
import services from "@/data/services.js";

export default {
  name: "HomePage",
  components: {
    SiteHero,
    ServiceItem,
  },
  setup() {
    return {
      services,
    };
  },
};
</script>
