const router = require('express').Router()
const {createQRController, retrieveQRController, redirectQRController, countQRScansController} = require('../controllers/qrController')

router.post('/createQR', createQRController)
router.get('/getQRCodes', retrieveQRController)
router.get('/redirect', redirectQRController)
router.get('/count', countQRScansController)

module.exports = router