import Vue from 'vue'
import Router from 'vue-router'
import Delivery from './views/Delivery'
import Payment from './views/Payment'
import Receipt from './views/Receipt'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'delivery',
      component: Delivery,
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment,
    },
    {
      path: '/receipt',
      name: 'receipt',
      component: Receipt,
    },
  ]
})
