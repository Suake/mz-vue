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
      component: () => import('@/views/Home/Index.vue'),
      children: [
        {
          path: 'films',
          component: () => import('@/views/Home/Film/Index.vue')
        },
        {
          path: 'cinemas',
          component: () => import('@/views/Home/Cinema/Index.vue')
        },
        {
          path: 'center',
          component: () => import('@/views/Home/Center/Index.vue')
        },
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      path: '/city',
      component: () => import('./views/City/Index.vue'),
      name: 'hhh'
    },
    {
      path: '/detail/:id',
      component: () => import('./views/Detail/Index.vue'),
      props: true
    },
    {
      path: '/card',
      component: () => import('./views/Card/Index.vue')
    },
    {
      path: '/money',
      component: () => import('./views/Money/Index.vue')
    },
    {
      path: '/system',
      component: () => import('./views/System/Index.vue')
    },
    {
      path: '/login',
      component: () => import('./views/Login/Index.vue')
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
