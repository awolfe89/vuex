<template>
  <div class="hello">
    <router-view></router-view>

    <div v-if="loading" class="loading-image">

      
        <img src='../assets/loading.gif'>
        <br/>
        <p>
        ...Loading...Loading...
      </p>
    </div>

    <ul v-if="!loading" class="list-unstyled">
      <h4>{{$route.name}}</h4>
      <button @click="showData = !showData" type="button" class="btn btn-secondary">Show All Data</button>
      <button @click="showBrands = !showBrands" type="button" class="btn btn-secondary">Brands</button>
      <button v-if="isAdmin" @click="save()" type="button" class="btn btn-secondary">Push to Firestore</button>
      <button v-if="isAdmin" @click="saveToCSV()" type="button" class="btn btn-secondary">Export to CSV</button>
      <h5>{{ message }}</h5>
      <div v-if="showBrands">
        <li class="media" v-for="product in products" :key="product.id">{{ product.brand.name }}</li>
      </div>

      <li class="media m-4" v-for="product in products" :key="product.id">
        <img :src="product.mediumImagePath" class="mr-3" alt="#" />
        <div class="media-body">
          <h5 class="mt-0 mb-1">
            <a :href="product.productDetailUrl" target="_blank">{{ product.pageTitle }}</a>
          </h5>
          <dl class="row">
            <dt class="col-sm-3">Brand</dt>
            <dd class="col-sm-9">{{ product.brand.name }}</dd>
            <dt class="col-sm-3">SKU</dt>
            <dd class="col-sm-9">{{ product.manufacturerItem }}</dd>
            <dt class="col-sm-3">List Price</dt>
            <dd class="col-sm-9">{{ product.pricing.unitListPriceDisplay }}</dd>
            <dt class="col-sm-3">Actual Price</dt>
            <dd class="col-sm-9">{{ product.pricing.actualPriceDisplay }}</dd>
            <dt class="col-sm-3">Shipping</dt>
            <dd class="col-sm-9">
              <dl class="row">
                <dt class="col-sm-4">Shipping Length</dt>
                <dd class="col-sm-8">{{ product.shippingLength }}</dd>
                <dt class="col-sm-4">Shipping Width</dt>
                <dd class="col-sm-8">{{ product.shippingWidth }}</dd>
                <dt class="col-sm-4">Shipping Height</dt>
                <dd class="col-sm-8">{{ product.shippingHeight }}</dd>
                <dt class="col-sm-4">Shipping Weight</dt>
                <dd class="col-sm-8">{{ product.shippingWeight }}</dd>
              </dl>
            </dd>
          </dl>

          <div v-if="showData">
            <dl class="row">
              <dt class="col-sm-3">Lead Time</dt>
              <dd class="col-sm-9">{{ product.inventoryDetail.leadTime }}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3">MOQ</dt>
              <dd class="col-sm-9">{{ product.minimimOrderQty }}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3">Country of Origin</dt>
              <dd class="col-sm-9">{{ product.countryOfOrigin }}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3">QTY on Hand</dt>
              <dd class="col-sm-9">{{ product.qtyOnHand }}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3">Product Category</dt>
              <dd class="col-sm-9">{{ product.productDetailUrl }}</dd>
            </dl>
            <dl class="row">
              <dt class="col-sm-3">Description</dt>
              <dd class="col-sm-9">{{ product.shortDescription }}</dd>
            </dl>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import API from '@/lib/API'
import { writeProductData, downToCSV } from '@/lib/write'

export default {
  name: 'Flux_Removers',
  data() {
    return {
      isAdmin: process.env.MODE === 'manage',
      activeTerm: null,
      showData: false,
      showBrands: false,
      loading: true,
      products: [],
      fluxRemoverData: [],
      message: ''
    }
  },

  mounted() {
    this.load()
  },
  methods: {
    load() {
      API.getFluxRemovers(1).then(products => {
        this.products = products
        this.loading = false
      })
    },
    async save() {
      this.$set(this, 'message', '... Processing')
      try {
        let count = 0
        this.products.map(product => {
          writeProductData('fluxRemovers', product)
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

      const filename = 'flux_removers_product_' + new Date().toLocaleString()
      downToCSV(rows, filename)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
