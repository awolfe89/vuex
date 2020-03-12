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
             <router-link :to='{path: item.route}'> 
            <v-list-item-title>
                            {{ item.text }} 
                           
         
            </v-list-item-title>
             </router-link >
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
        { icon: 'home', text: 'Home', route: '/' },
        { icon: 'forward', text: 'Adhesives', route: '/adhesives'},
        { icon: 'forward', text: 'Benches & Seating', route: '/benches-and-seating' },
        { icon: 'forward', text: 'Chemicals & Cleaning', route: '/chemicals-and-cleaning' },
        { icon: 'forward', text: 'Cleanroom', route: '/cleanroom' },
        { icon: 'forward', text: 'Tools', route: '/tools'},
        { icon: 'forward', text: 'Labels', route: '/labels' },
        { icon: 'forward', text: 'Magnification & Lighting', route: '/magnification-and-lighting'},
        { icon: 'forward', text: 'Soldering Materials', route: '/soldering-materials' },
        { icon: 'forward', text: 'Soldering Stations & Irons', route: '/soldering-stations-irons' },
        { icon: 'forward', text: 'Soldering Tips', route: '/soldertips'},
        { icon: 'forward', text: 'ESD Control', route: '/esd-control' },
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
<style scoped>

.v-list-item__title  {
  text-decoration: none;
  color: black;
}
.v-application a {
  text-decoration: none;
}
</style>