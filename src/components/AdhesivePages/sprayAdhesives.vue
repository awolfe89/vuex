<template>
  <div class="all">

  <!-- SKELETON LOADER -->  
    <div class='loader' v-if='loading'>
      <v-sheet 
        :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="px-5 pt-3 pb-3"
      >
      <v-skeleton-loader 
        v-for='product in products'
        :key='product.id'
        class="mx-auto"
        max-width="500"
        type="card"
      >
      </v-skeleton-loader>
      </v-sheet>
    </div>
    <ul v-if="!loading" class="list-unstyled">
      <!---OLD DATA BUTTONS
      <button @click="showData = !showData" type="button" class="btn btn-secondary">Show All Data</button>
      <button @click="showBrands = !showBrands" type="button" class="btn btn-secondary">Brands</button>
      -->
      <button v-if="isAdmin" @click="save()" type="button" class="btn btn-secondary">Push to Firestore</button>
      <button v-if="isAdmin" @click="saveToCSV()" type="button" class="btn btn-secondary">Export to CSV</button>
      </ul>
<!---- ITEM HEADLINE --->
      
      <v-row
        align="center"
        justify="center"
      >
      </v-row>
      <v-container v-if='!loading'>
  <div>
    <v-app-bar
      color="red"
      dark
    >


      <v-toolbar-title>Spray Adhesives</v-toolbar-title>

      <v-spacer></v-spacer>
<h4>Showing {{fromNums}} To {{toNums}} Of {{totalNums}} Entries</h4>
      <v-spacer></v-spacer>
      <v-select
        v-model="searchBrand"
        :items="brandsList"
        @change="seachChange"
        />
        <!--- SHOW PAGE NUM FORM AND BRANDS LIST HERE --->

    <!---SHOW PAGE NUM FORM AND BRANDS LIST HERE--->
      <v-spacer></v-spacer>


    </v-app-bar>
  </div>

    
<!---- PRODUCT CARDS --->
    <v-col v-for="product in products" :key="product.key" cols="12">
      <v-card light v-bind:to="{name: 'SprayAdhesives', params: {id: product.id}}">
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-avatar
              class="ma-3"
              size="200"
              tile
            >
            <v-img :src="product.largeImagePath"></v-img>
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
              <v-card-actions>
                  <!--  <router-link 
                      class='secondary-content'
                      v-bind:to="{name: 'Product', params: {id: product.id}}"
                      >
                    <v-btn color="blue" text >
                   
      
                      View
                    </v-btn>
                    </router-link>
                        -->
                    <v-btn
                      color="blue"
                      text
                    >
                      Buy Now
                    </v-btn>
    </v-card-actions>
     </div>
            </div>
          </v-card>
        </v-col>
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


export default {
  name: 'Spray_adhesives',
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
      //Normal Mode
      totalPages:1,
      pageNums:20,
      searchBrand:"",
      searchText:"",
      brandsList:[],
      fromNums:0,
      toNums:0,
      totalNums:0,
      currentPageNum:1,
      collapseOnScroll: true,

    };
  },

  mounted() {
    this.load()
 
  },
  methods: {
    load() {
      this.loadData(1,20,"","")
      if(!this.isAdmin) {
        API.getBrandsList("Spray Adhesives").then(brands => {
          brands.unshift("");
          this.brandsList = brands
        })
      }
    },
    async save() {
      this.$set(this, 'message', '... Processing')
      try {
        let count = 0
        this.products.map(product => {
          writeProductData('Spray Adhesives', product)
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
    },
    loadData(page,pageNums,searchBrand,searchText) {
      this.loading = true
      API.getSprayAdhesives(page,pageNums,searchBrand,searchText).then(products => {
        if(this.isAdmin) {
          this.products = products
        } else { // nomal mode
          this.products = products.dbData
          this.totalNums = products.totals
          this.fromNums = (this.currentPageNum-1) * this.pageNums + 1
          this.toNums = (this.currentPageNum-1) * this.pageNums+this.products.length;
          this.totalPages = Math.ceil(products.totals/pageNums)
          this.totalPages = this.totalPages>20?20:this.totalPages
        }
        this.loading = false
      })
    },
    seachChange() {
      this.currentPageNum = 1
      this.loadData(this.currentPageNum,this.pageNums,this.searchBrand,this.searchText)
    },
    changePage(index) {
      this.currentPageNum = index
      this.loadData(this.currentPageNum,this.pageNums,this.searchBrand,this.searchText)
    },
    previousPage() {
      this.currentPageNum--
      this.currentPageNum = this.currentPageNum<1?1:this.currentPageNum;
      this.loadData(this.currentPageNum,this.pageNums,this.searchBrand,this.searchText)
    },
    nextPage() {
      this.currentPageNum++
      this.currentPageNum = this.currentPageNum>this.totalPages?this.totalPages:this.currentPageNum;
      this.loadData(this.currentPageNum,this.pageNums,this.searchBrand,this.searchText)
    }
  }
}
</script>

<style scoped>

.valued{
  font-weight: bold;
  color: blue;
}
.form-control.ml-1{
  font-weight: bold;
  color: blue;
}

</style>
