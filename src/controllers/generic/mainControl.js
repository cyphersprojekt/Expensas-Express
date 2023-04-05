export async function renderHomePage(req, res) {
    if (!req.user) {
        res.redirect('/accounts/login')
    } else {
        res.render('home')
    }
}