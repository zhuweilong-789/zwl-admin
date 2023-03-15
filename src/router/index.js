// 对路由进行封装管理
import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

// 同步路由
export const tbRouter = [
  {},
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {}
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/index.vue'),
    meta: { title: '用户信息' }
  }
]
// 异步路由
export const asyncRouter = []

// 创建路由实例
const router = new vueRouter({
  mode: 'history',
  router: tbRouter
})

export default router
