import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/welcome/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      component: resolve => require(['../components/index.vue'], resolve),
    }
  ]
})
