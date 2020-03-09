<template>
    <div class='all'>
        <div class='cardContainer'>

        <v-container fluid>
        <v-row dense>
            <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            >
            <v-card>
                <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                >
                <v-card-title v-text="card.title"></v-card-title>
                </v-img>

                <v-card-actions>
                <v-spacer></v-spacer>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="blue lighten-2"
          v-on="on"
          remove_red_eye
        >
          <v-icon color='white'>remove_red_eye</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
        </v-container>
            <v-expansion-panels focusable>
                <v-expansion-panel
                    v-for="item in items"
                    :key="item.title"
                        >
                                            
                <v-expansion-panel-header v-text='item.title'> 
                </v-expansion-panel-header>
                <v-expansion-panel-content v-text='item.text'>
                </v-expansion-panel-content>
                
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
<!---- ENDING DIV --->
    </div>
</template>


<script>
  export default {
    methods: {
        next () {
            alert('You clicked next!')
    }
    },
    data: () => (
        {

        cards: [
            { title: 'Introduction', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
            { title: 'Technologies Used', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
            { title: 'How to Launch', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
        ],
        items: [
            { title: 'Functionality', text: 'poop'},
            { title: 'Project Status', text: 'poop'},
            { title: 'Additional Information', text: 'poop'},
        ],
        dialog: false,
    }),

    

  }
</script>

<style scoped>

.cardContainer{
    max-width: 70%;
    height: auto;
}
.v-expansion-panel-content {
    margin-left: 3vw;
    margin-bottom: 2vh;
}

</style>