const bcryptHelper = require('../helpers/bcrypt-helper')
const DAOsFactory = require('../helpers/DAOFactory')
const Users = DAOsFactory.getUserDAO()
const LocalStrategy = require('passport-local')
module.exports = new LocalStrategy({username: 'email'},
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