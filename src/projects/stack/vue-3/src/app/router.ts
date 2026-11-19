import { createRouter, createWebHistory } from 'vue-router'
import RootLayout from '@pages/main/layout.vue'
import RootPage from '@pages/main/root/page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: RootLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: RootPage,
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('@pages/main/todo/page.vue'),
        },
      ],
    },
  ],
})

export default router
