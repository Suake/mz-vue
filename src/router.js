import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from './views/Home.vue';
// import City from './views/City.vue';
// import Film from './views/Film.vue';
// import Cinema from './views/Cinema.vue';
// import Center from './views/Center.vue';
// import Detail from './views/Detail.vue';
// import Card from './views/Card.vue';
// import Money from './views/Money.vue';
// import System from './views/System.vue';
// import Login from './views/Login.vue';
import nprogress from 'nprogress';
nprogress.configure({ showSpinner: false });

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: 'films',
          component: () => import('./views/Film.vue')
        },
        {
          path: 'cinemas',
          component: () => import('./views/Cinema')
        },
        {
          path: 'center',
          component: () => import('./views/Center.vue')
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      component: () => import('./views/City.vue'),
      name: 'hhh'
    },
    {
      path: '/detail/:id',
      component: () => import('./views/Detail.vue'),
      props: true
    },
    {
      path: '/card',
      component: () => import('./views/Card.vue')
    },
    {
      path: '/money',
      component: () => import('./views/Money.vue')
    },
    {
      path: '/system',
      component: () => import('./views/System.vue')
    },
    {
      path: '/login',
      component: () => import('./views/Login.vue')
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
