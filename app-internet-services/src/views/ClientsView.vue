<template>
  <div class="cliente"> 
    <HeaderCliente/>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderCliente from '@/components/Header-cliente.vue'

    export default {
      components: {
      HeaderCliente
      },

      data: () => ({
        //
      }),
    }
</script>

<style>
.cliente{
  background-image: url("../assets/backgroundHome.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>