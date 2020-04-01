<<template>
<div id="app">
  <loading 
    :active.sync="loading"
    background-color="#000000"
    color="#fafafa"
    :opacity="0.8"
    :is-full-page="true"
  />
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
		<v-list-item>
			<v-list-item-action>
				<v-icon>home</v-icon>
			</v-list-item-action>
			<v-list-item-content>
				<router-link :to="{path: '/'}">
					<v-list-item-title>Home</v-list-item-title>
				</router-link>
			</v-list-item-content>
		</v-list-item>
        <v-list-item
          v-for="(item, key) in items"
          :key="key"
        >
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
             <router-link :to="{name: 'Category', params: {id: item.id}}"> 
				<v-list-item-title>
				{{ item.name }} 
				</v-list-item-title>
             </router-link >
          </v-list-item-content>
        </v-list-item>
     
        <v-subheader class="mt-3 grey--text text--darken-1">HELPFUL LINKS</v-subheader>
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
      </v-layout>
    </v-app-bar>

    <v-content>
      <router-view  class="container" />
    </v-content>
  </v-app>
</div>
</template>

<script>
import API from '@/lib/API'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'App',
  props: {
    source: String
  },
  components: {
    Loading
  },
  data: () => ({
    drawer: null,
  	items: []
  }),
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  },
  created() {
	this.$vuetify.theme.dark = false
	this.items = this.$store.state.categories;
  }
}
</script>
<style scoped>
.v-list-item__title {
  text-decoration: none;
  color: black;
}
.v-application a {
  text-decoration: none;
}
</style>