<template>
  <div class="installation">
    <HeaderCliente></HeaderCliente>
    <div class="map">
      <GoogleMap />
    </div>
  </div>
    
</template>

<script>
  import HeaderCliente from '@/components/Header-cliente.vue'
  import GoogleMap from './GoogleMaps.vue'

  export default {
    components: {
        HeaderCliente,
        GoogleMap
    },
    data() {
        return {
            center: { lat: 45.508, lng: -73.587 },
        }
    },
    mounted() {
        this.geolocate();
    },
    methods: {
        geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
            this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            };
        });
        },
    },  
  }
</script>

<style>
.installation{
    background-color: rgb(57, 59, 61);
}

</style>