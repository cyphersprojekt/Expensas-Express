// const express = require('express')
import express from 'express'
import { HttpServer } from 'http'
import cookieParser from 'cookie-parser'
import bodyParser from 'bodyParser'
import mongoSession from './helpers/mongoSessionConfig'
const app = express()

app.use(mongoSession)
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieParser())


const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const PORT = process.env.PORT || 8000
httpServer.listen(PORT, ()=>{
    console.log(`App started and listening on port ${PORT} :) - Current PID is ${process.pid}`)
})
