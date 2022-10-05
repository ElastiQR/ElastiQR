const router = require('express').Router()
const { createUserController, loginUserController} = require('../controllers/authController')
const {createQRController} = require('../controllers/qrController')

router.post('/createQR', createQRController)
router.post('/createUser', createUserController)
router.post('/login', loginUserController)

module.exports = router