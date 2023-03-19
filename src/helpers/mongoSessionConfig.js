import MongoStore from 'connect-mongo'
import session from 'express-session'

export const mongoSession = session({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        autoRemove: 'native',
        ttl: process.env.SESSION_TTL,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        
    }),
    secret: "SuperSecretSecret",
    resave: true,
    saveUninitialized: false
})