/* eslint-disable eol-last */
// flux removers..for now
const CORS_URL = 'https://cors-anywhere.herokuapp.com/'
const fluxRemoversUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=9d568b5a-77fc-4fc1-b19a-a5b20032b36e&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=151&searchWithin=&sort=0&page='
const solderTipsUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=61d6c890-2d5d-4194-97ec-a5b20032b0e7&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=200&searchWithin=&sort='

export default {
  getFluxRemovers(page) {
    return fetch(`${CORS_URL}${fluxRemoversUrl}${page}`)
      .then(response => response.json())
      .then(result => result.products)
      .catch(error => console.log(error))
  },

  getSolderTips(page) {
    return fetch(`${CORS_URL}${solderTipsUrl}${page}`)
      .then(response => response.json())
      .then(result => result.products)
  }
}
