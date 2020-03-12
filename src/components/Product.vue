<template>
    <div class="all">
        <p>Poop</p>
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
            API.getProduct(id)
            .then((result) => {
                console.log (result)
                this.product = result
            })
        }
    },
}
</script>