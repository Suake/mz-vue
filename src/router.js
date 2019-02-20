import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import City from './views/City.vue';
import Film from './views/Film.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import Detail from './views/Detail.vue';
import Card from './views/Card.vue';
import Money from './views/Money.vue';
import System from './views/System.vue';
import Login from './views/Login.vue';
import nprogress from 'nprogress';
nprogress.configure({ showSpinner: false });

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
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
      component: City,
      name: 'hhh'
    },
    {
      path: '/detail/:id',
      component: Detail,
      props: true
    },
    {
      path: '/card',
      component: Card
    },
    {
      path: '/money',
      component: Money
    },
    {
      path: '/system',
      component: System
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '*',
      redirect: '/films'
    }
  ]
})

router.beforeEach((to, from, next) => {
  nprogress.start();

  let nickName = sessionStorage.getItem('nickName');
  let list = ['/card', '/money', '/system'];
  if (list.indexOf(to.path) > -1 && !nickName) {
    // next('/login');
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next();
  }
})

router.afterEach((to, from) => {
  nprogress.done();
})

export default router;
