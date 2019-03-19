import Vue from 'vue';
import 'todomvc-app-css/index.css';
import 'todomvc-common/base.css';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
