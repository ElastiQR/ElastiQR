const router = require('express').Router()

const {deleteQRController, updateQRController} = require('../controllers/updateController')

router.delete('/deleteQRCodes', deleteQRController)
router.patch('/updateQRCodes', updateQRController)

module.exports = router 