import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { name } from '../package.json';
import replaceSVG from '@/utils/replaceSVG';

Vue.config.productionTip = false;

store.subscribe((mutation, state) => {
  localStorage.setItem(name, JSON.stringify(state));
});

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
  mounted() {
    // TODO: just inline the svg's in the first place
    replaceSVG();
  },
}).$mount('#app');
