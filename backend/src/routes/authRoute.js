const router = require('express').Router()
const { createUserController, loginUserController} = require('../controllers/authController')
<<<<<<< HEAD

=======
const {createQRController} = require('../controllers/qrController')

router.post('/createQR', createQRController)
>>>>>>> main
router.post('/createUser', createUserController)
router.post('/login', loginUserController)

module.exports = router