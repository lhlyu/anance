import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import('../views/home/login.vue')
  },
  {
    path: "/admin",
    component: () => import('../views/admin/index.vue'),
    children:[{
      path: "/admin",
      component: () => import('../views/admin/pages/board.vue')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
