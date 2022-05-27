<template>
  <v-app>
    <HeaderHome />
    <v-main>
      <router-view/>
    </v-main>
  
  </v-app>
</template>

<script>
import HeaderHome from '@/components/Header-home.vue'
export default {
    name: "App",
    components: { HeaderHome },
    data: () => ({
      //
    }),
};
</script>
