import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
import scroller from '@/components/Scroller'
Vue.prototype.axios = axios;

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})
Vue.component('scroller',scroller);
// Vue.filter('setWH',(url , arg)=>{
//     return url.replace(/w\.h/,arg);
// });

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//将loading组件做全局组件来引用
import loading from '@/components/Loading'
Vue.component('loading',loading);
// 引用mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
