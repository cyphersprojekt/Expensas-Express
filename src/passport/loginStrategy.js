import bcryptHelper from '../helpers/bcryptHelper.js'
import DAOsFactory from '../helpers/DAOFactory.js'
const Users = DAOsFactory.getUserDAO()
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