import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/features',
    name: 'Features',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/Features.vue')
  },
  {
    path: '/penthouses',
    name: 'Penthouses',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/Penthouses.vue')
  },
  {
    path: '/reserve',
    name: 'Reserve',
    meta: {layout: 'MainLayout'},
    component: () => import('../views/Reserve.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
