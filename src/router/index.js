// Assets
import Vue from 'vue'
import Router from 'vue-router'

// Product Listing Pages
import sniper from '@/components/sniper'
import solderTips from '@/components/solderTips'
import wireSolder from '@/components/wireSolder'

// ADHESIVES
import Spray_Adhesives from '@/components/AdhesivePages/SprayAdhesives'
import dispensingNeedles from '@/components/AdhesivePages/dispensingNeedles'
import sealants from '@/components/AdhesivePages/sealants'
import tape from '@/components/AdhesivePages/tape'
import polyimideTape from '@/components/AdhesivePages/polyimideTape'
import splicingTape from '@/components/AdhesivePages/splicingTape'

// General Site Links
import home from '@/components/home'
import About from '@/components/about'

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
    // Product Pages
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
    // ADHESIVES
    {
      path: '/spray-adhesives',
      name: 'Spray_Adhesives',
      component: Spray_Adhesives
    },
    {
      path: '/dispensing-needles',
      name: 'dispensingNeedles',
      component: dispensingNeedles
    },
    {
      path: '/sealants',
      name: 'sealants',
      component: sealants
    },
    {
      path: '/anti-static-tape',
      name: 'tape',
      component: tape
    },
    {
      path: '/polyimide-tape',
      name: 'polyimideTape',
      component: polyimideTape
    },
    {
      path: '/splicing-tape',
      name: 'splicingTape',
      component: splicingTape
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
    }
  ]
})
