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
    <div class="container bg-blue-grey-lighten-5 mb-12">
      <v-carousel color="#b5cedf" hide-delimiters style="height: auto !important;">
        <v-carousel-item class="d-flex align-center mx-auto">
          <div style="max-width: 80%" class="mx-auto py-6">
            <h2 class="mb-3">
              "I have also never felt so athletic and healthy.
            </h2>
            <p class="mb-3">
              Like everyone who starts working out at a gym, I didn't know
              exactly what to do to reach my goals. What I wanted from the
              beginning was to lose weight and become more athletic.
            </p>
            <p class="mb-3">
              Gui helpedme with tips on dieting and creating an exercise plan
              tailored to my body type, aiming for weight loss and management in
              a safe and sustainable way, while also making me more fit.
              Honestly, I had never had a personal trainer before, but
              everything has been ideal for me.
            </p>
            <p class="mb-3">
              I always receive satisfactory answers to all my questions and get
              corrected if I do something incorrectly. I have lost about 17-20
              kg, and now we are working on the next 10 kg. Not only that, but I
              have also never felt so athletic and healthy."
            </p>
            <h4 class="mt-5">— Grisha Zohrabyan</h4>
          </div>
        </v-carousel-item>
        <v-carousel-item class="d-flex align-center mx-auto">
          <div style="max-width: 80%" class="mx-auto py-6">
            <h2 class="mb-3">
              "I have a bad knee and need to strengthen without injuring it.
            </h2>
            <p class="mb-3">
              I have a bad knee and need to strengthen it without injuring it. I
              also wanted to increase the variety of activities I can do in the
              gym. I was concerned that a trainer would want to push me beyond
              the limits of my knee.
            </p>
            <p class="mb-3">
              When I met Gui, we had a quick chat and he explained how working
              with him would be and that allayed my concerns. Gui patiently
              explains how small changes make a bigger impact; pushes me to
              stretch, understanding when it’s enough; varies the exercises from
              week to week just enough to make it enjoyable.
            </p>
            <p class="mb-3">
              Now I feel stronger, particularly in my legs which is good for the
              knee. I understand the value of certain exercises better and how
              to make them effective - like lifting weights. I enjoy the gym
              more."
            </p>
            <h4 class="mt-5">— Anne Spackman, 65yo</h4>
          </div>
        </v-carousel-item>

        <v-carousel-item class="d-flex align-center mx-auto">
          <div style="max-width: 80%" class="mx-auto py-6">
            <h2 class="mb-3">
              "I always feels renewed and happy after our sessions.
            </h2>
            <p class="mb-3">
              Due to a birth injury I was quite apprehensive about starting the
              Personal Training sessions. It’s something that I've been
              extremely self conscious about my whole life and avoid talking
              about at all costs!
            </p>
            <p class="mb-3">
              But I needed to strengthen my right arm, and improve my overall
              fitness. Since the induction, Guy has been incredibly patient with
              me, but mostly compassionate which has helped immensely in
              building my confidence inside and outside of the gym.
            </p>
            <p class="mb-3">
              My confidence and self worth has improved A LOT. I always feels
              renewed and happy after our sessions. I’ve also noticed improved
              strength in my arm since starting our sessions."
            </p>
            <h4 class="mt-5">— Sharleen De Villiers, 34yo</h4>
          </div>
        </v-carousel-item>
      </v-carousel>
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
