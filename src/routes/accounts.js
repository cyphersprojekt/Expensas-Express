import express from 'express'
const accountsRouter = express.Router()
import passport from 'passport'
import { loginStrategy } from '../passport/loginStrategy.js'
import { registerStrategy } from '../passport/registerStrategy.js'
import serialize from '../passport/serialize.js'
import deserialize from '../passport/deserialize.js'
import isAuth from '../middlewares/isAuth.js'
import DAOsFactory from '../helpers/DAOFactory.js'
const Users = DAOsFactory.getUserDAO()
import { renderLoginPage, postLogin } from '../controllers/generic/authControl.js'
passport.use('login', loginStrategy)
passport.use('register', registerStrategy)
passport.serializeUser(serialize)
passport.deserializeUser(deserialize)

accountsRouter.get('/login', renderLoginPage)
accountsRouter.post('/login', passport.authenticate('login'), postLogin)


export default accountsRouter 