// 对路由进行封装管理
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 同步路由
export const tbRouter = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home'),
    meta: {}
  }
]
// 异步路由
export const asyncRouter = [

]

// 创建路由实例
const router = new VueRouter({
  router: tbRouter
})

export default router