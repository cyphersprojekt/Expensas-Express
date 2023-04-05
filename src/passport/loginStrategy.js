import bcryptHelper from '../helpers/bcryptHelper.js'
import DAOsFactory from '../helpers/DAOFactory.js'
const Users = DAOsFactory.getUserDAO()
import LocalStrategy from 'passport-local'

export const loginStrategy = new LocalStrategy({usernameField: 'email',},
    async (email, password, done) => {
        let user = await Users.findUserByEmail(email)
        if(!user) {
            return done(null, false, {message: "User not found."})
        }
        if(!bcryptHelper.checkPassword(user.password, password)) {
            return done(null, false, {message: "Incorrect password"})
        }
        return done(null, user)
    })