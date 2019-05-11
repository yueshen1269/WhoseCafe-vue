// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer.js'
import './filters'
import loading from './common/images/loading.gif'

import {Button} from 'mint-ui'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, { // 内部自定义一个指令v-lazy
  loading
})
Vue.component(Button.name, Button)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
