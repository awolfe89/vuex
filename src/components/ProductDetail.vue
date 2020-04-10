<template>
    <div class="all">
        <div class="loader" v-if="loading">
            <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="px-5 py-3">
                <v-skeleton-loader
                    class="mx-auto"
                    max-width="500"
                    type="card"
                ></v-skeleton-loader>
            </v-sheet>
        </div>
        <template v-else>
            <!--- TOP PRODUCT PREVIEW --->
                        <v-app-bar dark
                color="red"
                height='auto'
            >
                <v-toolbar-title class='text-wrap'>{{product.brand ? product.brand.name : ''}} {{product.shortDescription}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-title >${{product.pricing.actualPrice}}</v-toolbar-title >
            </v-app-bar>
  <v-card class="inline-block mx-auto">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            height="auto"
            width="300"
            :src="product.largeImagePath"
          ></v-img>
        </v-col>
        <v-col
          cols="auto"
          class="text-left"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class='text-left'>
                <v-card-title class='text-left'>{{product.shortDescription}}</v-card-title>
            </v-col>
            <v-col class="text-right">
                <v-text>Brand: {{product.brand.name}}</v-text>
                 <v-card-subtitle class="text-right py-0" v-text="'List: ' + product.pricing.unitListPriceDisplay" style='text-decoration: line-through'></v-card-subtitle>
                <v-text>Your Price ${{product.pricing.actualPrice}}</v-text>
                <v-card-subtitle class="text-right py-0" v-text="product.availability.message"></v-card-subtitle>
                <v-card-subtitle class="text-right py-0" v-text="'Manufactured In: ' + product.countryOfOrigin"></v-card-subtitle>
            </v-col>
            <v-col class='text-right'>
              <v-btn class='primary'> <v-icon>shopping_cart</v-icon> Buy
              </v-btn> 
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
            <!--- END TOP PRODUCT PREVIEW  ---> 
<!--- PRODUCT TABS ---> 
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        Recents
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Favorites
        <v-icon>mdi-heart</v-icon>
        <v-card flat> hello</v-card>
      </v-tab>

      <v-tab href="#tab-3">
        Nearby
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>


 

  </v-card>
<!---- END PRODUCT TABS ---> 

            <v-container>
                <v-row dense>
                    <v-col cols="12">
                    <v-card color="#C9CDD6" light>
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
                            <li>Brand: {{product.brand ? product.brand.name : 'Empty'}}</li>
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
        </template>
    </div>
</template>

<script>
import API from '@/lib/API'

export default {
    inject: ['theme'],
    name: 'Product',
    data(){
        return{
            product: {},
            value: 0,
            loading: true
        }
    },
    created(){
        this.loading = true;
        const { id, collection } = this.$route.params;
        let collectionName = "";
        this.$store.state.categories.forEach((category, idx1) => {
            if (category.id == collection) {
                    collectionName = category.name;
            } else {
                category.children.forEach((subcategory, idx2) => {
                    if (subcategory.id == collection) {
                        collectionName = subcategory.name
                    }
                })
            }
        });
        this.load(id, collectionName)
    },
    methods: {
        total: function(product){
            sum = this.product.properties.mapPrice - this.product.pricing.actualPrice.tofixed(2)
            return value
        },

    load(id, collectionName){     
        API.getProduct(id,collectionName)
            .then((result) => {
              this.loading = false;
              this.product = result
            })
    }
  },
}
</script>

<style scoped>

  .card-content {
    padding: 15px 10px 15px 0;
  }
    .card-content__text {
    padding: 15px 10px 15px 0;
  }
.all{
    width: 90%;
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