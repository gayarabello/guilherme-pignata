<template>
  <div>
    <h3>Plans</h3>
    <h2> {{services.find(service => service.id === $route.params.id).title}} </h2>

    <PlanItem
      v-for="{ title, price, period, planPoints } in plans[$route.params.id]"
      :key="title"
      :title="title"
      :price="price"
      :period="period"
      :planPoints="planPoints"
    />

  </div>
</template>
<script>
import PlanItem from "@/components/PlanItem.vue";
import plans from "@/data/plans.js";
import services from "@/data/services.js";

export default {
  components: {
    PlanItem,
  },
  setup() {
    return {
      plans,
      services
    };
  },
};
</script>
