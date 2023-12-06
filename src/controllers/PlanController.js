function index(req, res) {
  if (req.session.loggedin) {
    let name = req.session.name;
    res.render('plan/index', { name});
  } else {
    res.redirect('/login');
  }
}

function create(req, res) {
  if (req.session.loggedin) {
    let name = req.session.name;
    res.render('plan/create', { name });
  } else {
    res.redirect('/login');
  }
}


module.exports = {
    create: create,
    index: index,

}