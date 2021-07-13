const { Router } = require('express')
const createMovieOperation = require('../operations/movie/createMovieOperation')
const getMoviesOperation = require('../operations/movie/getMoviesOperation')
const validateMiddleware = require('../middlewares/validateToken')()

module.exports = {
  createMovies: async (req, res, next) => {
    try{
      if (req.body.quantidade === 0) throw new Error('Quantidade field needs to be greater than zero')
      const document = await createMovieOperation(req.body);
      res.status(200).send(document);
    }catch (e) {
      res.status(400).send({ message: e.message });
      next();
    }
  },

  getMovies: async (req, res, next) => {
    try{
      const document = await getMoviesOperation(req.query);
      res.send(document);
    } catch (e) {
      next(e);
    }
  },

  get router() {
    const router = Router();
    router.post('/create', this.createMovies)
    router.get('/', validateMiddleware.execute, this.getMovies)


    return router;
  }
}

