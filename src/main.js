import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'

//import VueI18n from 'vue-i18n'





Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
//Vue.use(VueI18n);

Vue.config.productionTip = false



new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   i18n, // Utilisation de i18n
//   render: h => h(App)
//   }).$mount('#app')