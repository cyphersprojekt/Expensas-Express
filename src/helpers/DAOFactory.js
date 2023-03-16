const usersDAO = require('../DAOs/userDAO')
let userDAO = new usersDAO()
module.exports = class DAOFactory {
    static getUserDAO() {
        return userDAO
    }
}