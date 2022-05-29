<template>
  <nav>
    <v-app-bar class="pa-0" app dark>
      <v-toolbar-title class="text-uppercase">
        <a href="/" style="text-decoration: none;color: aliceblue;">Installer&Provider</a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn rounded elevation="3" color="cyan" to="/login" v-on:click="reloadPage">
        <v-icon left size="25" class="mx-1">login</v-icon>
        <v-spacer></v-spacer>
        <span>Entrar</span>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
  export default {
    data () {

    },
    methods:{
      reloadPage(){
        location.reload();
      }
    }
  }
</script>

<style></style>