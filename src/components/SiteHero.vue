<template>
  <div class="mobile">
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
  <div class="desktop flex my-8 pb-8">
    <div style="flex: 1">
      <h1>Expert guidance for a healthier you.</h1>
      <ul class="my-3">
        <li>Pre & Post Natal Training</li>
        <li>Senior Fitness</li>
        <li>Preventing & Managing Diabetes</li>
      </ul>
      <button class="white block" @click="$router.push('initial-consultation')">
      Free initial Consultation
    </button>
    </div>
    <div style="flex: 1">
      <div class="avatar"></div>
      <h2 style="margin-top: -3rem">
        Level 3 accredited Personal Trainer and Nutrition Advisor
      </h2>
    </div>
  </div>
</template>
<style lang="scss">
//https://guipignata.netlify.app/profile.png
.avatar {
  display: block;
  margin-left: 4rem;
  margin-bottom: -5rem;
  margin-top: -2rem;
  border-radius: 400px;
  background-image: linear-gradient(
      180deg,
      rgba($blue-8, 0) 0%,
      rgba($blue-8, 0.8) 97%
    ),
    url('./../assets/avatart.png');
  width: 20rem;
  height: 20rem;
  background-size: cover;
}
</style>
