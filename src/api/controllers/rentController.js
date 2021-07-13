const { Router } = require('express')
const validateMiddleware = require('../middlewares/validateToken')()
const rentMovieOperation = require('../operations/movie/rentMovieOperation')
const returnMoviesOperation = require('../operations/movie/returnMoviesOperation')

module.exports = {
  rentMovie: async (req, res, next) => {
    try{
      const document = await rentMovieOperation(req.params.id, req.email);
      res.status(200).send({ message: document });
    }catch (e) {
      res.status(400).send({ message: e.message });
      next();
    }
  },

  returnMovie: async (req, res, next) => {
    try{
      const document = await returnMoviesOperation(req.params.id, req.email);
      res.status(200).send({ message: document });
    }catch (e) {
      res.status(400).send({ message: e.message });
      next();
    }
  },

  get router() {
    const router = Router();
    router.put('/rent/:id', validateMiddleware.execute, this.rentMovie)
    router.put('/return/:id', validateMiddleware.execute, this.returnMovie)

    return router;
  }
}

