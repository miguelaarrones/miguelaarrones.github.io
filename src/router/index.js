import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Work.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/Skills.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/builder',
      name: 'builder',
      component: () => import('../views/BuilderDefenderGame.vue')
    },
    {
      path: '/strategy',
      name: 'strategy',
      component: () => import('../views/TurnBasedStrategyGame.vue')
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      component: () => import('../views/KitchenChaos.vue')
    }
  ]
})

export default router
