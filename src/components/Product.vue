<template>
    <div class="all">
        <p>Poop</p>
       {{listing[0].brand.name}}
    </div>
</template>

<script>
import API from '@/lib/API'

export default {
    name: 'Product',
    data(){
        return{
            listing: [],
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
                this.listing = result.listing
                console.log (result)
            })
        }
    },
}
</script>