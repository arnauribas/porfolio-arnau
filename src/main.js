import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Wordpress from './components/Wordpress.vue';
import QueDomino from './components/QueDomino.vue';
import Javascript from './components/Javascript.vue';
import PaginaError from './components/PaginaError.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: QueDomino},
  {path: '/', component: QueDomino},
  {path: '/quedomino', component: QueDomino},
  {path: '/wordpress', component: Wordpress},
  {path: '/javascript', component: Javascript},
  {path: '*', component: PaginaError}
];
const router = new VueRouter({
  routes,
  mode: 'history'
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
