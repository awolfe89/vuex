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

  const chairsUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=27261e88-8d06-4dc4-92cd-a5b20032a09b&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=5&searchWithin=&sort='
const cleanroomWipesUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=4518659c-444f-4e0e-a1fd-a5b20032dc80&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=5&searchWithin=&sort='
const brushesUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=658a6bb4-ed5f-4dee-a68e-a5b20032acd6&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=5&searchWithin=&sort='
const degreasersUrl = 
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=89550d15-8f17-427f-a4a0-a5b20032b4c4&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=5&searchWithin=&sort='
const solventsUrl =
 'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=3260b768-f56b-4a90-bfc4-a5b20032b3d9&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=5&searchWithin=&sort='
const contactCleanersUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=4d1551cc-a42a-4619-acd6-a5b20032b416&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=4&searchWithin=&sort='  
const floorCleanersUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=648568b2-2be8-4bd4-acb3-a5b20032b71c&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=4&searchWithin=&sort='  
const dustersUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=53f56162-a5c7-49d2-a01e-a5b20032bf17&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=4&searchWithin=&sort='
const fiberOpticCleanersUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=7283059e-8f49-48e8-b316-a5b20032c145&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=4&searchWithin=&sort='  
const cleaningSwabsUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=97b2bded-e1d3-4cf8-ad70-a5b20032cd56&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=4&searchWithin=&sort='
const stencilWipesUrl =
  'https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId=740af679-5e6c-46b0-a3a2-a5b20032d150&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false&page=1&pageSize=4&searchWithin=&sort='
  
  
const mainUrl =
  'https://cors-anywhere.herokuapp.com/https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId='
const endOfUrl =
  '&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false';
// &page=1&pageSize=4&searchWithin=&sort='  
  
  /* CATEGORY IDs 

flux removers - 9d568b5a-77fc-4fc1-b19a-a5b20032b36e
solder tips - 61d6c890-2d5d-4194-97ec-a5b20032b0e7
chairs - 27261e88-8d06-4dc4-92cd-a5b20032a09b

ADHESIVES : 
spray adhesives - 0f5c665b-1b9a-48d6-b892-a5b200327048
dispensing needles - 817a439d-e777-4b5b-a157-a5b200327661
sealants - 7f4a38d3-a451-49a3-8ad9-a5b200328086
adhesive tape - 6bfd248d-419a-4130-b6ee-a5b200328573
polyimide tape - 86e076d8-2fb7-4da8-96a1-a5b200328d53
splicing tape - e0876155-3f11-4c1e-8050-a5b2003290e5


CHEMICALS & CLEANERS : 
cleanroom wipes 4518659c-444f-4e0e-a1fd-a5b20032dc80
brushes - 658a6bb4-ed5f-4dee-a68e-a5b20032acd6
degreasers - 89550d15-8f17-427f-a4a0-a5b20032b4c4
solvents - 3260b768-f56b-4a90-bfc4-a5b20032b3d9
contact cleaners- 4d1551cc-a42a-4619-acd6-a5b20032b416
floor cleaners - 648568b2-2be8-4bd4-acb3-a5b20032b71c
dusters - 53f56162-a5c7-49d2-a01e-a5b20032bf17
fiber optic cleaners - 7283059e-8f49-48e8-b316-a5b20032c145
cleaning swabs - 97b2bded-e1d3-4cf8-ad70-a5b20032cd56
stencil wipes - 740af679-5e6c-46b0-a3a2-a5b20032d150

CLEANROOM :  
160 - gloves - 9a4482fa-cd63-40d7-ad28-a5b20032d47f
85 - shoe covers - c370f5cc-0615-48e2-bca4-a5b20032d523
241 -cleanroom chairs - be97b912-ef0c-40a5-9e0e-a5b20032d687

TOOLS: 
59 - crimpers: 4c187528-23a6-449d-8127-a5b2003341c6
203 - wire cutters - cd154a03-fa16-47bc-a609-a5b200334cf6
43 -heat guns - fe14bf86-e9ec-4f33-9f4c-a5b200336490
179 -heat gun accessories - c7039933-0a34-4f2e-b431-a5b2003363bd
355 - pliers - edc2fbe4-eb9d-48ae-a108-a5b200338d2d
211 - wire strippers - 81d0f0c4-9cf3-4806-bf46-a5b20033b698
703 - screwdrivers - 46c2e03a-7dc1-4799-adb7-a5b20033aced

LABELS :
759 - printer labels- af066d38-4c66-4335-bee7-a5b2003409ac
694 - thermal transfer labels - d0018e2d-c158-4f53-814e-a5b200340bb9
56 - signage - 64e28ccb-521f-42cd-ae08-a5b20034131e

LIGHTING & MAGNIFICATION
105 - task lights - 4a412126-5a23-46ee-b232-a5b200341b94
347 - lighted magnifiers - 5cb401cd-6ddb-47a6-ac87-a5b200341f5e
74 - microscopes - ea4e5903-71ce-4bdf-83ab-a5b2003421ce
105 - microscope accessories - 3d043975-2c67-4687-9808-a5b200342608

SOLDERING MATERIALS : 
44- bar solder - ad954d05-4644-4de8-8a6d-a5b20032ae52
220- solder paste - 4b7402c1-f134-4d21-b9c3-a5b20032ae98
360- wire solder - 6d7722c3-2d5a-4ecd-bc88-a5b20032af2e

SOLDERING STATIONS : 
85- soldering stations - 8bda5bf3-96ec-4a20-b86d-a5b20032bf21
154- soldering irons - a009264d-8b68-461a-8961-a5b20032bdfa
139- soldering iron accessories 
1686- soldering tips - 61d6c890-2d5d-4194-97ec-a5b20032b0e7
55- fume extraction - 0ff68c0d-099c-4b52-a63d-a5b20032a69c
191- fume extractor accessories - e30469c8-6f2a-4fd2-8033-a5b20032a65b
31- desoldering irons - 9fe384f1-73e0-47e3-91d0-a5b20032a407
230- desoldering braids - 3f8cff7a-adec-4db5-96ad-a5b20032c010
172- hot air nozzles - 1197a38d-9178-4321-8ac4-a5b20032a740


ESD : 
396- esd benchtop mats - 7dda0b9c-8fd8-451e-9458-a5b20032ed4f
104 - esd document holders - 86aa8eec-1025-4af4-afd2-a5b20032d4ca
105 - esd safe trays - 6919ef54-b249-434c-b3c0-a5b20032dcaa
120- wrist straps - c369034d-902f-46e2-a51e-a5b20032e8ad
213 - nitrile gloves - 4a2ddba1-7781-48c0-8206-a5b20032e304
297 - in-plant handlers - 70084e0a-6a7c-49d1-a8a5-a5b20032dd40
50 - caution labels - 686d4b71-b87b-4209-90ba-a5b20032d3e0
451 - static shielding bags - a924013b-aa03-4b47-929e-a5b20032d248
136 - moisture barrier bags - 6e1c818e-a894-4490-a01a-a5b20032d206
66 - worksation monitors - e5bf952b-3f6b-4756-b360-a5b20032cfb3


  */
  export default {
    getData(categoryId, page, pageSize, searchText) {
      return fetch(`${mainUrl}${categoryId}${endOfUrl}&page=${page}&pageSize=${pageSize}&searchWithin=${searchText}&sort=`)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log(error));
    },

    getProduct(productId) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://www.all-spec.com/api/v1/products/${productId}`)
        .then(response => response.json())
        .then(result => result.product)
        .catch(error => console.log(error));
    }
  // getFluxRemovers(page) {
  //   return fetch(`${CORS_URL}${fluxRemoversUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  //     .catch(error => console.log(error))
  // },

  // getSolderTips(page) {
  //   return fetch(`${CORS_URL}${solderTipsUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },

  // getSprayAdhesives(page) {
  //   return fetch(`${CORS_URL}${sprayAdhesivesUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getDispensingNeedles(page) {
  //   return fetch(`${CORS_URL}${dispensingNeedlesUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getSealants(page) {
  //   return fetch(`${CORS_URL}${sealantsUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getTape(page) {
  //   return fetch(`${CORS_URL}${tapeUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getPolyimideTape(page) {
  //   return fetch(`${CORS_URL}${polyimideTapeUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getSplicingTape(page) {
  //   return fetch(`${CORS_URL}${splicingTapeUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getChairs(page) {
  //   return fetch(`${CORS_URL}${chairsUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getCleanroomWipes(page) {
  //   return fetch(`${CORS_URL}${cleanroomWipesUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getBrushes(page) {
  //   return fetch(`${CORS_URL}${brushesUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getDegreasers(page) {
  //   return fetch(`${CORS_URL}${degreasersUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getSolvents(page) {
  //   return fetch(`${CORS_URL}${solventsUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getContactCleaners(page) {
  //   return fetch(`${CORS_URL}${contactCleanersUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getFloorCleaners(page) {
  //   return fetch(`${CORS_URL}${floorCleanersUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getDusters(page) {
  //   return fetch(`${CORS_URL}${dustersUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getFiberOpticCleaners(page) {
  //   return fetch(`${CORS_URL}${fiberOpticCleanersUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getCleaningSwabs(page) {
  //   return fetch(`${CORS_URL}${cleaningSwabsUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // },
  // getStencilWipes(page) {
  //   return fetch(`${CORS_URL}${stencilWipesUrl}${page}`)
  //     .then(response => response.json())
  //     .then(result => result.products)
  // }
}

/*

Anti-static Tape - 289

Polyimide Tape -131

Splicing Tape -221

Chairs -771

ESD brushes - 82

degreasers - 92

Solvents - 94

contact cleaners 79

floor cleaners - 56

dusters 30

fiber optic cleaners 49

cleaning swabs - 166

stencil wipes - 27

gloves - 160

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