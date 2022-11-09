import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import router from './router/index'
import store from './store'
import { Button } from 'mint-ui'
import 'default-passive-events'
import './mock/mockServer'
import loading from './common/imags/loading.gif'
import './filters' //加载过滤器
//注册全局组件标签
Vue.component(Button.name, Button) //<mt-button></mt-button>
Vue.use(VueLazyload, {
  //内部自定义了一个指令lazy
  loading,
})

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
