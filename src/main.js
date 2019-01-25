import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios"
import './assets/markdown.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI)

// const baseUrl = "http://localhost:12306/";

// axios.interceptors.request.use(function (config) {
//   config.url = baseUrl + config.url;
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

Vue.filter('toDate', (d) => {
  var date = new Date(d * 1000);
  var Y, M, D;
  Y = date.getFullYear();
  M =
    date.getMonth() + 1 > 9
      ? date.getMonth() + 1
      : "0" + (date.getMonth() + 1);
  D = date.getDate();
  return Y + "-" + M + "-" + D;
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
