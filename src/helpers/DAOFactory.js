import usersDAO from '../DAOs/userDAO.js'

let userDAO = new usersDAO()

export default class DAOFactory {
    static getUserDAO() {
        return userDAO
    }
}