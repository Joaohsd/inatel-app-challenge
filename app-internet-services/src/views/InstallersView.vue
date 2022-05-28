<template>
  <div class="cliente"> 
    <HeaderInstaller/>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderInstaller from '@/components/Header-installer.vue'

    export default {
      components: {
      HeaderInstaller
      },

      data: () => ({
        //
      }),
    }
</script>