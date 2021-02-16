const express = require('express');
const router = express.Router();
const { getUser, singup, signin,signOut } = require('../Controllers/authController')
const { userSignValidator} = require('../middlware/userValidator')
const {requireJWT} = require('../middlware/auth')
const User = require('../models/user')

router.get('/',requireJWT,getUser);
router.post('/singup',userSignValidator,singup)
router.post('/auth',signin)
router.get('/signout',signOut)

module.exports = router
