const express = require('express')
const userController = require('../controllers/userController')
const userRouter = express.Router()

userRouter.post('/signIn',userController.userLogin)

module.exports = userRouter