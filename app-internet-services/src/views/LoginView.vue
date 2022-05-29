<template>
<div class="login">
    <NavBarLogin/>
    <div class="form-login">
      <div id="form">
        <v-form>
          <div id="form-title">
            Entrar
          </div>
          <div>
            <v-text-field
              dark
              color="aliceblue"
              placeholder="Email"
              hint="joao1234@email.com"
              persistent-hint
              required
            ></v-text-field>
          </div>
          <div id="password-input">
            <v-text-field
              dark
              color="aliceblue"
              placeholder="Password"
              hint="Deve conter no mínimo 8 caracteres"
              name="input-10-2"
              :type="show1 ? 'text' : 'password'"
              class="input-group--focused"
              persistent-hint
              required
            ></v-text-field>
          </div>
          <v-card-actions>
            <div class="check-route">
              <v-row>
                <v-checkbox
                  v-model="flagClient"
                  dark
                  color="aliceblue"
                  label="Cliente"
                  v-on:click="clientSelected"
                ></v-checkbox>
                <v-spacer></v-spacer>
                <v-checkbox
                  v-model="flagInstaller"
                  dark
                  color="aliceblue"
                  label="Instalador"
                  v-on:click="installerSelected"
                ></v-checkbox>
                </v-row>
              <div class="submit-login">
              <div>
                <v-btn
                  dark
                  class="cyan aliceblue--text"
                  rounded
                  elevation="3"
                  text
                  outlined
                  replace
                  v-on:click="submit"
                  :to="route"
                >
                  Ok
                </v-btn>   
              </div>
            </div>
            </div>
          </v-card-actions>
        </v-form>
      </div>
    </div>
</div>
</template>

<script>
  import NavBarLogin from '@/components/NavBar-login.vue'

  export default {
    components: {
    NavBarLogin,
  },
    data(){
      return {
        email:'',
        password:'Password',
        show1:false,
        selected: [],
        flagClient: false,
        flagInstaller: false,
        route:""
      }
    },
    methods : {
      submit:function(){
        location.reload();
      },
      clientSelected(){
        console.log("Ativado Cliente")
        this.flagClient = true;
        this.flagInstaller = false;
        this.route = "clients";
      },
      installerSelected(){
        console.log("Ativado Instalador")
        this.flagClient = false;
        this.flagInstaller = true;
        this.route = "installer";
      }
    }
};
</script>

<style>

* { margin: 0 !important;}

.login{
  margin:0px;
  background-image: url("../assets/backgroundHome.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
}

.text-input{
  margin-top: 0px;
}

.form-login{
  font-family: arial;
  display: grid;
  flex-direction: column;
  background-color: rgba(12, 11, 11, 0.884);
  border-radius: 12px;
  width: 300px;
  height: 350px;
}

#form-title{
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 36px;
  color: cyan;
  font-weight: bold;
  justify-content: center;
  align-items: center;
}

#form{
  display: flex;
  flex-direction: column;
  flex:1;
  justify-content: center;
  align-items: center;
}

.check-route{
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.submit-login{
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  flex:1;
  justify-content: center;
  align-items: center;
}
</style>

<style scoped>
.v-card-actions fieldset{
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}
</style>
