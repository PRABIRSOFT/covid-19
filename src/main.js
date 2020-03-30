import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use({
  install: function(Vue){
    var mapboxgl = require('mapbox-gl')
    Vue.prototype.mapboxgl = mapboxgl
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
