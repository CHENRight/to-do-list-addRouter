import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false;

Vue.use(Antd);



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
