const {createUserService, getUserService, updateUserService, deleteUserService} = require('../services/userService') 
const express = require('express')
const userRouter = express.Router()
const route = require('../router');

userRouter.get('/',getUserService)
userRouter.post('/',createUserService)
userRouter.put('/:id',updateUserService)
userRouter.delete('/:id',deleteUserService)

module.exports = userRouter;