import Vue from 'vue';
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
