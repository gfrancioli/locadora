const jwt = require('jsonwebtoken');

module.exports = () => ({
  execute: async (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) return res.status(403).send({ message: 'Missing token' })
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, email) => {
      console.log(err)
      if (err) return res.status(403).send({ message: 'Unauthorized' })
      req.email = email.user
      next()
    })
  }
})
