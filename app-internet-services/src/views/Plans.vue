<template>
  <div class="plans">
    <HeaderCliente></HeaderCliente>
    <div class="planos">
      <div class="select-state">
        <v-container fluid>
            <v-row align="center">
            <v-col cols="3">
                <v-subheader>
                Selecione o estado
                </v-subheader>
            </v-col>

            <v-col cols="6">
                <v-select
                v-model="select"
                :hint="`${select.state}, ${select.abbr}`"
                :items="states"
                item-text="state"
                item-value="abbr"
                label="Select"
                persistent-hint
                return-object
                single-line
                ></v-select>
            </v-col>
            </v-row>
        </v-container>
      </div>
      <div class="informacoes">
        <v-row>
        <div class="carousel">
            <v-carousel hide-delimiters cycle>
              <v-carousel-item
                  v-for="(item,i) in slides"
                  :key="i"
                  :src="item.src"
                  ></v-carousel-item>
              </v-carousel>
          </div>

          <div class="infos">
            <h1>afjaldskfjadsfjladsçkjflkadsfalk</h1>
          </div>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderCliente from '@/components/Header-cliente.vue'
  export default {
    components: {
      HeaderCliente
    },
    data () {
      return {

        slides: [
          
        ],

        select: { state: 'Florida', abbr: 'FL' },
        states: [
          { state: 'Florida', abbr: 'FL' },
          { state: 'Georgia', abbr: 'GA' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' },
        ],
      }

      }
    }
</script>

<style>
  .planos{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  },

  .informacoes{
    display: flex;
  }

  .carousel{
    width: 300px;
    height: 350px;
  }

  .infos{
    display: inline;
  }
  
</style>