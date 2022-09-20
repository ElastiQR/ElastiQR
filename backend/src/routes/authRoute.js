const router = require('express').Router()
const { createUserController, loginUserController} = require('../controllers/authController')

router.post('/createUser', createUserController)
router.post('/login', loginUserController)

module.exports = router