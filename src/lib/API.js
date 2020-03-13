import ONLINE from './read-online'
import FIRESTORE from './read-firestore'

export default {

  getBrandsList(collectionName) {
    return FIRESTORE.getBrandsList(collectionName)
  },
  getFluxRemovers(page, pageLength, searchBrand, searchText) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getFluxRemovers(page)
    } else {
      return FIRESTORE.getData('fluxRemovers', page, pageLength, searchBrand, searchText)
    }
  },

  getSolderTips(page, pageLength, searchBrand, searchText) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getSolderTips(page)
    } else {
      return FIRESTORE.getData('Solder Tips', page, pageLength, searchBrand, searchText)
    }
  },

  getSprayAdhesives(page, pageLength, searchBrand, searchText) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getSprayAdhesives(page)
    } else {
      return FIRESTORE.getData('Spray Adhesives', page, pageLength, searchBrand, searchText)
    }
  },
  getDispensingNeedles(page, pageLength, searchBrand, searchText) {
    return ONLINE.getDispensingNeedles(page)
  },
  getSealants(page, pageLength, searchBrand, searchText) {
    return ONLINE.getSealants(page)
  },
  getTape(page, pageLength, searchBrand, searchText) {
    return ONLINE.getTape(page)
  },
  getPolyimideTape(page, pageLength, searchBrand, searchText) {
    return ONLINE.getPolyimideTape(page)
  },
  getSplicingTape(page, pageLength, searchBrand, searchText) {
    return ONLINE.getSplicingTape(page)
  },
  getProductSolderTip(id) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getProductSolderTip(id)
    } else {
      return FIRESTORE.getProductSolderTip(id)
    }
  },
  getProductSprayAdhesive(id) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getProductSprayAdhesive(id)
    } else {
      return FIRESTORE.getProductSprayAdhesive(id)
    }
  }
}
