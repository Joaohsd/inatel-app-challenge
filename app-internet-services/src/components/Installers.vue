<template>
  <div class="installers">
    <HeaderCliente></HeaderCliente>
    <div class="installer">
      <div class="main-content">
        <div class="content">
          <div class="carrossel">
            <div class="carrossel-int">
              <v-carousel hide-delimiters cycle>
                <v-carousel-item v-for="(installer, i) in installers" :key="i">
                  <div class="installer-title-link">
                    <div class="installer-title">
                      <v-list-item to="installers" v-on:click="passPlan(installer.id)">
                        <v-row>
                          <v-icon dark>login</v-icon>
                          <h2>Instalador {{ i + 1 }}</h2>
                        </v-row>
                      </v-list-item>
                    </div>
                  </div>
                  <v-row>
                    <h3 id="key-installer">Nome:</h3>
                    <h3 id="value-installer" v-if="installer.name">{{ installer.name }}</h3>
                    <h3 id="value-installer" v-else>Sem nome</h3>
                  </v-row>
                  <v-row>
                    <h3 id="key-installer">Avaliação (0 a 10):</h3>
                    <h3 id="value-installer" v-if="installer.rating">{{ installer.rating }}</h3>
                    <h3 id="value-installer" v-else>0</h3>
                  </v-row>
                  <v-row>
                    <h3 id="key-installer">Preço por Km:</h3>
                    <h3 id="value-installer" v-if="installer.price_per_km">R${{ installer.price_per_km }} /km</h3>
                    <h3 id="value-installer" v-else>0</h3>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCliente from '@/components/Header-cliente.vue'
import axios from 'axios'
export default {
  name: 'Installers',
  props: ['plan'],
  components: {
    HeaderCliente,
  },
  data() {
    return {
      installers: [{}],
      existsInstallers: false,
    }
  },
  async mounted() {
    const url = 'https://app-challenge-api.herokuapp.com/installers?plan=' + this.plan;
    var response = [{}]
    try {
      response = await axios.get(url);
    } catch (error) {
      console.log(error);
    }
    console.log(response.data)
    this.installers = response.data;
  },

}
</script>

<style>
.installers {
  background-image: url('../assets/backgroundHome.jpg');
  background-size: cover;
  width: 100%;
  height: 100%;
}

.installer {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-content {
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  justify-content: center;
}

.main-content .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(12, 11, 11, 0.884);
  border-radius: 12px;
}

.carrossel .carrossel-int {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  width: 430px;
  height: 350px;
}

.carrossel .carrossel-int #key-installer {
  color: aliceblue;
}

.carrossel .carrossel-int .installer-title-link {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: aliceblue
}

.carrossel .carrossel-int .installer-title{
  background-color: rgba(12, 11, 11, 0.884);
}

.installer-title-link h2{
  color: aliceblue;
}

#value-installer{
  color: cyan;
}
</style>