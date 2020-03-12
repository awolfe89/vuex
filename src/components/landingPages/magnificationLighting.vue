<template>
    <div class='all'>


    <v-toolbar color="indigo" dark>
    <v-toolbar-title>Magnification &#38; Lighting</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>


      <v-row dense>
      
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
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
        { title: 'Task Lights', flex: 12 },
        { title: 'Lighted Magnifiers', flex: 12 },
        { title: 'Microscopes', flex: 12 },
        { title: 'Microscope Accessories', flex: 12 },
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