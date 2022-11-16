const router = require('express').Router()
const {
    createQRController, 
    retrieveQRController, 
    redirectQRController, 
    countQRScansController,
    recentActivityController
} = require('../controllers/qrController')
const authMiddleware = require('../middlewares/auth')

router.post('/createQR', authMiddleware, createQRController)
router.get('/getQRCodes', authMiddleware, retrieveQRController)
router.get('/redirect', redirectQRController)
router.get('/count', countQRScansController)
router.get('/recentActivity', recentActivityController)

module.exports = router
