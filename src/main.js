import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./pages/HomePage.vue";
import ServicePage from "./pages/ServicePage.vue";
import InitialConsultationPage from "./pages/InitialConsultationPage.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from 'vuetify/iconsets/mdi';


const routes = [
  { path: "/", component: HomePage },
  { path: "/service/:id", component: ServicePage },
  { path: "/initial-consultation", component: InitialConsultationPage },
];

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
});

const router = createRouter({
  scrollBehavior() {    
    return { top: 0 }
  },
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");
