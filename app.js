/**
 * Module dependencies.
 */
var express = require('express');

/**
 * Controllers (route handlers).
 */
var homeController = require('./controllers/home');

/**
 * Create Express server.
 */
var app = express();

/**
 * Primary app routes.
 */
app.get('/', homeController.index);

/**
 * Start Express server.
 */
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app