const express = require('express')
const router = express.Router()
const passport = require('passport')
const loginStrategy = require('../passport/loginStrategy')
const registerStrategy = require('../passport/registerStrategy')
const serialize = require('../passport/serialize')
const deserialize = require('../passport/deserialize')
const isAuth = require('../middlewares/isAuth')
const DAOsFactory = require('../helpers/DAOFactory')
const Users = DAOsFactory.getUserDAO()

passport.use('login', loginStrategy)
passport.use('register', registerStrategy)
passport.serializeUser(serialize)
passport.deserializeUser(deserialize)








module.exports = router