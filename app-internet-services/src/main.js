import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'


Vue.config.productionTip = false
Vue.use(VueGlide)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
