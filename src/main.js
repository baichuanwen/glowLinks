
import Vue from 'vue'
import App from './App'
import  layer  from "./asests/untils/Vue-layer"
import router from './router'
import cookie from 'cookies-js'
Vue.config.productionTip = false
/* eslint-disable no-new */
cookie.set("JSESSIONID","B2FDB6211A01E3B310D646C5FCFC7C1B");
cookie.set("authId","f36d3b88fa713365950b257736867f48");
cookie.set("Hm_lvt_551f6c0558181afeb7d3b4292f3b87bf","1524847513,1524927052");
cookie.set("Hm_lpvt_551f6c0558181afeb7d3b4292f3b87bf","1524927052");
router.push('/main/arrange/4')
new Vue({
  data(){
    return{
      globAgument:"hello"  ///可添加全局变量 子组件页面通过this.$root.globAgument 访问到 
    }
  },
  el: '#app',
  router,
  render: h => h(App)
})
