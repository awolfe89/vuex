/* eslint-disable eol-last */

const CORS_URL = 'https://cors-anywhere.herokuapp.com/'
const mainUrl =
  'https://cors-anywhere.herokuapp.com/https://www.all-spec.com/api/v1/products/?applyPersonalization=true&categoryId='
const endOfUrl =
  '&expand=pricing,attributes,facets,brand&getAllAttributeFacets=true&includeAlternateInventory=true&includeAttributes=IncludeOnProduct&includeSuggestions=true&makeBrandUrls=false';
// &page=1&pageSize=4&searchWithin=&sort='  

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
}
 
/*

***CATEGORY IDs 
38b8e0ac-fb62-4cc4-8c6d-a9f9013e99bc

#ADHESIVES : 
  spray adhesives - 0f5c665b-1b9a-48d6-b892-a5b200327048
  dispensing needles - 817a439d-e777-4b5b-a157-a5b200327661
  sealants - 7f4a38d3-a451-49a3-8ad9-a5b200328086
  adhesive tape - 6bfd248d-419a-4130-b6ee-a5b200328573
  polyimide tape - 86e076d8-2fb7-4da8-96a1-a5b200328d53
  splicing tape - e0876155-3f11-4c1e-8050-a5b2003290e5

#CHEMICALS & CLEANERS : 
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
  75- general purpose cleaners - 45e37324-4cbd-49f3-8ccf-a5b20032b7ef
  93- conformal coating - fb9f7c32-3b5d-4de7-aa0f-a5b20032b1fb

#CHAIRS
    chairs - 27261e88-8d06-4dc4-92cd-a5b20032a09b

#CLEANROOM :  
  160 - gloves - 9a4482fa-cd63-40d7-ad28-a5b20032d47f
  85 - shoe covers - c370f5cc-0615-48e2-bca4-a5b20032d523
  241 -cleanroom chairs - be97b912-ef0c-40a5-9e0e-a5b20032d687

#ESD : 
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
  Heel Grounders c369034d-902f-46e2-a51e-a5b20032e8ad
  121- ESD floor mats  6596b1f3-49fb-49e8-a866-a5b20032eac8

#LABELS :
  759 - printer labels- af066d38-4c66-4335-bee7-a5b2003409ac
  694 - thermal transfer labels - d0018e2d-c158-4f53-814e-a5b200340bb9
  56 - signage - 64e28ccb-521f-42cd-ae08-a5b20034131e

#LIGHTING & MAGNIFICATION
  105 - task lights - 4a412126-5a23-46ee-b232-a5b200341b94
  347 - lighted magnifiers - 5cb401cd-6ddb-47a6-ac87-a5b200341f5e
  74 - microscopes - ea4e5903-71ce-4bdf-83ab-a5b2003421ce
  105 - microscope accessories - 3d043975-2c67-4687-9808-a5b200342608

#SAFETY
  413 - safety glasses - 5f6662a4-4919-4950-9b0a-a5b2003280c3
  40 - inspection gloves - c2907b2b-4ded-4470-8285-a5b200328992
  146- lab gloves -e6fdd58c-802a-4969-8448-a5b2003289c5
  141- coated gloves - 88babe3f-9270-4661-80bc-a5b200328667
  168- ear plugs - fb7f252e-13b8-426d-88c5-a5b200329101
  349- anti-fatigue mats - 6ea9cb12-0fb9-4901-9f6b-a5b2003293a4
  100- lab coats - 90931350-7455-4dcd-b6d6-a5b200329901

SOLDERING MATERIALS : 
  44- bar solder - ad954d05-4644-4de8-8a6d-a5b20032ae52
  220- solder paste - 4b7402c1-f134-4d21-b9c3-a5b20032ae98
  360- wire solder - 6d7722c3-2d5a-4ecd-bc88-a5b20032af2e
  102- flux 5202ca53-219b-4f78-90a2-a5b20032b4bf
  fume extractor access e30469c8-6f2a-4fd2-8033-a5b20032a65b

#SOLDERING STATIONS : 
  85- soldering stations - 8bda5bf3-96ec-4a20-b86d-a5b20032bf21
  154- soldering irons - a009264d-8b68-461a-8961-a5b20032bdfa
  139- soldering iron accessories 
  1686- soldering tips - 61d6c890-2d5d-4194-97ec-a5b20032b0e7
  55- fume extraction - 0ff68c0d-099c-4b52-a63d-a5b20032a69c
  191- fume extractor accessories - e30469c8-6f2a-4fd2-8033-a5b20032a65b
  31- desoldering irons - 9fe384f1-73e0-47e3-91d0-a5b20032a407
  230- desoldering braids - 3f8cff7a-adec-4db5-96ad-a5b20032c010
  172- hot air nozzles - 1197a38d-9178-4321-8ac4-a5b20032a740
  flux removers - 9d568b5a-77fc-4fc1-b19a-a5b20032b36e
  solder tips - 61d6c890-2d5d-4194-97ec-a5b20032b0e7
  358 desoldering tips c616e28b-653e-4d92-8132-a5b20032b039

#STORAGE & HANDLING :
  101- utility Carts - e6495446-4d09-4f34-bddd-a5b200342d8a
  279- Stacking Bins -42241637-990f-4338-972f-a5b200344adb
  126- circuit board shippers - 07534808-294f-4309-aecd-a5b2003263fa

#TOOLS: 
  59 - crimpers: 4c187528-23a6-449d-8127-a5b2003341c6
  203 - wire cutters - cd154a03-fa16-47bc-a609-a5b200334cf6
  43 -heat guns - fe14bf86-e9ec-4f33-9f4c-a5b200336490
  179 -heat gun accessories - c7039933-0a34-4f2e-b431-a5b2003363bd
  355 - pliers - edc2fbe4-eb9d-48ae-a108-a5b200338d2d
  211 - wire strippers - 81d0f0c4-9cf3-4806-bf46-a5b20033b698
  703 - screwdrivers - 46c2e03a-7dc1-4799-adb7-a5b20033aced
  151- nut drivers - f8f0ce57-f85d-44d9-b243-a5b200338afb
  280 - sockets - bc90ff8c-9c0d-43b9-8609-a5b20033b26c
  123- torque screwdrivers - b9159a93-525f-4f06-938b-a5b20033c4d7
  735- tweezers - 5b6b3566-565b-4cf8-a4d2-a5b20033ce12
  71 - hex wrenches - 68e77c63-cb6a-4be4-942e-a5b20033d646
  94 - scissors - 1b0f7c2f-a90f-4399-a351-a5b200334bae
  195 - Punches/Dies - 2d90a81e-711c-4c84-bcdf-a5b200337cae
  63- Lead Forming -9459d200-a4d7-461c-a769-a5b200337e12 


  */
