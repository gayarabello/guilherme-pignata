<template>
  <div class="mobile container">
    <h1>Expert guidance for a healthier you.</h1>

    <div class="avatar"></div>
    <h2 style="margin-top: -3rem">
      Level 3 accredited Personal Trainer and Nutrition Advisor specialized in:
    </h2>
    <ul class="my-3">
      <li>Pre & Post Natal Training</li>
      <li>Senior Fitness</li>
      <li>Preventing & Managing Diabetes</li>
    </ul>

    <button class="white block" @click="$router.push('initial-consultation')">
      Free initial Consultation
    </button>
  </div>
<!--   clip-path: polygon(100% 0, 100% 88%, 50% 100%, 0 88%, 0 0);  -->
  <div class="desktop bg-blue-8" style="margin-bottom: -2rem; padding: 2rem 0 2.5rem 0 ">
    <div class="container flex items-center text-white">
      <div style="flex: 1">
        <h1>Expert guidance for a healthier you</h1>
        <h4 style="margin-top: 1rem">Level 3 accredited Personal Trainer and Nutrition Advisor</h4>
        <ul class="my-3">
          <li>Pre & Post Natal Training</li>
          <li>Senior Fitness</li>
          <li>Preventing & Managing Diabetes</li>
        </ul>

        <button
          class="white block"
          @click="$router.push('initial-consultation')"
        >
          Free initial Consultation
        </button>
      </div>
      <div style="flex: 1">
        <div class="avatar"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.avatar {
  display: block;
  margin-left: 4rem;  
  border-radius: 400px;
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
