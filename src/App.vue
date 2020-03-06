<<template>
<div id="app">
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          @click=""
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
     
        <v-subheader class="mt-3 grey--text text--darken-1">HELPFUL LINKS</v-subheader>
        <!---
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            @click=""
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
        
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        ---->
        <v-list-item
          class="mt-3"
          @click=""
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">code</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">About</v-list-item-title>
        </v-list-item>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="grey darken-1">contacts</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Contact</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="blue"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">E-Supply</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout
        row
        align-center
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-app-bar>

    <v-content>


              <router-view  class="container" />


  
    </v-content>
  </v-app>
</div>
</template>

<script>
  export default {
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      items: [
        { icon: 'home', text: 'Home', },
        { icon: 'forward', text: 'Adhesives', },
        { icon: 'forward', text: 'Benches & Seating' },
        { icon: 'forward', text: 'Chemicals & Cleaning' },
        { icon: 'forward', text: 'Cleanroom' },
        { icon: 'forward', text: 'Hand Tools' },
        { icon: 'forward', text: 'Labels' },
        { icon: 'forward', text: 'Magnification & Lighting' },
        { icon: 'forward', text: 'Material Handling' },
        { icon: 'forward', text: 'Coatings' },
        { icon: 'forward', text: 'Soldering Materials' },
        { icon: 'forward', text: 'Soldering Stations & Irons' },
        { icon: 'forward', text: 'Soldering Tips' },
        { icon: 'forward', text: 'Static Control' },
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
    }),
    created () {
      this.$vuetify.theme.dark = false
    },
  }
</script>