<template>
  <nav>
    <v-app-bar class="pa-0" app dark>
      <v-toolbar-title>
        <a href="/" style="text-decoration: none;color: aliceblue;"><span id="ex">C</span>onnect<span id="ex">I</span>&<span id="ex">P</span></a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="text-uppercase" rounded elevation="3" color="cyan" to="/login" v-on:click="reloadPage">
        <v-row>
          <v-icon left size="25" class="mx-1">login</v-icon>
        <v-spacer></v-spacer>
        <span>Entrar</span>
        </v-row>
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

<style>

#ex{
  color:cyan;
  font-weight: bold;
}

</style>