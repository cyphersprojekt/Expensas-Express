module.exports = async (user, done) => {
    done(null, user._id)
}