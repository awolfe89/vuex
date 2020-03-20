<template>
  <div class="all products">
    <div class="loader" v-if="loading">
      <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="px-5 py-3">
        <v-skeleton-loader
            v-for="pageNum in pageNums"
            :key="pageNum"
            class="mx-auto"
            max-width="500"
            type="card"
        ></v-skeleton-loader>
      </v-sheet>
    </div>
    <template v-else class="list-unstyled">
        <ul class="list-unstyled" v-if="isAdmin">
            <button @click="save()"
                type="button"
                class="btn btn-secondary"
            >Push to Firestore</button>
            <button @click="saveToCSV()"
                type="button"
                class="btn btn-secondary"
            >Export to CSV</button>
        </ul>
        <v-container>
            <v-app-bar color="indigo" dark>
                <v-toolbar-title>Filters</v-toolbar-title>
                <v-spacer></v-spacer>
                <h4>Showing {{fromNums}} To {{toNums}} Of {{totalNums}} Entries</h4>
                <v-spacer></v-spacer>
                <v-select label="" 
                    v-model="searchBrand" 
                    :items="brandsList" 
                    @change="searchChange"/>
            </v-app-bar>
            <v-row>
                <v-col v-for="(product, idx) in products" :key="idx" cols="6">
                    <v-card light :to="{name: 'ProductDetail', params: {id: product.id, collection: $route.params.id}}">
                        <div class="d-flex flex-no-wrap flex-start">
                            <v-avatar class="ma-3" size="200" tile>
                                <v-img :src="product.largeImagePath"></v-img>
                            </v-avatar>
                            <div class="d-flex product-content">
                                <div>
                                    <v-card-title v-if="product.pageTitle" class="headline" v-text="product.pageTitle"></v-card-title>
                                    <v-card-title v-else class="headline" v-text="product.brand.name + ' ' + product.shortDescription"></v-card-title>
                                    <v-card-subtitle class="text-right" v-text="product.brand.name"></v-card-subtitle>
                                    <v-card-subtitle class="text-right py-0" v-text="'List: ' + product.pricing.unitListPriceDisplay"></v-card-subtitle>
                                </div>
                                <v-card-actions class="d-block text-right">
                                    <v-btn outlined small tile color="indigo" :to="{name: 'ProductDetail', params: {id: product.id, collection: $route.params.id}}">View</v-btn>
                                    <v-btn outlined small tile color="success">Buy Now</v-btn>
                                </v-card-actions>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <div class="text-center">
            <v-pagination v-model="currentPageNum" 
                :length="totalPages"
                :total-visible="7"
                @input="changePage"
                circle
            ></v-pagination>
        </div>
    </template>
  </div>
</template>

<script>
import API from '@/lib/API'
import { writeProductData, downToCSV } from '@/lib/write'

export default {
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

            totalPages: 1,
            pageNums: 20,
            searchBrand: '',
            searchText: '',
            brandsList: [],
            fromNums: 0,
            toNums: 0,
            totalNums: 0,
            currentPageNum: 1,
            collapseOnScroll: true
        }
    },
    created() {
        this.initData(1, 20);
    },
    methods: {
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
        },

        initData(page, pageNums, searchBrand = '', searchText = '') {
            let collectionName = "";
            
            this.$store.state.categories.forEach((category, idx1) => {
                if (category.id == this.$route.params.id) {
                     collectionName = category.name;
                } else {
                    category.children.forEach((subcategory, idx2) => {
                        if (subcategory.id == this.$route.params.id) {
                            collectionName = subcategory.name
                        }
                    })
                }
            });
            this.loading = true;
            
            API.getProductsByCollection(collectionName, page, pageNums, searchBrand, searchText).then(products => {
                if (this.isAdmin) {
                    this.products = products;
                } else {
                    this.products = products.dbData;
                    this.totalNums = products.totals;
                    if(this.totalNums>0) {
                        this.fromNums = (this.currentPageNum - 1) * this.pageNums + 1;
                        this.toNums = this.fromNums + this.products.length - 1;
                    } else {
                        this.fromNums = 0;
                        this.toNums = 0;
                    }
                    this.totalPages = Math.ceil(this.totalNums / pageNums);
                }
                this.loading = false;
            });

            if (!this.isAdmin) {
                API.getBrandsList(collectionName).then(brands => {
                    brands.unshift('');
                    this.brandsList = brands
                });
            }
        },

        searchChange() {
            this.currentPageNum = 1;
            this.initData(this.currentPageNum, this.pageNums, this.searchBrand, this.searchText);
        },

        changePage(page) {
            this.initData(page, this.pageNums, this.searchBrand, this.searchText);
        },
    }
}
</script>

<style>
.v-responsive__sizer {
    background-color: #00000022;
}
.product-content {
    flex: 1; 
    flex-direction: column; 
    justify-content: space-between;
    padding: 10px;
}
.v-text-field__details {
    display: none;
}
</style>