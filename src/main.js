import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { mongoSession } from './helpers/mongoSessionConfig.js'

const app = express()

app.use(mongoSession)
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieParser())


const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`App started and listening on port ${PORT} :) - Current PID is ${process.pid}`)
})
