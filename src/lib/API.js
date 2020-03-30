import ONLINE from './read-online'
import FIRESTORE from './read-firestore'

export default {

  getBrandsList(collectionName) {
    return FIRESTORE.getBrandsList(collectionName)
  },
  getProductsByCollection(collectionName, categoryId, page, pageLength, searchBrand, searchText) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getData(categoryId, page, pageLength, searchText);
    } else {
      return FIRESTORE.getData(collectionName, page, pageLength, searchBrand, searchText);
    }
  },
  getProduct(id,collection) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getProduct(id)
    } else {
      return FIRESTORE.getProduct(id,collection)
    }
  },

}
