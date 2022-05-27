<template>
  <v-app >
    <HeaderHomeLogin />
    <v-main >
      <router-view/>
    </v-main>
  
  </v-app>
</template>

<script>
//import HeaderClienteInstalador from '@/components/Header-cliente-instalador.vue'
import HeaderHomeLogin from '@/components/Header-home-login.vue'

export default {
    name: "App",
    components: {
    //HeaderClienteInstalador,
    HeaderHomeLogin,
},
    data: () => ({
      //
    }),
};
</script>
