const router = require('express').Router()

const {deleteQRController, updateQRController} = require('../controllers/updateController')
const authMiddleware = require('../middlewares/auth')

router.delete('/deleteQRCodes', authMiddleware, deleteQRController)
router.patch('/updateQRCodes', authMiddleware, updateQRController)

module.exports = router 