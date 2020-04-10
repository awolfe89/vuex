<template>
  <div class="all">

  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
<h2 class="subHead">Top Categories</h2>

     <v-col cols="12">
        <v-row


          class="grey lighten-5"
          style="height: 300px;"
        >
 <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="black--text align-end"
      height="200px"
      src="https://images-na.ssl-images-amazon.com/images/I/61HTEfZT0CL._AC_SX522_.jpg"
    >    
   </v-img>
   <v-card-text class="text--primary">
      <h2>Solder Tips</h2>
    </v-card-text>
    <v-card-subtitle class="pb-0">Pace, HAKKO, JBC, Plato and More</v-card-subtitle>
    <v-card-actions>
      <v-btn
        color="red"
        text
        to='/soldertips/'
      >
        <v-icon class="mr-1">arrow_right_alt</v-icon>View
      </v-btn>

    </v-card-actions>
  </v-card>
  <!--- END CARD 1 --->
   <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://media.digikey.com/Photos/Chemtronics/DEL1692.JPG"
    >
    </v-img>
    <v-card-text class="text--primary">
      <h1>Flux Removers</h1>
    </v-card-text>
   <v-card-subtitle class="pb-0">Chemtronics, Techspray and More</v-card-subtitle>
    <v-card-actions>
      <v-btn
        color="red"
        text
      >
        <v-icon class="mr-1">arrow_right_alt</v-icon>View
      </v-btn>

    </v-card-actions>
  </v-card>

  <!--- END CARD 2 --->
  
   <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>BLAH</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  <!--- END CARD 3 --->
     <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>BLAH</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
  <!--- END CARD 4 --->
    </v-row>
      </v-col>
<!--- END DIV --->
  </div> 
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      activeType: 'Flux Removers',
      drawer: '',
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },

        ],


      
    }
  },
  created() {
  },
  methods: {
    pushToFirestore(type) {
      this.activeType = type
    }
  }
}
</script>

<style scoped>
.subHead{
  margin-top: 4vh;
  margin-bottom: 2vh;
}

.v-card{
  margin-bottom: 10vh;
}
</style>