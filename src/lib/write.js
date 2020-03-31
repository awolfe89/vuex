// just basic code from FireBase at the moment
import { db } from './firebase'

export async function writeProductData(collection, data) {
  return await new Promise((resolve, reject) => {
    db.collection(collection)
      .doc(data.id)
      .set(data)
      .then(() => {
        resolve({ success: true, id: data.id })
      })
      .catch((error) => {
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
