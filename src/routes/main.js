import express from 'express'
const mainRouter = express.Router()
import { postLogin } from '../controllers/generic/authControl.js'
import { renderHomePage } from '../controllers/generic/mainControl.js'

mainRouter.get('/', renderHomePage)
export default mainRouter