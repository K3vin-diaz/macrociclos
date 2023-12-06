function index(req, res) {
    if (req.session.loggedin) {
      let name = req.session.name;
      res.render('volumen/index', { name});
    } else {
      res.redirect('/login');
    }
  }
  
  function create(req, res) {
    if (req.session.loggedin) {
      let name = req.session.name;
      res.render('volumen/create', { name });
    } else {
      res.redirect('/login');
    }
  }
  
  
  module.exports = {
      create: create,
      index: index,
  
  }