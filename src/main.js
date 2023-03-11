import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import ServicePage from './pages/ServicePage.vue'
import InitialConsultationPage from './pages/InitialConsultationPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/service/:id', component: ServicePage },
    { path: '/initial-consultation', component: InitialConsultationPage },
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

  const app = createApp(App)
  app.use(router)
  app.mount('#app')