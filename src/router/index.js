import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home.vue'
import Product from '@/pages/products.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Product',
      component: Product

    }
  ]
})
