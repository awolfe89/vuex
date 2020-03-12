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
          Introduction
        </v-card-title>

        <v-card-text>
          Welcome to my Vue.JS app. This app began as an excersize and was originally simply meant to test out some a new framework and grew from there. Feel free to browse the 10,000 products and see the amazing things that Vue can do.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Cool!
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
            { title: 'Introduction', src: 'https://www.bacancytechnology.com/blog/wp-content/uploads/2019/04/vuejs-plugins-blog-banner.jpg', flex: 12 },

        ],
        items: [
            { title: 'Technologies Used', text: 'Front End: Vue.JS, Vuetify/Materialize CSS, Skeleton Loading, Lazy Loading, Backend: Serverless (Firebase) Additional: Took advantage of an open API to gather tons of JSON data'},         
            { title: 'Functionality', text: 'Call to API -> Format & Call Data to this site -> Admin can push to dB -> DL all data to CSV'},
            { title: 'Project Status', text: 'While still new, this project is nearly fully operational. There are a ton of things I would like to do from an Admin perspective such as an admin dashboard, setting up cron jobs to run for updates, caching, and moving the dB from Firestore to something less "real-time"'},
            { title: 'Additional Information', text: 'This project could be replicated across many sites, dBs. Many eCommerce platforms have this data "hole" and some websites cost $350,000 or more and still have this vulnerability. Watch your network traffic folks!'},
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