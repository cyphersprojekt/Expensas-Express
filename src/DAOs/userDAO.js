import mongooseHelper from '../helpers/mongooseHelper.js'
import usersSchema from '../db/schemas/usersSchema.js'

export default class userDAO extends mongooseHelper {
    constructor() {
        super("users", usersSchema)
    }

    async findUserByEmail(email) {
        return await this.model.findOne({email: email}).lean()
    }

    // funciones propias de este dao
}