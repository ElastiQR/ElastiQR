const router = require('express').Router()
const { signUpController, loginUserController} = require('../controllers/authController')
const {createQRController, retrieveQRController} = require('../controllers/qrController')

router.get('/getQRCodes', retrieveQRController)

router.post('/createQR', createQRController)
router.post('/signUp', signUpController)
router.post('/login', loginUserController)

module.exports = router