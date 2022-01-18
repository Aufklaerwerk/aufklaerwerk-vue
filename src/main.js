import Vue from 'vue'
import App from './App.vue'
import router from './core/router/index'
import "./plugins";
import vuetify from "./plugins.js";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  vuetify,
}).$mount('#app')