import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        categories: [{
            id: "adhesives",
            name: "Adhesives",
            hasChild: true,
            children: [{
                id: "spray-adhesives",
                name: "Spray Adhesives",
                categoryId: '27261e88-8d06-4dc4-92cd-a5b20032a09b'
            }, {
                id: "dispensing-needles",
                name: "Dispensing Needles"
            }, {
                id: "sealants",
                name: "Sealants"
            }, {
                id: "anti-static-tape",
                name: "Anti Static Tape"
            }, {
                id: "splicing-tape",
                name: "Polyimide Tape"
            }, {
                id: "splicing-tape",
                name: "Splicing Tape"
            }]
        }, {
            id: "benches-seating",
            name: "Benches & Seating",
            route: "categories/benches-seating",
            hasChild: true,
            children: [{
                id: "chairs",
                name: "Chairs"
            }, {
                id: "stools",
                name: "Stools"
            }, {
                id: "workbenches",
                name: "Workbenches"
            }]
        }, {
            id: "chemicals-cleaning",
            name: "Chemicals & Cleaning",
            hasChild: true,
            children: [{
                id: "esd-brushes",
                name: "ESD Brushes"
            }, {
                id: "flux-removers",
                name: "fluxRemovers"
            }, {
                id: "degreasers",
                name: "Degreasers"
            }, {
                id: "solvents",
                name: "Solvents"
            }, {
                id: "contact-cleaners",
                name: "Contact Cleaners"
            }, {
                id: "floor cleaner",
                name: "Floor Cleaner"
            }, {
                id: "dusters",
                name: "Dusters"
            }, {
                id: "fiber-optic-cleaners",
                name: "Fiber Optic Cleaners"
            }, {
                id: "cleaning-swabs",
                name: "Cleaning Swabs"
            }, {
                id: "cleaning-wipes",
                name: "Cleaning Wipes"
            }]
        }, {
            id: "cleanroom",
            name: "Cleanroom",
            hasChild: true,
            children: [{
                id: "gloves",
                name: "Gloves"
            }, {
                id: "shoe-covers",
                name: "Shoe Covers"
            }, {
                id: "cleanroom-chairs",
                name: "Cleanroom Chairs"
            }, {
                id: "swabs",
                name: "Swabs"
            }, {
                id: "wipes",
                name: "Wipes"
            }]
        }, {
            id: "tools",
            name: "Tools",
            hasChild: true,
            children: [{
                id: "crimpers",
                name: "Crimpers"
            }, {
                id: "wire-cutters",
                name: "Wire Cutters"
            }, {
                id: "cutters",
                name: "Cutters",
            }, {
                id: "heat-guns",
                name: "Heat Guns",
            }, {
                id: "heat-gun-accessories",
                name: "Heat Gun Accessories"
            }]
        }, {
            id: "labels",
            name: "Labels",
            hasChild: true,
            children: [{
                id: "printer_labels",
                name: "Printer Labels"
            }, {
                id: "thermal-transfer-labels",
                name: "Thermal Transfer Labels"
            }, {
                id: "signage",
                name: "Signage"
            }]
        }, {
            id: "magnification-lighting",
            name: "Magnification & Lighting",
            hasChild: true,
            children: [{
                id: "task-lights",
                name: "Task Lights"
            }, {
                id: "lighted-magnifiers",
                name: "Lighted Magnifiers",
            }, {
                id: "microscopes",
                name: "Microscopes"
            }, {
                id: "microscope-accessories",
                name: "Microscope Accessories"
            }]
        }, {
            id: "soldering-materials",
            name: "Soldering Materials",
            hasChild: true,
            children: [{
                id: "bar-solder",
                name: "Bar Solder"
            }, {
                id: "solder-paste",
                name: "Solder Paste",
            }, {
                id: "wire-solder",
                name: "Wire Solder",
            }]
        }, {
            id: "soldering-station-irons",
            name: "Soldering Stations & Irons",
            hasChild: true,
            children: [{
                id: "soldering-stations",
                name: "Soldering Stations"
            }, {
                id: "soldering-irons",
                name: "Soldering Irons"
            }, {
                id: "soldering-iron-accessories",
                name: "Soldering Iron Accessories"
            }, {
                id: "solder-tips",
                name: "Solder Tips"
            }, {
                id: "fume-extraction",
                name: "Fume Extraction"
            }, {
                id: "desoldering-irons",
                name: "Desoldering Irons"
            }, {
                id: "desoldering-braid",
                name: "Desoldering Braid"
            }, {
                id: "hot-air-nozzles",
                name: "Hot Air Nozzles"
            }, {
                id: "flux-removers",
                name: "fluxRemovers"
            }]
        }, {
            id: "solder-tips",
            name: "Solder Tips",
            hasChild: false,
            children: []
        }, {
            id: "esd-control",
            name: "ESD Control",
            hasChild: true,
            children: [{
                id: "esd-benchtop-mats",
                name: "ESD Benchtop Mats"
            }, {
                id: "esd-document-holders",
                name: "ESD Document Holders"
            }, {
                id: "esd-safe-trays",
                name: "ESD Safe Trays"
            }, {
                id: "wrist-straps",
                name: "Wrist Straps"
            }, {
                id: "nitrile-gloves",
                name: "Nitrile Gloves"
            }, {
                id: "in-plant-handlers",
                name: "In-Plant Handlers"
            }, {
                id: "caution-labels",
                name: "Caution Labels"
            }, {
                id: "static-shielding-bags",
                name: "Static Shielding Bags",
            }, {
                id: "moisture-barrier-bags",
                name: "Moisture Barrier Bags"
            }, {
                id: "workstation-monitors",
                name: "Workstation Monitors"
            }]
        }]
    },
    mutations: {

    },
    actions: {

    }
});

export default store;