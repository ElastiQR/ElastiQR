const router = require('express').Router()
const {
    createQRController, 
    retrieveQRController, 
    redirectQRController, 
    countQRScansController,
    recentActivityController,
    deleteQRController, 
    updateQRController
} = require('../controllers/qrController')
const authMiddleware = require('../middlewares/auth')

router.post('/createQR', authMiddleware, createQRController)
router.get('/getQRCodes', authMiddleware, retrieveQRController)
router.get('/redirect', redirectQRController)
router.get('/count', countQRScansController)
router.get('/recent', recentActivityController)
router.get('/recentActivity', recentActivityController)
router.delete('/deleteQRCodes', authMiddleware, deleteQRController)
router.patch('/updateQRCodes', authMiddleware, updateQRController)

module.exports = router
