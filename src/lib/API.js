import ONLINE from './read-online'
import FIRESTORE from './read-firestore'

export default {
  getFluxRemovers(page) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getFluxRemovers(page)
    } else {
      return FIRESTORE.getFluxRemovers(page)
    }
  },

  getSolderTips(page) {
    if (process.env.MODE === 'manage') {
      return ONLINE.getSolderTips(page)
    } else {
      return FIRESTORE.getSolderTips(page)
    }
  }
}
