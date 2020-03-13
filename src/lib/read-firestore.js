import { db } from './firebase'

export default {
  getData(collectionName, page = 1, pageLength = 20, searchBrand = '', searchText = '') {
    let results = {}
    let dbData = []
    let totals = 0
    let from = (page - 1) * pageLength
    let to = page * pageLength
    return db
      .collection(collectionName)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          let data = doc.data()
          let cond1 = searchBrand !== '' && data.brand.name !== searchBrand
          // brand.name altText countryOfOrigin shortDescription
          let cond2 = searchText !== '' &&
             data.brand.name !== null &&
             data.brand.name.search(searchText) === -1 &&
             data.altText !== null &&
             data.altText.search(searchText) === -1 &&
             data.countryOfOrigin !== null &&
             data.countryOfOrigin.search(searchText) === -1 &&
             data.shortDescription !== null &&
             data.shortDescription.search(searchText) === -1
          if (!cond1 && !cond2) {
            totals++
            if (totals > from && totals <= to) {
              dbData.push(data)
            }
          }
        })
        results.dbData = dbData
        results.totals = totals
        return results
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      })
  },
  getBrandsList(collectionName) {
    let brandsList = []
    return db
      .collection(collectionName)
      .orderBy('brand.name')
      .get()
      .then(function(querySnapshot) {
        let pastVal = ''
        querySnapshot.forEach(function(doc) {
          let name = doc.data().brand.name
          if (pastVal !== name) {
            brandsList.push(name)
            pastVal = name
          }
        })
        return brandsList
      })
  },
  getProductSolderTip(id) {
    return db
      .collection('Solder Tips')
      .doc(id)
      .get()
      .then(function(doc) {
        return doc.data()
      })
  },
  getProductSprayAdhesive(id) {
    return db
      .collection('Spray Adhesives')
      .doc(id)
      .get()
      .then(function(doc) {
        return doc.data()
      })
  }
}
