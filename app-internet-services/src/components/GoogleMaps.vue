<template>
  <div>
    <div class="input">
      <div class="input-info">
        <v-row>
          <v-col cols="3">
            <v-text-field dark color="white" placeholder="Digite o nome do Provedor" required>
            </v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field dark color="white" placeholder="Digite o valor do plano (R$)" required>
            </v-text-field>
          </v-col>
        </v-row>
      </div>
    </div>
    <br>
    <GmapMap :center='center' :zoom='12' style='width:100%;  height:510px;' />
  </div>
</template>

<script>

export default {
  name: 'GoogleMaps',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
    }
  }
}
</script>


<style>

</style>