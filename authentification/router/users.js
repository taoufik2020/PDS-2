
const express = require('express')
const { getUser} = require('../Controllers/userController')
const { userById} = require('../middlware/user')
const {requireJWT,isAuth} = require('../middlware/auth')
const router = express.Router()

router.get('/profile/:userId',requireJWT,isAuth,getUser)

router.param('userId',userById)


module.exports = router