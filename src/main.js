import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { Button } from 'mint-ui'
import 'default-passive-events'
import './mock/mockServer'
//注册全局组件标签
Vue.component(Button.name, Button) //<mt-button></mt-button>

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
