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
    <div class="bg-blue-grey-lighten-5 text-center py-12">
      <div class="container text-blue-grey-darken-4">
        <h2>“I have a bad knee and need to strengthen without injuring it.”</h2>
        <h3 class="mt-5">— Anne Spackman, 65yo</h3>
      </div>
    </div>
<!--     <div class="bg-blue-grey-darken-4">
      <div class="container text-white d-flex align-center">
        <div>
          <h3>BRAZILIAN JIU JITSU / SELF DEFENSE</h3>
          <p>
            Enhance mental focus and reduces stress with this Brazilian martial
            art
          </p>
          <button @click="router.push(`/service/`)" class="mt-4 red block">
            Ask for info
          </button>
        </div>
        <div class="image-jiu"></div>
      </div>
    </div> -->
    <BaseFooter />
  </div>
</template>

<script>
import SiteHero from "@/components/SiteHero.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import ServiceItem from "@/components/ServiceItem.vue";
import services from "@/data/services.js";
import logo from "@/assets/images/logo.svg";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    BaseFooter,
    SiteHero,
    ServiceItem,
  },
  setup() {
    return {
      logo,
      services,
    };
  },
});
</script>

<style lang="scss" scoped>
.image-jiu {
  position: relative;
  flex: 1;
  width: 100%;
  height: 260px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      90deg,
      #263238 14%,
      rgba(0, 0, 0, 0) 80%,
      #263238 100%
    ),
    url("https://images.unsplash.com/photo-1624938518616-3be0add427d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
}
</style>
