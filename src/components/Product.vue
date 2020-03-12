<template>
    <div class="all">
        <v-card-title
            v-if="product.pageTitle"
            class="headline"
            v-text="product.pageTitle"
        ></v-card-title>
        <!---- ELSE --->
        <v-card-title
            v-else 
            class="headline"
        >
        {{product.brand.name}}{{product.shortDescription}}</v-card-title>

        <v-card-subtitle v-text="product.brand.name"></v-card-subtitle>

        <v-card-subtitle>List: {{product.pricing.unitListPriceDisplay}}</v-card-subtitle>
        <v-card-subtitle class='red--text'>Actual: {{product.pricing.actualPrice}}</v-card-subtitle>




 

    <v-app-bar
      dark
      color="pink"
      height='auto'
    >
      <v-toolbar-title class='text-wrap'>{{product.brand.name}}{{product.shortDescription}}</v-toolbar-title>

  
<v-spacer></v-spacer>
    <v-toolbar-title >${{product.pricing.actualPrice}}</v-toolbar-title >
    </v-app-bar>
    <div class='productImage'>
       <!---- <v-img class='prodImg' :src="product.smallImagePath"></v-img>--->
  <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            height="200"
            width="300"
            :src="product.smallImagePath"
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
            <v-col >
                       <v-card-subtitle>List Price {{product.pricing.unitListPriceDisplay}}</v-card-subtitle>
                <v-card-subtitle>Sale Price ${{product.pricing.actualPrice}}</v-card-subtitle>
                <v-card-subtitle>Brand: {{product.brand.name}}</v-card-subtitle>
            </v-col>

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
        }
    },
    mounted(){
        const { id } = this.$route.params;
        this.load(id)
    },
    methods: {
        load(id){
            API.getProductSolderTip(id)
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
    margin: 5%;
    padding-bottom: 3vh;
}
</style>