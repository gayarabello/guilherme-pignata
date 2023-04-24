<template>
  <div class="bg-blue-8 pt-10">
    <div class="text-white">
      <div class="container text-center">
        <h2>
          <span class="font-weight-light">
            {{
              PRICES.find((service) => service.id === $route.params.id).online
                ? "ONLINE "
                : "IN PERSON "
            }}
          </span>
          <span>
            {{ PRICES.find((service) => service.id === $route.params.id).type }}
          </span>
          <span class="font-weight-light"> PROGRAMS </span>
        </h2>
        <h4 class="pt-4 pb-8">
          {{
            isHealthCoachPage
              ? "Learn how to make sustainable lifestyle changes in even the busiest of lives"
              : "Engaging in physical activity helps to maintain a healthy body weight and improve overall quality of life"
          }}
        </h4>
      </div>
    </div>

    <template v-if="isHealthCoachPage">
      <v-container class="container">
        <v-row no-gutters>
          <v-col cols="12" md="6">
            <PlanItem
              @show-base-package="toggleBasePackage(true)"
              :price="400"
              name="Base"
              sessions="One"
            />
          </v-col>
          <v-col cols="12" md="6">
            <PlanItem
              @show-base-package="toggleBasePackage(true)"
              :price="600"
              name="Full"
              sessions="Four"
            />
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-else>
      <div>
        <div class="container text-center mb-3">
          <v-btn-toggle
            mandatory
            v-model="quarterValues"
            rounded="xl"
            size="x-small"
          >
            <v-btn :class="quarterValues ? 'pay-not-selected' : 'pay-selected'"
              >Pay as you go</v-btn
            >
            <v-btn :class="quarterValues ? 'pay-selected' : 'pay-not-selected'"
              >3 months commitment
            </v-btn>
          </v-btn-toggle>
        </div>
        <v-container class="container">
          <v-row no-gutters>
            <v-col cols="12" md="4">
              <PlanItem
                @show-base-package="toggleBasePackage(true)"
                :price="quarterValues ? 50 : 70"
                name="Let's get started"
                sessions="One"
              />
            </v-col>
            <v-col cols="12" md="4">
              <PlanItem
                @show-base-package="toggleBasePackage(true)"
                :price="quarterValues ? 90 : 120"
                name="I Need a Push"
                sessions="Four"
              />
            </v-col>
            <v-col cols="12" md="4">
              <PlanItem
                @show-base-package="toggleBasePackage(true)"
                :price="quarterValues ? 150 : 200"
                name="Follow me Closely"
                sessions="Eight"
              />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </template>
    <div class="text-center mb-12">
      <v-btn href="https://calendly.com/coachgui" target="_blank" variant="flat" color="red">
        Book a free initial consultation
      </v-btn>
    </div>

    <BaseFooter />
    <v-dialog
      persistent
      :width="620"
      :modelValue="showPTBasePackage || showHCBasePackage"
    >
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center"
          >Base
          {{ PRICES.find((service) => service.id === $route.params.id).type }}
          Package
          <v-btn @click="closeDialogs()" icon="mdi-close" variant="icon" />
        </v-card-title>
        <v-card-text class="pt-0">
          <h4 class="text-overline text-center">all plans Base package:</h4>
          <template v-if="isHealthCoachPage">
            <div>
              <p>
                <v-icon color="green">mdi-check-circle-outline</v-icon> One
                45-60 minute online consultation a month for general habits
                (eating, moving, sleeping) advice and suggestions, evaluate
                progress, and identify new areas for development.
              </p>
              <p>
                <v-icon color="green">mdi-check-circle-outline</v-icon> Exercise
                plan periodised monthly with program delivered weekly straight
                to your phone with video demos and descriptions, and progress
                tracking: you train wherever and whenever you want, and stay on
                track
              </p>
              <p>
                <v-icon color="green">mdi-check-circle-outline</v-icon> Four
                10-12 min calls a month (one a week) for Q&A and follow up.
              </p>
              <p>
                <v-icon color="green">mdi-check-circle-outline</v-icon> Ongoing
                food diary evaluation
              </p>
              <p>
                <v-icon color="green">mdi-check-circle-outline</v-icon> Weekly
                habit tracking
              </p>
              <p>
                <v-icon color="green">mdi-check-circle-outline</v-icon> On-going
                body composition assessment / Progress tracking
              </p>
              <p>
                <v-icon color="green">mdi-check-circle-outline</v-icon> 3-months
                assessment online call (45-60min) for analysing progresses and
                defining next steps - should happen halfway on the 3rd month
              </p>
            </div>
          </template>
          <template v-else>
            <div>
              <p>
                <v-icon color="green">mdi-check-circle-outline</v-icon> 4 Q&A
                calls (10-12 min, once a week, can not be rolled over)
              </p>
              <p>
                <v-icon color="green">mdi-check-circle-outline</v-icon>
                On-going body composition assessment / Progress tracking
              </p>
              <p>
                <v-icon color="green">mdi-check-circle-outline</v-icon>
                Exercise plan periodised monthly with program delivered weekly
                straight to your phone with video demos and descriptions, and
                progress tracking
              </p>
            </div>
          </template>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn @click="closeDialogs()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import plans from "@/data/plans.js";
import services from "@/data/services.js";
import { PRICES } from "@/data/prices.js";
import PlanItem from "@/components/PlanItem.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import { useRouter, useRoute } from "vue-router";
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  components: {
    BaseFooter,
    PlanItem,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isHealthCoachPage = computed(() =>
      route.params.id.includes("health")
    );
    const quarterValues = ref(0);
    const showHCBasePackage = ref(false);
    const showPTBasePackage = ref(false);
    return {
      PRICES,
      router,
      plans,
      services,
      quarterValues,
      isHealthCoachPage,
      showPTBasePackage,
      showHCBasePackage,
      closeDialogs: () => {
        showHCBasePackage.value = false;
        showPTBasePackage.value = false;
      },
      toggleBasePackage: (value) => {
        isHealthCoachPage.value
          ? (showHCBasePackage.value = value)
          : (showPTBasePackage.value = value);
      },
    };
  },
});
</script>

<style lang="scss" scoped>
p {
  margin: 1rem 0;
}
button {
  font-size: 12px !important;
}
.pay-selected {
  background-color: white;
  border: 2px solid white;
  color: white;
}
.pay-not-selected {
  background-color: $blue-8;
  color: white;
  border: 2px solid white;
}
</style>
