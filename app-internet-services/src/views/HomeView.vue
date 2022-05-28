<template>
  <div class="home" >
    <NavBarHome/>
    <main>
      <div class="registry">
        <h1>Ainda não conhece nossos serviços?</h1>
        <h2>Venha fazer parte da nossa família e tenha acesso aos melhores serviços de internet</h2>
        <h3>Digite seu email abaixo e inicie sua jornada conosco!</h3>
        <div id="email-registry">
          <v-text-field
            v-model="email"
            outlined
            clearable
            placeholder="Email"
            type="email"
            dark
            color="aliceblue"
            background-color="rgba(0, 187, 212, 0.76)"
          >
        </v-text-field>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import NavBarHome from '@/components/NavBar-home.vue'
  export default {
    components: {
      NavBarHome,
    },
    data: () => ({
      email:"",
    }),
};
</script>

<style>
.home{
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url("../assets/backgroundHome.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
}

.registry{
  color: aliceblue;
  font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.registry h1,h2,h3{
  padding: 12px;
  font-weight: bold;
}
</style>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: aliceblue;
}
.v-text-field--placeholder >>> fieldset{
  placeholder-color: aliceblue;
}
</style>
