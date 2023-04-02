import express from 'express'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import handlebars from 'express-handlebars'
import { mongoSession } from './helpers/mongoSessionConfig.js'

import accountsRouter from './routes/accounts.js'

const app = express()

app.use(mongoSession)
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieParser())

app.set('view engine', 'hbs')
app.set('views', './src/views')
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    layoutsDir: './src/views/layouts'
}))

app.use('/accounts', accountsRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`App started and listening on port ${PORT} :) - Current PID is ${process.pid}`)
})
