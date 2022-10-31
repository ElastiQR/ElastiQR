const router = require('express').Router()
const {createQRController, retrieveQRController, redirectQRController} = require('../controllers/qrController')

router.post('/createQR', createQRController)
router.get('/getQRCodes', retrieveQRController)
router.get('/redirect', redirectQRController)

module.exports = router