const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoSession = require('./helpers/mongoSessionConfig')
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
