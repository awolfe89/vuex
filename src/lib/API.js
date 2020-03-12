import ONLINE from './read-online'
import FIRESTORE from './read-firestore'

export default {

  getFluxRemovers(page,pageLength,searchBrand,searchText) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getFluxRemovers(page)
    } else {
      return FIRESTORE.getData('fluxRemovers',page,pageLength,searchBrand,searchText)
    }
  },

  getSolderTips(page,pageLength,searchBrand,searchText) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getSolderTips(page)
    } else {
      return FIRESTORE.getData('Solder Tips', page,pageLength,searchBrand,searchText)
    }
  },

  getBrandsList(collectionName) {
    return FIRESTORE.getBrandsList(collectionName)
  },
  getProduct(id) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getProduct(id)
    } else {
      return FIRESTORE.getProduct(id)
    }

  }
}
