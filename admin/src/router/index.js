import { createRouter, createWebHashHistory } from 'vue-router'
import Container from '../components/container/index.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Container,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/chooseArea',
          component: () => import('../views/chooseArea/index.vue'),
        },
        {
          path: '/chooseTime',
          component: () => import('../views/chooseTime/index.vue'),
        },
        {
          path: '/progress',
          component: () => import('../views/progress/index.vue'),
        },
      ]
    },
  ]
})

export default router
