<template>
  <div class="text-center" style="background-color: #172835; text-align: center; color: white; padding: 4rem">
  <h2>FREE Initial Consultation</h2>
  <h1 class="my-3" style="margin: 0 auto">What happens during the initial consultation?</h1>
  <ol class="my-6" style="text-align: left; margin: 0 auto; display: block; max-width: 22rem; padding: 2rem 0;">
    <li>Explain the Way of working</li>
    <li>Understand client’s exercise and eating habits</li>
    <li>Identify client’s development areas</li>
    <li>Set goals</li>
    <li>Outline action plan</li>
  </ol>
  <a href="https://calendly.com/coachgui" target="_blank" class="red"> Book Initial Consultation </a>
</div>
<BaseFooter/>
</template>
<style lang="scss" scoped>
a {
    padding: 0.65rem 1rem;
    background-color: $red-7;;
    color: white;
    text-decoration: none;
    font-weight: 600;
}
</style>

<script>
import BaseFooter from "@/components/BaseFooter.vue";
export default {
  components: {
    BaseFooter
  },
};
</script>