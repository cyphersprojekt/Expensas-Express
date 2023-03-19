import bcryptHelper from '../helpers/bcrypt-helper'
import LocalStrategy from 'passport-local'
import DAOsFactory from '../helpers/DAOFactory'
const Users = DAOsFactory.getUserDAO()
export const registerStrategy = new LocalStrategy({usernameField: 'email', passwordField: 'password', passReqToCallback: true},
    async (req, email, password, done) => {
        try {
            let user = await Users.getOne({email: email})
            console.log(user)
            if (user) {
                errorLog.error({error: "Credentials already exist"})
                return done(null, false)                
            }
            else{
                const newUser = {
                    password: bcryptHelper.hashPassword(password),
                    email: req.body.email,
                    fullName: req.body.fullname,
                    address: req.body.address,
                    age: req.body.age,
                    phoneNumber: req.body.phonenumber
                }
                try {
                    // Aca van todas las acciones que haces al tener un registro exitoso, mandar mail, crear carrito, etc
                    return done(null, user)
                }
                catch (err) {
                    errorLog.error({error: err})
                    return done(err)
                }
            }
        }
        catch (err){
            errorLog.error({error: err})
            return done(err)
        }

    })