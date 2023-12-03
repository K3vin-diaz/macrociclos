function index(req, res) {
  if (req.session.loggedin) {
    let name = req.session.name;
    res.render('macrociclos/index', { name });
  } else {
    res.redirect('/login');
  }
}

function create(req, res) {
  if (req.session.loggedin) {
    let name = req.session.name;
    res.render('macrociclos/create', { name: req.session.name });
  } else {
    res.redirect('/login');
  }
}


module.exports = {
    create: create,
    index: index,

}