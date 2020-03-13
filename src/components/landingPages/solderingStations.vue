<template>
    <div class='all'>


    <v-toolbar color="indigo" dark>
    <v-toolbar-title>Soldering Stations &#38; Soldering Irons</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>


      <v-row dense>
      
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card :to='card.route'>
            <v-img
              :src="card.src"
              class="black--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="100px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon color='blue'>
                <v-icon>arrow_forward</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>  
      </v-row>


    
    
    
    <!--- ENDING DIV --->
    </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Soldering Stations', flex: 12, route: '/' },
        { title: 'Soldering Irons', flex: 12, route: '/' },
        { title: 'Soldering Iron Accessories', flex: 12, route: '/'  },
        { title: 'Soldering Tips', flex: 12, route: '/soldertips'},
        { title: 'Fume Extraction', flex: 12, route: '/'  },
        { title: 'Fume Extractor Accessories', flex: 12, route: '/'  },
        { title: 'Desoldering Irons', flex: 12, route: '/'  },
        { title: 'Desoldering Braid', flex: 12, route: '/' },
        { title: 'Hot Air Nozzles', flex: 12, route: '/'  },
        { title: 'Flux Removers', flex: 12, route: '/fluxremovers'},
      ],
    }),
  }
  </script>

  <style scoped>
.all{
  height: auto;
  width: 80%
}
  </style>