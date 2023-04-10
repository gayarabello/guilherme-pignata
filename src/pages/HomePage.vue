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
    <div
      style="
        background-color: #f1f1f1;
        height: 280px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      "
    >
      <div style="max-width: 960px">
        <div
          style="
            font-size: 30px;
            font-weight: 700;
            line-height: 120%;
            color: #1a2e3c;
          "
        >
          “I have a bad knee and need to strengthen without injuring it.”
        </div>
        <div
          style="
            font-size: 16px;
            font-weight: 400;
            line-height: 160%;
            margin-top: 1rem;
          "
        >
          — Anne Spackman, 65yo
        </div>
      </div>
    </div>
    <div style="background-color: #172835">
      <div
        style="
          max-width: 960px;
          margin: 0 auto;
          color: white;
          display: flex;
          align-items: center;
        "
      >
        <div style="flex: 1; padding-right: 2rem">
          <div style="font-size: 24px; font-weight: 700; line-height: 120%">
            BRAZILIAN JIU JITSU / SELF DEFENSE
          </div>
          <div
            style="
              font-size: 16px;
              font-weight: 400;
              line-height: 150%;
              margin-top: 1rem;
            "
          >
            Enhance mental focus and reduces stress with this Brazilian martial
            art
          </div>
          <button @click="router.push(`/service/`)" class="my-4 red block">
            Ask for info
          </button>
        </div>
        <div
          style="
            position: relative;
            flex: 1;
            width: 100%;
            height: 260px;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: linear-gradient(
                90deg,
                #172835 14%,
                rgba(0, 0, 0, 0) 80%,
                #172835 100%
              ),
              url('https://images.unsplash.com/photo-1624938518616-3be0add427d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
          "
        ></div>
      </div>
    </div>
  <BaseFooter/>
  </div>
</template>

<script>
import SiteHero from "@/components/SiteHero.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import ServiceItem from "@/components/ServiceItem.vue";
import services from "@/data/services.js";
import logo from "@/assets/images/logo.svg";

export default {
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
};
</script>
