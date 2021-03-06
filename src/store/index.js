import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        loading: false,
        categories: [
          {
            id: "adhesives",
            name: "Adhesives",
            icon: 'colorize',
            hasChild: true,
            children: [

                {
                    id: "anti-static-tape",
                    name: "Anti Static Tape",
                    icon: 'fas fa-magnet',
                    categoryId: "6bfd248d-419a-4130-b6ee-a5b200328573"
                },
                {
                    id: "dispensing-needles",
                    name: "Dispensing Needles",
                    categoryId: '817a439d-e777-4b5b-a157-a5b200327661'
                },
                {
                    id: "polymide-tape",
                    name: "Polyimide Tape",
                    categoryId: "86e076d8-2fb7-4da8-96a1-a5b200328d53"
                }, 
                {
                    id: "sealants",
                    name: "Sealants",
                    categoryId: "7f4a38d3-a451-49a3-8ad9-a5b200328086"
                },
                {
                    id: "splicing-tape",
                    name: "Splicing Tape",
                    categoryId: "e0876155-3f11-4c1e-8050-a5b2003290e5"
                },
                {
                    id: "spray-adhesives",
                    name: "Spray Adhesives",
                    categoryId: '0f5c665b-1b9a-48d6-b892-a5b200327048'
                }
        ]
        }, {
            id: "chairs",
            name: "Chairs",
            icon: 'event_seat',
            route: "categories/chairs",
            categoryId: "27261e88-8d06-4dc4-92cd-a5b20032a09b",
            hasChild: false,
            children: []
        }, {
            id: "chemicals-cleaning",
            name: "Chemicals & Cleaning",
            icon: 'gradient',
            hasChild: true,
            children: [

                {
                    id: "cleaning-swabs",
                    name: "Cleaning Swabs",
                    categoryId: "97b2bded-e1d3-4cf8-ad70-a5b20032cd56"
                },
                {
                    id: "cleaning-wipes",
                    name: "Cleaning Wipes",
                    categoryId: "740af679-5e6c-46b0-a3a2-a5b20032d150"
                },
                {
                    id: "contact-cleaners",
                    name: "Contact Cleaners",
                    categoryId: "4d1551cc-a42a-4619-acd6-a5b20032b416"
                },
                {
                    id: "conformal-coatings",
                    name: "Conformal Coatings",
                    categoryId: "fb9f7c32-3b5d-4de7-aa0f-a5b20032b1fb"
                },
                {
                    id: "degreasers",
                    name: "Degreasers",
                    categoryId: "89550d15-8f17-427f-a4a0-a5b20032b4c4"
                },
                {
                    id: "dusters",
                    name: "Dusters",
                    categoryId: "53f56162-a5c7-49d2-a01e-a5b20032bf17"
                },
                {
                    id: "esd-brushes",
                    name: "ESD Brushes",
                    categoryId: "658a6bb4-ed5f-4dee-a68e-a5b20032acd6"
                }, 
                {
                    id: "fiber-optic-cleaners",
                    name: "Fiber Optic Cleaners",
                    categoryId: "7283059e-8f49-48e8-b316-a5b20032c145"
                },
                {
                    id: "floor cleaner",
                    name: "Floor Cleaners",
                    categoryId: "648568b2-2be8-4bd4-acb3-a5b20032b71c"
                },
                {
                    id: "flux-removers",
                    name: "Flux Removers",
                    categoryId: "9d568b5a-77fc-4fc1-b19a-a5b20032b36e",
                },
                {
                    id: "general-cleaners",
                    name: "General Cleaners",
                    categoryId: "45e37324-4cbd-49f3-8ccf-a5b20032b7ef"
                },
                {
                    id: "solvents",
                    name: "Solvents",
                    categoryId: "3260b768-f56b-4a90-bfc4-a5b20032b3d9"
                }
        ]
        }, {
            id: "cleanroom",
            name: "Safety & Cleanroom",
            icon: 'local_pharmacy',
            hasChild: true,
            children: [
                {
                    id: "cleanroom-chairs",
                    name: "Cleanroom Chairs",
                    categoryId: "be97b912-ef0c-40a5-9e0e-a5b20032d687"
                },
                {
                    id: "gloves",
                    name: "Cleanroom Gloves",
                    categoryId: "9a4482fa-cd63-40d7-ad28-a5b20032d47f"
                },
                {
                    id: "shoe-covers",
                    name: "Shoe Covers",
                    categoryId: "c370f5cc-0615-48e2-bca4-a5b20032d523"
                },
                {
                    id: "wipes",
                    name: "Wipes",
                    categoryId: "4518659c-444f-4e0e-a1fd-a5b20032dc80"
                }
            ]
        }, {
            id: "tools",
            name: "Tools",
            icon: 'build',
            hasChild: true,
            children: [
                {
                    id: "crimpers",
                    name: "Crimpers",
                    categoryId: "4c187528-23a6-449d-8127-a5b2003341c6"
                },
                {
                    id: "flush-cutters",
                    name: "Flush Cutters",
                    categoryId: "cd154a03-fa16-47bc-a609-a5b200334cf6"
                },
                {
                    id: "heat-guns",
                    name: "Heat Guns",
                    categoryId: "fe14bf86-e9ec-4f33-9f4c-a5b200336490"
                },
                {
                    id: "heat-gun-accessories",
                    name: "Heat Gun Accessories",
                    categoryId: "c7039933-0a34-4f2e-b431-a5b2003363bd"
                },
                {
                    id: "hex-wrenches",
                    name: "Hex Wrenches",
                    categoryId: "68e77c63-cb6a-4be4-942e-a5b20033d646"
                },
                {
                    id: "lead-forming",
                    name: "Lead Forming",
                    categoryId: "9459d200-a4d7-461c-a769-a5b200337e12"
                },
                {
                    id: "nut-drivers",
                    name: "Nut Drivers",
                    categoryId: "f8f0ce57-f85d-44d9-b243-a5b200338afb"
                },
                {
                    id: "punches-dies",
                    name: "Punches & Dies",
                    categoryId: "2d90a81e-711c-4c84-bcdf-a5b200337cae"
                },
                {
                    id: "scissors",
                    name: "Scissors",
                    categoryId: "1b0f7c2f-a90f-4399-a351-a5b200334bae"
                },
                {
                    id: "sockets",
                    name: "Sockets",
                    categoryId: "bc90ff8c-9c0d-43b9-8609-a5b20033b26c"
                },
                {
                    id: "torque-screwdrivers",
                    name: "Torque Screwdrivers",
                    categoryId: "b9159a93-525f-4f06-938b-a5b20033c4d7"
                },
                {
                    id: "tweezers",
                    name: "Tweezers",
                    categoryId: "5b6b3566-565b-4cf8-a4d2-a5b20033ce12"
                },
                {
                    id: "wire-cutters",
                    name: "Wire Cutters",
                    categoryId: "cd154a03-fa16-47bc-a609-a5b200334cf6"
                }
            ]
        }, {
            id: "labels",
            name: "Labels",
            icon: 'label',
            hasChild: true,
            children: [
                {
                id: "printer_labels",
                name: "Printer Labels",
                categoryId: "af066d38-4c66-4335-bee7-a5b2003409ac"
                },
                {
                id: "thermal-transfer-labels",
                name: "Thermal Transfer Labels",
                categoryId: "d0018e2d-c158-4f53-814e-a5b200340bb9"
                },
                {
                id: "signage",
                name: "Signage",
                categoryId: "64e28ccb-521f-42cd-ae08-a5b20034131e"
               }
            ]
        }, {
            id: "magnification-lighting",
            name: "Magnification & Lighting",
            icon: 'highlight',
            hasChild: true,
            children: [
                {
                    id: "lighted-magnifiers",
                    name: "Lighted Magnifiers",
                    categoryId: "5cb401cd-6ddb-47a6-ac87-a5b200341f5e"
                },
                {
                    id: "microscopes",
                    name: "Microscopes",
                    categoryId: "ea4e5903-71ce-4bdf-83ab-a5b2003421ce"
                },
                {
                    id: "microscope-accessories",
                    name: "Microscope Accessories",
                    categoryId: "3d043975-2c67-4687-9808-a5b200342608"
                },
                {
                    id: "task-lights",
                    name: "Task Lights",
                    categoryId: "4a412126-5a23-46ee-b232-a5b200341b94"
                },
             ]
        }, {
            id: "safety",
            name: "Safety",
            icon: 'perm_identity',
            hasChild: true,
            children: [
                {
                    id: "anti-fatigue-mats",
                    name: "Anti-Fatigue Mats",
                    categoryId: "6ea9cb12-0fb9-4901-9f6b-a5b2003293a4"
                },
                {
                    id: "coated-gloves",
                    name: "Coated Gloves",
                    categoryId: "88babe3f-9270-4661-80bc-a5b200328667"
                },
                {
                    id: "ear-plugs",
                    name: "Ear Plugs",
                    categoryId: "fb7f252e-13b8-426d-88c5-a5b200329101"
                },
                {
                    id: "inspection-gloves",
                    name: "Inspection Gloves",
                    categoryId: "c2907b2b-4ded-4470-8285-a5b200328992"
                },
                {
                    id: "lab-coats",
                    name: "Lab Coats",
                    categoryId: "90931350-7455-4dcd-b6d6-a5b200329901"
                },
                {
                    id: "lab-gloves",
                    name: "Lab Gloves",
                    categoryId: "e6fdd58c-802a-4969-8448-a5b2003289c5"
                },
                {
                    id: "safety-glasses",
                    name: "Safety Glasses",
                    categoryId: "5f6662a4-4919-4950-9b0a-a5b2003280c3"
                },
            ]
        },{
            id: "soldering-materials",
            name: "Soldering Materials",
            icon: 'space_bar',
            hasChild: true,
            children: [
                {
                id: "bar-solder",
                name: "Bar Solder",
                categoryId: "ad954d05-4644-4de8-8a6d-a5b20032ae52"
            }, 
            {
                id: "flux",
                name: "Flux",
                categoryId: "5202ca53-219b-4f78-90a2-a5b20032b4bf"
            }, 
            {
                id: "solder-paste",
                name: "Solder Paste",
                categoryId: "4b7402c1-f134-4d21-b9c3-a5b20032ae98"
            }, 
            {
                id: "wire-solder",
                name: "Wire Solder",
                categoryId: "6d7722c3-2d5a-4ecd-bc88-a5b20032af2e"
            }
        ]
        }, {
            id: "soldering-station-irons",
            name: "Soldering Stations & Irons",
            icon: 'power',
            hasChild: true,
            children: [
                {
                    id: "desoldering-braid",
                    name: "Desoldering Braid",
                    categoryId: "3f8cff7a-adec-4db5-96ad-a5b20032c010"
                },
                {
                    id: "desoldering-irons",
                    name: "Desoldering Irons",
                    categoryId: "9fe384f1-73e0-47e3-91d0-a5b20032a407"
                },
                {
                    id: "desoldering-tips",
                    name: "Desoldering Tips",
                    categoryId: "c616e28b-653e-4d92-8132-a5b20032b039"
                },
                {
                    id: "flux-removers",
                    name: "Flux Removers",
                    categoryId: "9d568b5a-77fc-4fc1-b19a-a5b20032b36e",
                },
                {
                    id: "fume-extraction",
                    name: "Fume Extraction",
                    categoryId: "0ff68c0d-099c-4b52-a63d-a5b20032a69c"
                },
                {
                    id: "fume-extractor-accessories",
                    name: "Fume Extractor Accecssories",
                    categoryId: "e30469c8-6f2a-4fd2-8033-a5b20032a65b"
                },
                {
                    id: "hot-air-nozzles",
                    name: "Hot Air Nozzles",
                    categoryId: "1197a38d-9178-4321-8ac4-a5b20032a740"
                },
                {
                    id: "soldering-irons",
                    name: "Soldering Irons",
                    categoryId: "a009264d-8b68-461a-8961-a5b20032bdfa"
                },
                {
                    id: "soldering-iron-accessories",
                    name: "Soldering Iron Accessories",
                    categoryId: "1392baa8-62e1-4b0c-b53b-a5b20032bdc1"
                },
                {
                    id: "soldering-stations",
                    name: "Soldering Stations",
                    categoryId: "8bda5bf3-96ec-4a20-b86d-a5b20032bf21"
                },
                {
                    id: "solder-tips",
                    name: "Solder Tips",
                    categoryId: "61d6c890-2d5d-4194-97ec-a5b20032b0e7"
                },
            ]
        }, {
            id: "storage-handling",
            name: "Storage & Handling",
            icon: 'local_shipping',
            hasChild: true,
            children: [
                {
                    id: "circuit-board-shippers",
                    name: "Circuit Board Shippers",
                    categoryId: "07534808-294f-4309-aecd-a5b2003263fa"
                },
                {
                    id: "stacking-bins",
                    name: "Stacking Bins",
                    categoryId: "42241637-990f-4338-972f-a5b200344adb"
                },
                {
                    id: "utility-carts",
                    name: "Utility Carts",
                    categoryId: "e6495446-4d09-4f34-bddd-a5b200342d8a"
                },
            ]
        }, {
            id: "shop-by-brand",
            name: "Shop By Brand",
            icon: 'card_travel',
            hasChild: true,
            children: [
                {
                    id: "acl-staticide",
                    name: "ACL Staticide",
            
                },
                {
                    id: "stacking-bins",
                    name: "Stacking Bins",
                    categoryId: "42241637-990f-4338-972f-a5b200344adb"
                },
                {
                    id: "utility-carts",
                    name: "Utility Carts",
                    categoryId: "e6495446-4d09-4f34-bddd-a5b200342d8a"
                },
            ]
        },  {
            id: "esd",
            name: "ESD",
            icon: 'flash_off',
            hasChild: true,
            children: [
                {
                    id: "caution-labels",
                    name: "Caution Labels",
                    categoryId: "686d4b71-b87b-4209-90ba-a5b20032d3e0"
                },
                {
                    id: "esd-benchtop-mats",
                    name: "ESD Benchtop Mats",
                    categoryId: "7dda0b9c-8fd8-451e-9458-a5b20032ed4f"
                },
                {
                    id: "esd-document-holders",
                    name: "ESD Document Holders",
                    categoryId: "86aa8eec-1025-4af4-afd2-a5b20032d4ca"
                },
                {
                    id: "esd-floor-mats",
                    name: "ESD Floor Mats",
                    categoryId: "6596b1f3-49fb-49e8-a866-a5b20032eac8"
                },
                {
                    id: "esd-safe-trays",
                    name: "ESD Safe Trays",
                    categoryId: "6919ef54-b249-434c-b3c0-a5b20032dcaa"
                },
                {
                    id: "heel-grounders",
                    name: "Heel Grounders",
                    categoryId: "6abbc9c3-da90-402f-83ee-a5b20032e84f"
                },
                {
                    id: "in-plant-handlers",
                    name: "In-Plant Handlers",
                    categoryId: "70084e0a-6a7c-49d1-a8a5-a5b20032dd40"
                },
                {
                    id: "moisture-barrier-bags",
                    name: "Moisture Barrier Bags",
                    categoryId: "6e1c818e-a894-4490-a01a-a5b20032d206"
                },
                {
                    id: "nitrile-gloves",
                    name: "Nitrile Gloves",
                    categoryId: "4a2ddba1-7781-48c0-8206-a5b20032e304"
                },
                {
                    id: "static-shielding-bags",
                    name: "Static Shielding Bags",
                    categoryId: "a924013b-aa03-4b47-929e-a5b20032d248"
                },
                {
                    id: "workstation-monitors",
                    name: "Workstation Monitors",
                    categoryId: "e5bf952b-3f6b-4756-b360-a5b20032cfb3"
                },
                {
                    id: "wrist-straps",
                    name: "Wrist Straps",
                    categoryId: "c369034d-902f-46e2-a51e-a5b20032e8ad"
                },
            ]
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