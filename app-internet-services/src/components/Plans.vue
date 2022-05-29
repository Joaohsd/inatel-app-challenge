<template>
  <div class="plans">
    <HeaderCliente></HeaderCliente>
    <div class="planos">
      <div class="main-content">
        <div class="content">
        <div class="select">
          <div class="select-state">
            <v-row align="center">
              <v-col cols="5">
                <v-subheader>
                  Selecione o estado
                </v-subheader>
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="select"
                  :items="states"
                  item-text="state"
                  item-value="abbr"
                  label="Estado"
                  return-object
                  single-line
                  v-on:change="getPlansFromState"
                ></v-select>
              </v-col>
            </v-row>
          </div>
        </div>
        <div v-if="existsPlans" class="informacoes">
            <div class="carrossel">
              <div class="carrossel-int">
                <v-carousel hide-delimiters cycle>
                  <v-carousel-item
                      v-for="(plano,i) in planos"
                      :key="i"
                  >
                    <h2>Plano {{i+1}}</h2>
                    <v-row>
                      <h3 id="key-plan">Provedor:</h3>
                      <h3 v-if="plano.isp">{{plano.isp}}</h3>
                      <h3 v-else>Sem nome</h3>
                    </v-row>
                    <v-row>
                      <h3 id="key-plan">Capacidade de Dados:</h3>
                      <h3 v-if="plano.data_capacity">{{plano.data_capacity}}</h3>
                      <h3 v-else>0</h3>
                    </v-row>
                    <v-row>
                      <h3 id="key-plan">Taxa de Download:</h3>
                      <h3 v-if="plano.download_speed">{{plano.download_speed}}</h3>
                      <h3 v-else>0</h3>
                    </v-row>
                    <v-row>
                      <h3 id="key-plan">Taxa de Upload:</h3>
                      <h3 v-if="plano.upload_speed">{{plano.upload_speed}}</h3>
                      <h3 v-else>0</h3>
                    </v-row>
                    <v-row>
                      <h3 id="key-plan">Descrição:</h3>
                      <h3 v-if="plano.description">{{plano.description}}</h3>
                      <h3 v-else>Sem Descrição</h3>
                    </v-row>
                    <v-row>
                      <h3 id="key-plan">Preço mensal:</h3>
                      <h3 v-if="plano.price_per_month">R${{plano.price_per_month}}/mês</h3>
                      <h3 v-else>R$0/mês</h3>
                    </v-row>
                    <v-row>
                      <h3 id="key-plan">Tipo de internet:</h3>
                      <h3 v-if="plano.type_of_internet">{{plano.type_of_internet}}</h3>
                      <h3 v-else>Sem tipo</h3>
                    </v-row>
                  </v-carousel-item>
                </v-carousel>
              </div>
            </div>
          </div>
        <div v-else class="informacoes-else">
          <div class="carrossel">
              <div class="carrossel-int">
                <h2>Sem Planos</h2>
              </div>
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
    components: {
      HeaderCliente
    },
    data () {
      return {
        planos: [{}],
        select: { state: 'Florida', abbr: 'FL' },
        states: [
          { state: 'Minas Gerais', abbr: 'MG' },
          { state: 'Georgia', abbr: 'SP' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' },
        ],
        existsPlans: false,
      }
    },
    methods:{
      async getPlansFromState(){
        const url = 'https://app-challenge-api.herokuapp.com/plans?state='+this.select.abbr;
        try{
          axios.get(url).then(
            response => (this.planos = response.data)
          );
        }catch(error){
          console.log(error);
          this.planos = [{}];
          this.existsPlans=false;
          return;
        }
        this.existsPlans=true;
      }
    }
  }
</script>

<style>
  .plans{
    background-image: url('../assets/backgroundHome.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  .planos{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .select{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(240, 248, 255, 0.87);
    border-radius: 12px 12px 1px 1px;
  }

  .informacoes{
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .main-content{
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .main-content .content{
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(12, 11, 11, 0.884);
    border-radius: 12px;
  }

  .carrossel .carrossel-int{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 25px;
    width: 430px;
    height: 540px;
  }

  .carrossel .carrossel-int #key-plan{
    color:aliceblue;
  }

  .carrossel .carrossel-int h2{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: aliceblue
  }
  
  h3{
    color:cyan;
  }

</style>