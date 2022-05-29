<template>
  <div class="home" >
    <NavBarHome/>
    <main>
      <div class="registry">
        <h1>Ainda não conhece nossos serviços?</h1>
        <h2>Venha fazer parte da nossa família e tenha acesso aos melhores serviços de internet</h2>
        <h3>Digite seu EMAIL abaixo e inicie sua jornada conosco!</h3>
        <div id="email-registry">
          <v-text-field
          class="custom-placeholer-color"
            v-model="email"
            outlined
            clearable
            placeholer="Email"
            type="email"
            background-color="rgba(12, 11, 11, 0.884)"
            dark
            color="cyan"
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
  border-color: cyan;
}
</style>
