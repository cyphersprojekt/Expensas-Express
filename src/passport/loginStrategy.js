import bcryptHelper from '../helpers/bcryptHelper.js'
import DAOsFactory from '../helpers/DAOFactory.js'
const Users = DAOsFactory.getUserDAO()
import LocalStrategy from 'passport-local'

export const loginStrategy = new LocalStrategy({username: 'email'},
    async (email, password, done) => {
        console.log('loginstrategy')
        return done(null, 'hola')
    })