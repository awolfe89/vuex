// Assets
import Vue from 'vue'
import Router from 'vue-router'

// General Site Links
import home from '@/components/home'
import About from '@/components/about'
import Category from '@/components/Category'
import Products from '@/components/Products'
import ProductDetail from '@/components/ProductDetail'

// Main Category Landing Pages
import Benches from '@/components/landingPages/Benches'
import Adhesives from '@/components/landingPages/Adhesives'
import Chemicals from '@/components/landingPages/Chemicals'
import Cleanroom from '@/components/landingPages/Cleanroom'
import Tools from '@/components/landingPages/Tools'
import Labels from '@/components/landingPages/Labels'
import Magnification_Lighting from '@/components/landingPages/magnificationLighting'
import Soldering_Materials from '@/components/landingPages/SolderingMaterials'
import Soldering_Stations from '@/components/landingPages/SolderingStations'
import ESD from '@/components/landingPages/ESD'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [

    // General Site Links
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

    // Main Category Landing Pages
    {
      path: '/adhesives',
      name: 'Adhesives',
      component: Adhesives
    },
    {
      path: '/benches-and-seating',
      name: 'Benches',
      component: Benches
    },
    {
      path: '/chemicals-and-cleaning',
      name: 'Chemicals',
      component: Chemicals
    },
    {
      path: '/cleanroom',
      name: 'Cleanroom',
      component: Cleanroom
    },
    {
      path: '/tools',
      name: 'Tools',
      component: Tools
    },
    {
      path: '/labels',
      name: 'Labels',
      component: Labels
    },
    {
      path: '/magnification-and-lighting',
      name: 'Magnification_Lighting',
      component: Magnification_Lighting
    },
    {
      path: '/soldering-materials',
      name: 'Soldering_Materials',
      component: Soldering_Materials
    },
    {
      path: '/soldering-stations-irons',
      name: 'Soldering_Stations',
      component: Soldering_Stations
    },
    {
      path: '/esd-control',
      name: 'ESD',
      component: ESD
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
