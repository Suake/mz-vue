import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Film.vue'
import Cinema from './views/Cinema.vue'
import Center from './views/Center.vue'

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/films',
      component: Film
    },
    {
      path: '/cinemas',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    }
  ]
})

export default router;
