const router = require('express').Router()
const { signUpController, 
        loginUserController,
        googleLoginController,
        authorizeCLIController,
        updateAuthCodeController,
        verifyTokenController
      } = require('../controllers/authController')
const authMiddleware = require('../middlewares/auth');

router.post('/signUp', signUpController)
router.post('/login', loginUserController)
router.post('/googleLogin', googleLoginController)
router.post('/authorizeCLI', authorizeCLIController)
router.patch('/updateAuthCode', updateAuthCodeController)
router.post('/verify', authMiddleware, verifyTokenController)


module.exports = router