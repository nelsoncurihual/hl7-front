import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import AdmisionView from '../views/AdmisionView.vue'
import CategorizacionView from '../views/CategorizacionView.vue'
import AtencionView from '../views/AtencionView.vue'
import EgresoView from '../views/EgresoView.vue'

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
      component: CategorizacionView,
    },
    {
      path: '/atencion',
      name: 'atencion',
      component: AtencionView,
    },
    {
      path: '/egreso',
      name: 'egreso',
      component: EgresoView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
})

export default router
