// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer.js'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'
import './filters'
Vue.use(VueLazyload, { // 内部自定义一个指令v-lazy
  loading
})

Vue.config.productionTip = false

Vue.component(Button.name, Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
