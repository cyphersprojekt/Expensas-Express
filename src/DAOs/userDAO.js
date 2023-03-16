const mongooseHelper = require('../helpers/mongooseHelper')
const userSchema = require('../db/schemas/userSchema')

module.exports = class userDAO extends mongooseHelper {
    constructor() {
        super("users", userSchema)
    }

    // funciones propias de este dao
}