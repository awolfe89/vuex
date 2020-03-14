<template>
    <div class="all">
       
    <v-app-bar
      dark
      color="pink"
      height='auto'
    >
      <v-toolbar-title class='text-wrap'>{{product.brand.name}} {{product.shortDescription}}</v-toolbar-title>

  
<v-spacer></v-spacer>
    <v-toolbar-title >${{product.pricing.actualPrice}}</v-toolbar-title >
    </v-app-bar>
    <div class='productImage'>
  <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            height="200"
            width="300"
            :src="product.largeImagePath"
          ></v-img>
        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">
             
            </v-col>

            <v-col class="px-0">
             
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  
    </div>
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">Details</v-card-title>
            <h3 class='subHead'>Pricing</h3>
              <ul class='description'> 
                <li>List Price {{product.pricing.unitListPriceDisplay}}</li>
                <li>MAP Price: {{product.properties.mapPrice}}</li>   
                <li>Sale Price ${{product.pricing.actualPrice}}</li>
                <li>Savings off of List ${{product.pricing.unitListPrice - product.pricing.actualPrice.toFixed(1)}}</li>                
              </ul>
            <h3 class='subHead'>QTY Breaks</h3>
              <ul class='description'> 
                <li v-if='product.pricing.actualBreakPrices[1]'>
                      Buy {{product.pricing.actualBreakPrices[1].breakQty}}
                      or more at {{product.pricing.actualBreakPrices[1].breakPrice}}
                      and save {{product.pricing.actualBreakPrices[1].savingsMessage}}
                  </li> 
                  <li v-if='product.pricing.actualBreakPrices[2]'>
                      Buy {{product.pricing.actualBreakPrices[2].breakQty}}
                      or more at {{product.pricing.actualBreakPrices[2].breakPrice}}
                      and save {{product.pricing.actualBreakPrices[2].savingsMessage}}
                  </li> 
                  <li v-else class='red--text'>No QTY Breaks</li>
              </ul>
            <h3 class='subHead'>Shipping Info</h3>
            <ul class='description'>  
              <li>Shipping Weight: {{product.shippingWeight}}</li>
              <li>Shipping Length: {{product.shippingLength}}</li>  
              <li>Shipping Width: {{product.shippingWidth}}</li>   
              <li>Shipping Height: {{product.shippingHeight}}</li> 
              <li>Product Package: {{product.packDescription}}</li>
            </ul>
            <h3 class='subHead'>Info</h3>
              <ul class='description'> 
                <li>Brand: {{product.brand.name}}</li>
                <li>Manufacturer SKU: {{product.manufacturerItem}}</li>
                <li>Country: {{product.countryOfOrigin}}</li>
                <li>MOQ: {{product.properties.hiscoMinimumOrderQty}}</li>
                <li>{{product.availability.message}}</li>  
              </ul>
            <v-card-title class="headline">Description</v-card-title>
            <p class='description' v-html="product.metaDescription"></p>

          </v-card>
        </v-col>

      
      </v-row>
    </v-container>

    </div>
</template>

<script>
import API from '@/lib/API'

export default {
    name: 'Product',
    data(){
        return{
            product: {},
            value: 0
        }
    },
    mounted(){
      const { id, collection } = this.$route.params;
      this.load(id, collection)
    },
    methods: {
    total: function(product){
         sum = this.product.properties.mapPrice - this.product.pricing.actualPrice
          .tofixed(2)
         return value
          },

    load(id,collection){     
      console.log(id)
      console.log(collection)
        API.getProduct(id,collection)
          .then((result) => {
          console.log (result)
          this.product = result
      })
    }
  },
}
</script>

<style scoped>

.prodImg {
    
    width: 20vw;
    height: auto;
}
.all{
    width: 90%;
}
.productImage {
    margin-top: 2vh;
    text-align: center;
    justify-content: space-between;
}

.description {
    margin-left: 5%;
    padding-bottom: 3vh;
}
.subHead {
  margin-left: 4%;
}

.headline{
  text-decoration: underline;
}
</style>