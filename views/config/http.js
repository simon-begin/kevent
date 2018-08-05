/* jshint node:true */
'use strict';

const axios = require('axios');

export const http = axios.create({
  baseUrl: 'http://localhost:8080/api'
});
