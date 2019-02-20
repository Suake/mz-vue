import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import City from './views/City.vue';
import Film from './views/Film.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'films',
          component: Film
        },
        {
          path: 'cinemas',
          component: Cinema
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '*',
      redirect: '/films'
    }
  ]
})

export default router;
