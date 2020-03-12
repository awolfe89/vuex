<template>
    <div class='all'>


    <v-toolbar color="indigo" dark>
    <v-toolbar-title>Adhesives</v-toolbar-title>

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
              <v-card-title v-text="card.title" ></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon color='blue' :to='card.route'>
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
        { title: 'Spray Adhesives', flex: 12, route: '/spray-adhesives' },
        { title: 'Dispensing Needles', flex: 12, route: '/dispensing-needles' },
        { title: 'Sealants', flex: 12, route: '/sealants'  },
        { title: 'Anti Static Tape', flex: 12, route: '/anti-static-tape'  },
        { title: 'Polyimide Tape', flex: 12, route: '/polyimide-tape'  },
        { title: 'Splicing Tape', flex: 12, route: '/splicing-tape'  },
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