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
      children: [
                {
                    path: '',
                    component: resolve => require(['../components/pages/user.vue'], resolve)
                },
                {
                    path: '/mark',
                    component: resolve => require(['../components/pages/mark.vue'], resolve)
                },
                {
                    path: '/edit',
                    component: resolve => require(['../components/pages/edit.vue'], resolve)
                }
       ]
    }
  ]
})
