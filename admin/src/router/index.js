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
          path: '/chooseCity',
          component: () => import('../views/chooseCity/index.vue'),
        },
        {
          path: '/progress',
          component: () => import('../views/progress/index.vue'),
        },
        {
          path: '/form',
          component: () => import('../views/form/index.vue'),
        },
        {
          path: '/modalForm',
          component: () => import('../views/modalForm/index.vue'),
        },
        {
          path: '/table',
          component: () => import('../views/table/index.vue'),
        },
      ]
    },
  ]
})

export default router
