<template>
    <div>
        <div style="background-color: #172835">
      <div
        style="
          max-width: 960px;
          margin: 0 auto;
          color: white;
          display: flex;
          padding: 3rem;
        "
      >
        <div style="flex: 1">
          <h2 style="margin-bottom: 4rem">Let's get started!</h2>
          <img :src="logo" alt="logo" height="40" />
        </div>
        <div style="flex: 1; padding-left: 2rem">
          <h3 style="margin-bottom: 2rem">Contacts</h3>
          <h5>07864 7863 09</h5>
          <h5 style="margin: 1rem 0">coachgui.fitnutri@gmail.com</h5>
          <h5>@coachguipignata</h5>
        </div>
      </div>
    </div>
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