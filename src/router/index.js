import { createRouter, createWebHistory } from 'vue-router'
import AdmisionView from '../views/AdmisionView.vue'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/admision',
      name: 'admision',
      component: AdmisionView,
    },
    {
      path: '/categorizacion',
      name: 'categorizacion',
      component: AdmisionView,
    },
    {
      path: '/egreso',
      name: 'egreso',
      component: AdmisionView,
    }
  ],
})

export default router
