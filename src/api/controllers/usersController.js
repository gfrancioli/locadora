const { Router } = require('express')
const createUserOperation = require('../operations/users/createUserOperation')
const loginUserOperation = require('../operations/users/loginUserOperation')
const getUserOperation = require('../operations/users/getUserOperation')
const validateMiddleware = require('../middlewares/validateToken')()


module.exports = {
  createUser: async (req, res, next) => {
    try{
      const users = await getUserOperation(req.body)
      const document = await createUserOperation(req.body, users)
      res.status(200).send(document)
    }catch (e) {
      res.status(400).send({ message: e.message });
      next();
    }
  },

  login: async (req, res, next) => {
    try {
      if (!req.body.email || !req.body.senha) res.status(400).send({ message: 'User not sent' });
      const document = await loginUserOperation(req.body);
      res.status(200).send({ token: document });
    } catch (e) {
      res.status(400).send({ message: 'Incorrect email/password!' });
      next();
    }
  },

  getUsers: async (req, res, next) => {
    try{
      const document = await getUserOperation(req.query);
      res.send(document);
    } catch (e) {
      next(e);
    }
  },

  get router() {
    const router = Router();
    router.post('/create', this.createUser)
    router.post('/login', this.login)
    router.get('/', validateMiddleware.execute, this.getUsers)

    return router;
  }
}

