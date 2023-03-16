// 对路由进行封装管理
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 同步路由
export const tbRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
    meta: { title: '用户登录' }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { title: '首页' }
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
const router = new Router({
  mode: 'history',
  routes: tbRouter // 这里注意是routes
})

export default router
