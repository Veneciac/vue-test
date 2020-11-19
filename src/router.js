import Vue from 'vue'
import Router from 'vue-router'
import Base from './views/Base.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'base',
      component: Base,
      children: [
     
      ]
    },
  ]
})
