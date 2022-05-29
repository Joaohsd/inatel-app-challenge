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
    <v-app-bar app class = "pa-0" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        
      <v-toolbar-title class="text-uppercase">
        <a href="/" style="text-decoration: none;color: aliceblue;">Installer&Provider</a>
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
          { title: 'Chamados', icon: 'mdi-access-point-plus' , to: '/calls'},
          { title: 'Trabalhos', icon: 'mdi-access-point-check', to: '/works' },
          { title: 'About', icon: 'mdi-help-box', to: '/about-installer' },
        ],
        right: null,
      }
    },
  }
</script>