import Vue from 'vue'
import moment from 'moment'
//自定义过滤器 过滤n秒为xxxx-xx-xx的时间
Vue.filter('date', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(formatStr)
})
