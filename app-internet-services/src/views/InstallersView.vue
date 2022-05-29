<template>
  <div class="installer"> 
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

<style>
.installer{
  background-image: url("../assets/backgroundHome.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>