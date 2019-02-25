const express = require('express');
const bodyParser = require('body-parser');
const TodoRoutes = require('./route/todo');

const app = express();

// Middleware
app.use(bodyParser.json());

// Router
app.use('/todo', TodoRoutes);

// Error Handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!')
});

module.exports = app;
