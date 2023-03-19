import bcrypt from "bcrypt";

export class bcryptHelper{
    checkPassword(hashedPassword, password){
        return bcrypt.compareSync(password, hashedPassword)
    }
    
    hashPassword(password){
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    }
}