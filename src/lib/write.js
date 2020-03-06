// just basic code from FireBase at the moment
import { db } from './firebase'

export async function writeProductData(collection, data) {
  await new Promise((resolve, reject) => {
    if (collection !== 'fluxRemovers' && collection !== 'Solder Tips') {
      reject(new Error('Collection name is incorrect.'))
    }

    db.collection(collection)
      .doc(data.id)
      .set(data)
      .then(function() {
        resolve({ success: true, id: data.id })
      })
      .catch(function(error) {
        reject(error)
      })
  })
}

export const downToCSV = (rows, filename) => {
  let csvContent = 'data:text/csv;charset=utf-8,' + rows.map(e => e.join(',')).join('\n')

  var encodedUri = encodeURI(csvContent)
  var link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', filename)
  document.body.appendChild(link)

  link.click()
}
