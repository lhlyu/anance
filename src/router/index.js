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
    },{
      path: "/admin/profile",
      component: () => import('../views/admin/pages/profile.vue')
    },{
      path: "/admin/users",
      component: () => import('../views/admin/pages/user.vue')
    },{
      path: "/admin/permission",
      component: () => import('../views/admin/pages/permission.vue')
    },{
      path: "/admin/comment",
      component: () => import('../views/admin/pages/comment.vue')
    },{
      path: "/admin/record",
      component: () => import('../views/admin/pages/record.vue')
    },{
      path: "/admin/setting",
      component: () => import('../views/admin/pages/setting.vue')
    },{
      path: "/admin/404",
      component: () => import('../views/404.vue')
    },
    {
      path: "/admin/*", // 此处需特别注意置于最底部
      redirect: "/admin/404"
    }]
  },
  {
    path: "/404",
    component: () => import('../views/404.vue')
  },
  {
    path: "*", // 此处需特别注意置于最底部
    redirect: "/404"
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
