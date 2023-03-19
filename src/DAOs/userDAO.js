import mongooseHelper from '../helpers/mongooseHelper'
import userSchema from '../db/schemas/userSchema'

export class userDAO extends mongooseHelper {
    constructor() {
        super("users", userSchema)
    }

    // funciones propias de este dao
}