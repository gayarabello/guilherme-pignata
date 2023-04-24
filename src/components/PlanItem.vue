<template>
  <v-sheet class="ma-2 pa-8">
    <h4 class="mb-3">{{ name }}</h4>
    <h2 class="mb-3">£{{price}}<span class="font-weight-regular">/month</span></h2>
    <ul>
      <li class="cursor-pointer" @click="$emit('show-base-package')">
        <p class="font-weight-bold text-blue text-link">
          Base Package <v-icon size="small">mdi-information-outline</v-icon>
        </p>
      </li>
      <li>
        <p>
          <span class="font-weight-bold">{{sessions}} 45-60 min online session</span>
          for exercises demonstration, adjustments, updates and followup
        </p>
      </li>
    </ul>
  </v-sheet>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
    emits: ["show-base-package"],
    props: {
        price: {
            type: String || Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        sessions: {
            type: String,
            required: true
        }
    },
});
</script>
