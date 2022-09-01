import Vue from 'vue'
import App from './App.vue'
// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入router
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import store from './store'

 


Vue.config.productionTip = false
// 应用element
Vue.use(ElementUI);
//应用router
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  // 安装全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')
