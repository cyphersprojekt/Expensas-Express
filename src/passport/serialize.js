export default async function serialize(user, done) {
    done(null, user._id)
}