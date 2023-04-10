<template>
  <div>
    <div style="color: white; padding-bottom: 4rem;" class="bg-blue-8 py-6">
      <div class="container">
        <h2 style="font-size: 2rem; max-width: 30rem; line-height: 110%">
          <span style="font-weight: 300">
            {{
              PRICES.find((service) => service.id === $route.params.id).online
                ? "ONLINE "
                : "IN PERSON "
            }}
          </span>
          <span>
            {{ PRICES.find((service) => service.id === $route.params.id).type }}
          </span>
          <span style="font-weight: 300"> PROGRAMS </span>
        </h2>
      </div>
    </div>

    <HealthPriceTable v-if="$route.params.id.includes('health')"/>
    <PersonalPriceTable v-if="$route.params.id.includes('personal')"/>
    <BaseFooter/>

<!--     <PlanItem
      v-for="{ title, price, period, planPoints } in plans[$route.params.id]"
      :key="title"
      :title="title"
      :price="price"
      :period="period"
      :planPoints="planPoints"
    /> -->
  </div>
</template>
<script>
//import PlanItem from "@/components/PlanItem.vue";
import plans from "@/data/plans.js";
import services from "@/data/services.js";
import { PRICES } from "@/data/prices.js";
import BaseFooter from "@/components/BaseFooter.vue";
import HealthPriceTable from "@/components/HealthPriceTable.vue";
import PersonalPriceTable from "@/components/PersonalPriceTable.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    BaseFooter, HealthPriceTable, PersonalPriceTable
  },
  setup() {
      const router = useRouter();
    return {
      plans,
      services,
      router,
      PRICES,
    };
  },
};
</script>
