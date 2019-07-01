// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store.js'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './css/base.css'
import axios from 'axios'
import moment from 'moment'
require('./utils/mock/reserves.js')
// Vue.use(axios)
// Vue.prototype.axios = axios;
Vue.use(Vuex)
Vue.use(elementUI)
Vue.prototype.$moment = moment;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
