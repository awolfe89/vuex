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
            <div class='productImage'>
                <v-card class="d-inline-block mx-auto">
                    <v-container>
                        <v-row justify="space-between">
                            <v-col cols="auto">
                            <v-img
                                width="300"
                                :src="product.largeImagePath"
                            ></v-img>
                          <!--  <v-btn large color="#F08122">Buy Now</v-btn> -->
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
            <v-app-bar dark
                color="red"
                height='auto'
            >
                <v-toolbar-title class='text-wrap'>{{product.brand ? product.brand.name : ''}} {{product.shortDescription}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-title >${{product.pricing.actualPrice}}</v-toolbar-title >
            </v-app-bar>

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
                console.log(result);
              this.loading = false;
              this.product = result
            })
    }
  },
}
</script>

<style scoped>

.prodImg {
    
    width: 20vw;
    /* height: auto; */
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