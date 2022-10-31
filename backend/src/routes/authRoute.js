const router = require('express').Router()
const { signUpController, 
        loginUserController,
        googleLoginController
      } = require('../controllers/authController')

router.post('/signUp', signUpController)
router.post('/login', loginUserController)
router.post('/googleLogin', googleLoginController)


module.exports = router