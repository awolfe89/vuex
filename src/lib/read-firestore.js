import { db } from './firebase'

export default {
  getFluxRemovers(page) {
    let dbData = []

    return db
      .collection('fluxRemovers')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          dbData.push(doc.data())
        })
        return dbData
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      })
  },

  getSolderTips(page) {
    let dbData = []

    return db
      .collection('Solder Tips')
      .limit(20)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          dbData.push(doc.data())
        })
 
        return dbData
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      })

  },
}
