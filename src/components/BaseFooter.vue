<template>
  <div class="bg-blue-9 text-white">
    <v-row class="container py-8 mx-auto">
      <v-col
        cols="12"
        md="3"
        class="d-flex flex-wrap align-content-space-between"
      >
        <img :src="logo" alt="logo" height="40" />
        <h6 class="desktop">©2023 All rights reserved.</h6>
      </v-col>
      <v-col class="d-flex flex-column">
        <v-btn variant="plain" @click="$router.push('/service/health-coach')"
          >Health Coach</v-btn
        >
        <v-btn
          variant="plain"
          @click="$router.push('/service/personal-training')"
          >Personal Training</v-btn
        >
        <v-btn variant="plain" @click="$router.push('initial-consultation')"
          >Initial Consultation</v-btn
        >
      </v-col>
      <v-col cols="12" md="4" class="pl-6">
        <h3 class="mb-8">Let's get started!</h3>
        <h5><v-icon>mdi-whatsapp</v-icon> 07864 7863 09</h5>

        <h5 class="my-4 mx-none">
          <v-icon>mdi-email</v-icon> coachguipignata@gmail.com
        </h5>

        <a href="http://www.instagram.com/coachguipignata" target="_blank">
        <h5>
          <v-icon>mdi-instagram</v-icon>
            @coachguipignata
          </h5>
        </a>
        <h6 class="mt-12 mobile">©2023 All rights reserved.</h6>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.svg";

export default {
  name: "BaseFooter",
  setup() {
    return {
      logo,
    };
  },
};
</script>
