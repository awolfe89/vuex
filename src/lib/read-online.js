/* eslint-disable eol-last */

const CORS_URL = 'https://cors-anywhere.herokuapp.com/'

const fluxRemoversUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=9d568b5a-77fc-4fc1-b19a-a5b20032b36e&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=151&searchWithin=&sort=0&page='
const solderTipsUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=61d6c890-2d5d-4194-97ec-a5b20032b0e7&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=200&searchWithin=&sort='
const sprayAdhesivesUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=0f5c665b-1b9a-48d6-b892-a5b200327048&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=161&searchWithin=&sort=&page='
const dispensingNeedlesUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=817a439d-e777-4b5b-a157-a5b200327661&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=5&searchWithin=&sort='  
const sealantsUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=7f4a38d3-a451-49a3-8ad9-a5b200328086&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=5&searchWithin=&sort='
const tapeUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=6bfd248d-419a-4130-b6ee-a5b200328573&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=5&searchWithin=&sort='
const polyimideTapeUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=86e076d8-2fb7-4da8-96a1-a5b200328d53&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=5&searchWithin=&sort='
const splicingTapeUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=e0876155-3f11-4c1e-8050-a5b2003290e5&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=5&searchWithin=&sort='

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
  },

  getSprayAdhesives(page) {
    return fetch(`${CORS_URL}${sprayAdhesivesUrl}${page}`)
      .then(response => response.json())
      .then(result => result.products)
  },
  getDispensingNeedles(page) {
    return fetch(`${CORS_URL}${dispensingNeedlesUrl}${page}`)
      .then(response => response.json())
      .then(result => result.products)
  },
  getSealants(page) {
    return fetch(`${CORS_URL}${sealantsUrl}${page}`)
      .then(response => response.json())
      .then(result => result.products)
  },
  getTape(page) {
    return fetch(`${CORS_URL}${tapeUrl}${page}`)
      .then(response => response.json())
      .then(result => result.products)
  },
  getPolyimideTape(page) {
    return fetch(`${CORS_URL}${polyimideTapeUrl}${page}`)
      .then(response => response.json())
      .then(result => result.products)
  },
  getSplicingTape(page) {
    return fetch(`${CORS_URL}${splicingTapeUrl}${page}`)
      .then(response => response.json())
      .then(result => result.products)
  }
}

/*

Dispensing Needles- 533 - currently only reading 5 due to Firebase quotas

Sealants

Anti-static Tape - 289

Polyimide Tape -131

Splicing Tape -221

Chairs

Stools

Workbenches

ESD brushes

degreasers

Solvents

contact cleaners

floor cleaners

dusters

fiber optic cleaners

cleaning swabs

cleaning wipes

gloves

shoe covers

cleanroom chairs

swabs

wipes

crimpers

wire cutters

cutters

heat guns

heat gun accessories

pliers

wire strippers

torque screwdrivers

printer labels

thermal transfer labels

signage

task lights

lighted magnifiers

microscopes

microscope accessories

bar solder

solder paste

wire solder

soldering stations

soldering irons

soldering iron accessories 

soldering tips

fume extraction

fume extractor accessories

desoldering irons

desoldering braids

hot air nozzles

flux removers

esd benchtop mats

esd document holders

esd safe trays

wrist straps

nitrile gloves

in-plant handlers

caution labels

static shielding bags

moisture barrier bags

worksation monitors
*/