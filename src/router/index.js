import Vue from 'vue'
import Router from 'vue-router'
import sniper from '@/components/sniper'
import solderTips from '@/components/solderTips'
import wireSolder from '@/components/wireSolder'
import home from '@/components/home'
import About from '@/components/about'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/fluxremovers',
      name: 'Flux Removers',
      component: sniper
    },
    {
      path: '/soldertips',
      name: 'Solder Tips',
      component: solderTips
    },
    {
      path: '/wiresolder',
      name: 'Wire Solder',
      component: wireSolder
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/:id',
      name: 'Product',
      component: Product
    }
  ]
})
