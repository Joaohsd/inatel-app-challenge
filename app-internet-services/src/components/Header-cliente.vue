<template>
  <nav>
    <v-navigation-drawer 
      v-model="drawer"
      class="pa-0" dark
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Provider App
          </v-list-item-title>
          <v-list-item-subtitle>
            The best way to find a good internet service.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
        <v-row>
          <v-list-item-icon>
            <v-icon left size="25">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-row>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="pa-0" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <a href="/" style="text-decoration: none;color: aliceblue;"><span id="ex">C</span>onnect<span id="ex">I</span>&<span id="ex">P</span></a>
      </v-toolbar-title>
    </v-app-bar>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Planos', icon: 'mdi-access-point' , to: '/plans'},
          { title: 'Instalação', icon: 'mdi-account-group', to: '/maps' },
          { title: 'About', icon: 'mdi-help-box', to: '/about-client' },
        ],
        right: null,
      }
    },
    methods:{
    },
  }
</script>

<style>

#ex{
  color:cyan;
  font-weight: bold;
}

</style>