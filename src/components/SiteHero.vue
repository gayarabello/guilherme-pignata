<template>
  <div class="mobile container bg-blue-8 text-white pa-6 mx-auto">
    <h1>Expert guidance for a healthier you.</h1>
    <div class="avatar mt-n12"></div>
    <h2 class="mt-n12">
      Level 3 accredited Personal Trainer and Nutrition Advisor
    </h2>
    <h3 class="text-overline mt-3">Specialised in:</h3>
    <ul class="mb-3">
      <li>Pre & Post Natal Training</li>
      <li>Senior Fitness</li>
      <li>Preventing & Managing Diabetes</li>
    </ul>

    <v-btn
      variant="flat"
      color="red"
      @click="$router.push('initial-consultation')"
    >
      Free initial Consultation
    </v-btn>
  </div>
  <!--   clip-path: polygon(100% 0, 100% 88%, 50% 100%, 0 88%, 0 0);  -->
  <div class="desktop bg-blue-8 py-8">
    <v-row class="container mx-auto text-white">
      <v-col>
        <h1>Expert guidance for a healthier you</h1>
        <h4>Level 3 accredited Personal Trainer and Nutrition Advisor</h4>
        <h3 class="text-overline mt-3">Specialised in:</h3>
        <ul class="mb-3">
          <li>Pre & Post Natal Training</li>
          <li>Senior Fitness</li>
          <li>Preventing & Managing Diabetes</li>
        </ul>

        <v-btn
          variant="flat"
          color="red"
          class="d-block"
          @click="$router.push('initial-consultation')"
        >
          Free initial Consultation
        </v-btn>
      </v-col>
      <v-col>
        <div class="avatar mx-auto"></div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
.avatar {
  display: block;
  background-image: linear-gradient(
      180deg,
      rgba($blue-8, 0) 0%,
      rgba($blue-8, 0.8) 97%
    ),
    url("@/assets/images/avatar.png");
  width: 20rem;
  height: 20rem;
  background-size: cover;
}
</style>
