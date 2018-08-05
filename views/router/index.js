/* jshint node:true */
'use strict';

const Vue = require('vue').default;
const Router = require('vue-router').default;

const homePage = require('../pages/home/index.vue').default;

Vue.use(Router);

const router = new Router({
  root: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homePage
    }
  ]
});

export default router;
