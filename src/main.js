import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import './assets/styles/reset.less';
import 'nprogress/nprogress.css';
import './assets/styles/common.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
