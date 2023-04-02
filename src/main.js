import express from 'express'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import handlebars from 'express-handlebars'
import { mongoSession } from './helpers/mongoSessionConfig.js'

import accountsRouter from './routes/accounts.js'
import mainRouter from './routes/main.js'

const app = express()

app.use(mongoSession)
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cookieParser())
app.use(express.static("./src/public"))


app.set('view engine', 'hbs')
app.set('views', './src/views')
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    layoutsDir: './src/views/layouts',
    partialsDir: './src/views/partials'
    
}))

app.use('/accounts', accountsRouter)
app.use('/', mainRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
    console.log(`App started and listening on port ${PORT} :) - Current PID is ${process.pid}`)
})
