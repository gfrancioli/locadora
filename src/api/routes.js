const express = require('express');
const ApiRouter = express.Router();
const usersController = require('./controllers/usersController');
const movieController = require('./controllers/movieController');
const rentController = require('./controllers/rentController');
const swaggerMiddleware = require('./middlewares/swaggerMiddleware');

module.exports = () => {
  ApiRouter.use('/api-docs', swaggerMiddleware.serve, swaggerMiddleware.setup);
  ApiRouter.use('/movies', movieController.router);
  ApiRouter.use('/users', usersController.router);
  ApiRouter.use('/', rentController.router);
  return ApiRouter;
}
