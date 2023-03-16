import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import antDesignVue from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/styles/mePublic.css'

Vue.use(antDesignVue)

Vue.config.productionTip = false

// 初始化vue实例的时候把自定义的router和vuex绑定上去
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
