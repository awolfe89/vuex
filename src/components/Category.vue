<template>
    <div class='all'>
        <v-toolbar color="indigo" dark>
            <v-toolbar-title>{{category.name}}</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-row dense>
            <v-col
            v-for="(children, idx) in category.children"
            :key="idx"
            :cols="12"       
            >
            
                <v-card :to="{name: 'Products', params: {id: children.id}}">
                  
                           
           
     
                   <v-card-title v-text="children.name"> </v-card-title>
                                   
                
                    <v-card-actions>
                    
                        <v-btn icon color='blue' :to="{name: 'Products', params: {id: children.id}}">
                            <v-icon>{{children.icon}}</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>  
        </v-row>    
    </div>
</template>

<script>
export default {
    data() {
        return {
            category: {}
        }
    },
    watch: {
        '$route.params.id': function(id) {
            this.initData();
        }
    },
    created() {
        this.initData();
    },
    methods: {
        initData() {
            this.category = this.$store.state.categories.find((category, idx) => {
                return category.id === this.$route.params.id;
            });
            if (!this.category.hasChild) {
                this.$router.push({name: "Products", parmas: {id: this.$route.params.id}});
            }
        }
    }
}
</script>

<style>

</style>