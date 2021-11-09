import Vue from 'vue'
import App from './App.vue'
import VueRoute from 'vue-router'
import routes from './routes'
Vue.use(VueRoute);

const router = new VueRoute({
  mode: "history",
  routes: routes,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
