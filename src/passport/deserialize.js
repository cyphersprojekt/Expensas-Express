export async function deseralize(id, done){
    try {
        let user = await Users.getById(id)
        if (user) return done(null, user)
    }
    catch (err) {
        return done(err)
    }
}