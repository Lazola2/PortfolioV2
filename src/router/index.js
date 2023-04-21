import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => {
      return import('../views/ResumeView.vue')
    }
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => {
      return import('../views/TestimonialsView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
