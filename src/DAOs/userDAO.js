import mongooseHelper from '../helpers/mongooseHelper.js'
import userSchema from '../db/schemas/usersSchema.js'

export default class userDAO extends mongooseHelper {
    constructor() {
        super("users", userSchema)
    }

    // funciones propias de este dao
}