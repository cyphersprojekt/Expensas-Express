import usersDAO from '../DAOs/userDAO'

let userDAO = new usersDAO()

export class DAOFactory {
    static getUserDAO() {
        return userDAO
    }
}