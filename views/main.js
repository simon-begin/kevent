/* jshint node:true */
'use strict';

import './assets/scss/index.scss';

const Vue = require('vue').default;
const App = require('./App.vue').default;
const router = require('./router').default;

new Vue({
  el: '#kevent',
  router,
  render: h => h(App)
});
