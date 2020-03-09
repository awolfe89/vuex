<template>
  <div class="all">

  <!-- SKELETON LOADER -->  
  <div class='loader' v-if='loading'>
          <v-sheet 
    :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
    class="px-5 pt-3 pb-3"
  >
    <v-skeleton-loader 
v-for='item in items'
:key='item.id'
      class="mx-auto"
      max-width="500"
      type="card"
    ></v-skeleton-loader>
  </v-sheet>
  </div>
    <ul v-if="!loading" class="list-unstyled">
      <!---OLD DATA BUTTONS
      <button @click="showData = !showData" type="button" class="btn btn-secondary">Show All Data</button>
      <button @click="showBrands = !showBrands" type="button" class="btn btn-secondary">Brands</button>
      -->
      <button v-if="isAdmin" @click="save()" type="button" class="btn btn-secondary">Push to Firestore</button>
      <button v-if="isAdmin" @click="saveToCSV()" type="button" class="btn btn-secondary">Export to CSV</button>

      <div v-if="showBrands">
        <li class="media" v-for="product in products" :key="product.id">{{ product.brand.name }}</li>
      </div>
      </ul>
<!---- ITEM HEADLINE --->
      
      <v-row
        align="center"
        justify="center"
      >
      </v-row>
   <v-container v-if='!loading'>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="red"
            light
          >

            <v-card-title class="headline">{{$route.name}}</v-card-title>
            <v-card-subtitle class='butt'>Solder Tips from Pace, HAKKO, JBC and More.</v-card-subtitle>


            <v-divider></v-divider>
            <v-card-subtitle>Filters:</v-card-subtitle>
            <v-card-actions>
              <br/>
              <br/>
              <div class="text-center">
<!---- MENU SBB BUTTON --->
    <v-menu>
      <template v-slot:activator="{ on: menu }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              color="primary"
              dark
              v-on="{ ...tooltip, ...menu }"
            >Brand</v-btn>
          </template>
          <span>Click to Filter By Brand</span>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item
          v-for="(brandItem, index) in brandItems"
          :key="index"
          @click=""
        >
                <v-list-item-title>{{ brandItem.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
       </v-card-actions>
      </v-card>
    </v-col>
<!---- PRODUCT CARDS --->

        <v-col
       
          v-for="product in products" :key="product.key"
          cols="12"
        >
          <v-card
            light
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                              <v-avatar
                class="ma-3"
                size="200"
                tile
              >
                <v-img :src="product.mediumImagePath"></v-img>
              </v-avatar>
                <v-card-title
                  v-if="product.pageTitle"
                  class="headline"
                  v-text="product.pageTitle"
                ></v-card-title>
                <!---- ELSE --->
                  <v-card-title
                  v-else 
                  class="headline"
                >{{product.brand.name}}{{product.shortDescription}}</v-card-title>

                <v-card-subtitle v-text="product.brand.name"></v-card-subtitle>
                <v-card-subtitle>List: {{product.pricing.unitListPriceDisplay}}</v-card-subtitle>
              </div>


                  <v-card-actions>
                    <v-btn
                      color="blue"
                      text
                    >
                      View
                    </v-btn>

                    <v-btn
                      color="blue"
                      text
                    >
                      Buy Now
                    </v-btn>
    </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
     <!--- END PRODUCT CARDS----> 
 <div class="text-center">
    <v-pagination
    
      :length="6"
    ></v-pagination>
  </div>
   
 
  <!-- FINAL DIV -->
  </div>
</template>

<script>
import API from '@/lib/API'
import { writeProductData, downToCSV } from '@/lib/write'
import queryAndFilter from '@/lib/Queries'

export default {
  name: 'Solder Tips',
  inject: ['theme'],
  data() {
    
    return {
      isAdmin: process.env.MODE === 'manage',
      activeTerm: null,
      showData: false,
      showBrands: false,
      loading: true,
      products: [],
      message: '',
      drawer: '',
      items: [
        { icon: 'home', text: 'Home' },
        { icon: 'forward', text: 'Adhesives' },
        { icon: 'forward', text: 'Benches & Seating' },
        { icon: 'forward', text: 'Chemicals & Cleaning' },
        { icon: 'forward', text: 'Cleanroom' },
        { icon: 'forward', text: 'Hand Tools' },
        { icon: 'forward', text: 'Labels' },
        { icon: 'forward', text: 'Magnification & Lighting' },
        { icon: 'forward', text: 'Material Handling' },
        { icon: 'forward', text: 'Coatings' },
        { icon: 'forward', text: 'Soldering Materials' },
        { icon: 'forward', text: 'Soldering Stations & Irons' },
        { icon: 'forward', text: 'Soldering Tips' },
        { icon: 'forward', text: 'Static Control' },
      ],
        brandItems: [
        { title: 'Click Me1' },
        { title: 'Click Me2' },
        { title: 'Click Me3' },
        { title: 'Click Me4' },
      ],
    };

  },

  mounted() {
    this.load()
  },
  methods: {
    load() {
      API.getSolderTips(1).then(products => {
        this.products = products
        this.loading = false
      })
    },
    async save() {
      this.$set(this, 'message', '... Processing')
      try {
        let count = 0
        this.products.map(product => {
          writeProductData('Solder Tips', product)
          this.$set(this, 'message', `${++count} products added`)
        })
        this.$set(this, 'message', '')
      } catch (error) {
        console.log(error)
      }
    },
 
    saveToCSV() {
      let rows = [
        [
          'Brand',
          'SKU',
          'List Price',
          'Actual Price',
          'Shipping Length',
          'Shipping Width',
          'Shipping Height',
          'Shipping Weight',
          'Lead Time',
          'MOQ',
          'Country of Origin',
          'QTY on Hand',
          'Product Category',
          'Description'
        ]
      ]
      this.products.map(product => {
        const doc = [
          product.brand.name,
          product.manufacturerItem,
          product.pricing.unitListPriceDisplay,
          product.pricing.actualPriceDisplay,
          product.shippingLength,
          product.shippingWidth,
          product.shippingHeight,
          product.shippingWeight,
          product.inventoryDetail.leadTime,
          product.minimimOrderQty,
          product.countryOfOrigin,
          product.qtyOnHand,
          product.productDetailUrl,
          product.shortDescription
        ]
        rows.push(doc)
      })

      const filename = 'sniper_product_' + new Date().toLocaleString()
      downToCSV(rows, filename)
    }
  }
}
</script>

<style scoped>
.butt {
  color: white;
}
</style>
