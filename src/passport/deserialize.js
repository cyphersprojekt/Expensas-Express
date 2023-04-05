import DAOsFactory from '../helpers/DAOFactory.js'
const Users = DAOsFactory.getUserDAO()
export default async function deserialize(id, done){
    try {
        let user = Users.getById(id)
        if(user) return done(null, user)
        else throw new Error("User not found")
    }
    catch (err) {
        done(err)
    }
}