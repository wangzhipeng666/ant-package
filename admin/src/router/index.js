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
      ]
    }
  ]
})

export default router
