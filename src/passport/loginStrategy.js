import bcryptHelper from '../helpers/bcrypt-helper'
import DAOsFactory from '../helpers/DAOFactory'
import Users from DAOsFactory.getUserDAO()
import LocalStrategy from 'passport-local'
export const loginStrategy = new LocalStrategy({username: 'email'},
    async (email, password, done) => {
        try {
            let user = await Users.getOne({email: email})
            if (!user) {
                console.log("user not found")
                return done(null, false)
            }
            if (!bcryptHelper.checkPassword(user.password, password)){
                return done(null, false)
            }
            return done(null, user)
        }
        catch (err) {
            errorLog.error({error: err})
            return done(err)
        }
    })