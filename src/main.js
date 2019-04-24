// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

Vue.config.productionTip = false

import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'

import fastClick from 'fastclick'
fastClick.attach(document.body)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Raven.config('https://3695b4a5dfde44599bd5bdf2775c735e@sentry.io/1444638', {
  release: '3.27.0',
  debug: true
}).addPlugin(RavenVue, Vue).install()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
