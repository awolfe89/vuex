// Assets
import Vue from 'vue'
import Router from 'vue-router'

// General Site Links
import home from '@/components/home'
import About from '@/components/about'
import Category from '@/components/Category'
import Products from '@/components/Products'
import ProductDetail from '@/components/ProductDetail'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/categories/:id',
      name: 'Category',
      component: Category
    },
    {
      path: '/products/:id',
      name: 'Products',
      component: Products
    }, {
      path: '/products/:collection/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
  ]
})
