const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const { authorization } = req.headers
  if (authorization && authorization.startsWith('Bearer ')) {
    let token = authorization.slice(7)
    try {
      token = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
      if (token) {
        req.user = token
        next()
      } else {
        return res.status(401).send({
          success: false,
          message: 'Unauthorized'
        })
      }
    } catch (err) {
      return res.status(401).send({
        success: false,
        message: 'Token error'
      })
    }
  } else {
    return res.status(401).send({
      success: false,
      message: 'Authorization needed'
    })
  }
}
