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