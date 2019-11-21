// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$http = axios;
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入echarts
import echarts from "echarts"
Vue.prototype.$echarts = echarts

Vue.use(ElementUI);

Vue.use(Vant)

Vue.config.productionTip = false

//路由守卫
let arr = ["/index/cart","/index/mine"]
router.beforeEach((to, from, next) => {
  if(arr.indexOf(to.path)!=-1){
    this.router.push('/login')
  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
