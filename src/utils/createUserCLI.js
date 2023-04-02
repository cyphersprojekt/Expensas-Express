import DAOFactory from "../helpers/DAOFactory.js";
const Users = DAOFactory.getUserDAO()
import bcryptHelper from '../helpers/bcryptHelper.js'
import promptSync from 'prompt-sync'
const prompt = promptSync()



function createUser(full_name, unit, email, phone_number,
                    emergency_number, user_type, password) {
    const newUser = {
        full_name: full_name,
        unit: unit,
        email: email,
        phone_number: phone_number,
        emergency_number: emergency_number,
        user_type: user_type,
        password: bcryptHelper.hashPassword(password),
        enabled: true
    }

    try {
        Users.save(newUser)
        console.log('User created successfully')
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

function main() {

    let full_name = prompt('Full name: ')
    let unit = prompt('Unit: ')
    let email = prompt('Email: ')
    let phone_number = prompt('Phone number: ')
    let emergency_number = prompt('Emergency number: ')
    let user_type = prompt('User type: ')
    let password = prompt('Password: ')
    
    createUser(full_name, unit, email, phone_number,
                emergency_number, user_type, password)
}

let success = main()
while (!success) {
    console.log('Error creating user')
    success = main()
}
