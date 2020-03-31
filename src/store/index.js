import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        loading: false,
        categories: [{
            id: "solder-tips",
            name: "Solder Tips",
            categoryId: "61d6c890-2d5d-4194-97ec-a5b20032b0e7",
            hasChild: false,
            children: []
        }, {
            id: "flux-removers",
            name: "fluxRemovers",
            categoryId: "9d568b5a-77fc-4fc1-b19a-a5b20032b36e",
            hasChild: false,
            children: []
        }, {
            id: "adhesives",
            name: "Adhesives",
            hasChild: true,
            children: [{
                id: "spray-adhesives",
                name: "Spray Adhesives",
                categoryId: '0f5c665b-1b9a-48d6-b892-a5b200327048'
            }, {
                id: "dispensing-needles",
                name: "Dispensing Needles",
                categoryId: '817a439d-e777-4b5b-a157-a5b200327661'
            }, {
                id: "sealants",
                name: "Sealants",
                categoryId: "7f4a38d3-a451-49a3-8ad9-a5b200328086"
            }, {
                id: "anti-static-tape",
                name: "Anti Static Tape",
                categoryId: "6bfd248d-419a-4130-b6ee-a5b200328573"

            }, {
                id: "polymide-tape",
                name: "Polyimide Tape",
                categoryId: "86e076d8-2fb7-4da8-96a1-a5b200328d53"
            }, {
                id: "splicing-tape",
                name: "Splicing Tape",
                categoryId: "e0876155-3f11-4c1e-8050-a5b2003290e5"
            }]
        }, {
            id: "benches-seating",
            name: "Benches & Seating",
            route: "categories/benches-seating",
            hasChild: true,
            children: [{
                id: "chairs",
                name: "Chairs",
                categoryId: "27261e88-8d06-4dc4-92cd-a5b20032a09b"
            }]
        }, {
            id: "chemicals-cleaning",
            name: "Chemicals & Cleaning",
            hasChild: true,
            children: [{
                id: "esd-brushes",
                name: "ESD Brushes",
                categoryId: "658a6bb4-ed5f-4dee-a68e-a5b20032acd6"
            }, {
                id: "degreasers",
                name: "Degreasers",
                categoryId: "89550d15-8f17-427f-a4a0-a5b20032b4c4"
            }, {
                id: "solvents",
                name: "Solvents",
                categoryId: "3260b768-f56b-4a90-bfc4-a5b20032b3d9"
            }, {
                id: "contact-cleaners",
                name: "Contact Cleaners",
                categoryId: "4d1551cc-a42a-4619-acd6-a5b20032b416"
            }, {
                id: "floor cleaner",
                name: "Floor Cleaner",
                categoryId: "648568b2-2be8-4bd4-acb3-a5b20032b71c"
            }, {
                id: "dusters",
                name: "Dusters",
                categoryId: "53f56162-a5c7-49d2-a01e-a5b20032bf17"
            }, {
                id: "fiber-optic-cleaners",
                name: "Fiber Optic Cleaners",
                categoryId: "7283059e-8f49-48e8-b316-a5b20032c145"
            }, {
                id: "cleaning-swabs",
                name: "Cleaning Swabs",
                categoryId: "97b2bded-e1d3-4cf8-ad70-a5b20032cd56"
            }, {
                id: "cleaning-wipes",
                name: "Cleaning Wipes",
                categoryId: "740af679-5e6c-46b0-a3a2-a5b20032d150"
            }]
        }, {
            id: "cleanroom",
            name: "Cleanroom",
            hasChild: true,
            children: [{
                id: "gloves",
                name: "Gloves",
                categoryId: "9a4482fa-cd63-40d7-ad28-a5b20032d47f"
            }, {
                id: "shoe-covers",
                name: "Shoe Covers",
                categoryId: "c370f5cc-0615-48e2-bca4-a5b20032d523"
            }, {
                id: "cleanroom-chairs",
                name: "Cleanroom Chairs",
                categoryId: "be97b912-ef0c-40a5-9e0e-a5b20032d687"
            }, {
                id: "swabs",
                name: "Swabs",
                categoryId: "97b2bded-e1d3-4cf8-ad70-a5b20032cd56"
            }, {
                id: "wipes",
                name: "Wipes",
                categoryId: "4518659c-444f-4e0e-a1fd-a5b20032dc80"
            }]
        }, {
            id: "tools",
            name: "Tools",
            hasChild: true,
            children: [{
                id: "crimpers",
                name: "Crimpers",
                categoryId: "4c187528-23a6-449d-8127-a5b2003341c6"
            }, {
                id: "wire-cutters",
                name: "Wire Cutters",
                categoryId: "cd154a03-fa16-47bc-a609-a5b200334cf6"
            }, {
                id: "cutters",
                name: "Cutters",
                categoryId: "cd154a03-fa16-47bc-a609-a5b200334cf6"
            }, {
                id: "heat-guns",
                name: "Heat Guns",
                categoryId: "fe14bf86-e9ec-4f33-9f4c-a5b200336490"
            }, {
                id: "heat-gun-accessories",
                name: "Heat Gun Accessories",
                categoryId: "c7039933-0a34-4f2e-b431-a5b2003363bd"
            }]
        }, {
            id: "labels",
            name: "Labels",
            hasChild: true,
            children: [{
                id: "printer_labels",
                name: "Printer Labels",
                categoryId: "af066d38-4c66-4335-bee7-a5b2003409ac"
            }, {
                id: "thermal-transfer-labels",
                name: "Thermal Transfer Labels",
                categoryId: "d0018e2d-c158-4f53-814e-a5b200340bb9"
            }, {
                id: "signage",
                name: "Signage",
                categoryId: "64e28ccb-521f-42cd-ae08-a5b20034131e"
            }]
        }, {
            id: "magnification-lighting",
            name: "Magnification & Lighting",
            hasChild: true,
            children: [{
                id: "task-lights",
                name: "Task Lights",
                categoryId: "4a412126-5a23-46ee-b232-a5b200341b94"
            }, {
                id: "lighted-magnifiers",
                name: "Lighted Magnifiers",
                categoryId: "5cb401cd-6ddb-47a6-ac87-a5b200341f5e"
            }, {
                id: "microscopes",
                name: "Microscopes",
                categoryId: "ea4e5903-71ce-4bdf-83ab-a5b2003421ce"
            }, {
                id: "microscope-accessories",
                name: "Microscope Accessories",
                categoryId: "3d043975-2c67-4687-9808-a5b200342608"
            }]
        }, {
            id: "soldering-materials",
            name: "Soldering Materials",
            hasChild: true,
            children: [{
                id: "bar-solder",
                name: "Bar Solder",
                categoryId: "ad954d05-4644-4de8-8a6d-a5b20032ae52"
            }, {
                id: "solder-paste",
                name: "Solder Paste",
                categoryId: "4b7402c1-f134-4d21-b9c3-a5b20032ae98"
            }, {
                id: "wire-solder",
                name: "Wire Solder",
                categoryId: "6d7722c3-2d5a-4ecd-bc88-a5b20032af2e"
            }]
        }, {
            id: "soldering-station-irons",
            name: "Soldering Stations & Irons",
            hasChild: true,
            children: [{
                id: "soldering-stations",
                name: "Soldering Stations",
                categoryId: "8bda5bf3-96ec-4a20-b86d-a5b20032bf21"
            }, {
                id: "soldering-irons",
                name: "Soldering Irons",
                categoryId: "a009264d-8b68-461a-8961-a5b20032bdfa"
            }, {
                id: "soldering-iron-accessories",
                name: "Soldering Iron Accessories",
                categoryId: "1392baa8-62e1-4b0c-b53b-a5b20032bdc1"
            }, {
                id: "solder-tips",
                name: "Solder Tips",
                categoryId: "61d6c890-2d5d-4194-97ec-a5b20032b0e7"
            }, {
                id: "fume-extraction",
                name: "Fume Extraction",
                categoryId: "0ff68c0d-099c-4b52-a63d-a5b20032a69c"
            }, {
                id: "desoldering-irons",
                name: "Desoldering Irons",
                categoryId: "9fe384f1-73e0-47e3-91d0-a5b20032a407"
            }, {
                id: "desoldering-braid",
                name: "Desoldering Braid",
                categoryId: "3f8cff7a-adec-4db5-96ad-a5b20032c010"
            }, {
                id: "hot-air-nozzles",
                name: "Hot Air Nozzles",
                categoryId: "1197a38d-9178-4321-8ac4-a5b20032a740"
            }]
        }, {
            id: "esd-control",
            name: "ESD Control",
            hasChild: true,
            children: [{
                id: "esd-benchtop-mats",
                name: "ESD Benchtop Mats",
                categoryId: "7dda0b9c-8fd8-451e-9458-a5b20032ed4f"
            }, {
                id: "esd-document-holders",
                name: "ESD Document Holders",
                categoryId: "86aa8eec-1025-4af4-afd2-a5b20032d4ca"
            }, {
                id: "esd-safe-trays",
                name: "ESD Safe Trays",
                categoryId: "6919ef54-b249-434c-b3c0-a5b20032dcaa"
            }, {
                id: "wrist-straps",
                name: "Wrist Straps",
                categoryId: "c369034d-902f-46e2-a51e-a5b20032e8ad"
            }, {
                id: "nitrile-gloves",
                name: "Nitrile Gloves",
                categoryId: "4a2ddba1-7781-48c0-8206-a5b20032e304"
            }, {
                id: "in-plant-handlers",
                name: "In-Plant Handlers",
                categoryId: "70084e0a-6a7c-49d1-a8a5-a5b20032dd40"
            }, {
                id: "caution-labels",
                name: "Caution Labels",
                categoryId: "686d4b71-b87b-4209-90ba-a5b20032d3e0"
            }, {
                id: "static-shielding-bags",
                name: "Static Shielding Bags",
                categoryId: "a924013b-aa03-4b47-929e-a5b20032d248"
            }, {
                id: "moisture-barrier-bags",
                name: "Moisture Barrier Bags",
                categoryId: "6e1c818e-a894-4490-a01a-a5b20032d206"
            }, {
                id: "workstation-monitors",
                name: "Workstation Monitors",
                categoryId: "e5bf952b-3f6b-4756-b360-a5b20032cfb3"
            }]
        }]
    },
    mutations: {
        updateLoading(state, payload) {
            state.loading = payload;
        }
    },
    actions: {

    }
});

export default store;