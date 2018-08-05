/* jshint node:true */
'use strict';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');

const app = express();

// app.use(cors());

const { apiRoutes } = require('./src/routes/index');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));

app.use('/api', apiRoutes);

app.use((req, res, next) => {
  let err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

module.exports = app;

console.log(`kevent running on http://localhost:${process.env.PORT}`);
