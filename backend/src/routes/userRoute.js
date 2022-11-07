const router = require('express').Router()

const {deleteUserController, updateUserController} = require('../controllers/UserController')

router.delete('/deleteUser', deleteUserController)
router.patch('/updateUser', updateUserController)

module.exports = router 
