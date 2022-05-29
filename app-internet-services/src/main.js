import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBz5IteqIbWKm7yfXcMdfMOg94-V242DxM',
    libraries: 'places',
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
