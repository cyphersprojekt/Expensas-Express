import express from 'express'
const router = express.Router()
import passport from 'passport'
import loginStrategy from '../passport/loginStrategy'
import registerStrategy from '../passport/registerStrategy'
import serialize from '../passport/serialize'
import deserialize from '../passport/deserialize'
import isAuth from '../middlewares/isAuth'
import DAOsFactory from '../helpers/DAOFactory'
const Users = DAOsFactory.getUserDAO()

passport.use('login', loginStrategy)
passport.use('register', registerStrategy)
passport.serializeUser(serialize)
passport.deserializeUser(deserialize)






export default router 