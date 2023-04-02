import bcrypt from "bcrypt";

export default class bcryptHelper{
    static checkPassword(hashedPassword, password){
        return bcrypt.compareSync(password, hashedPassword)
    }
    
    static hashPassword(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    }
}