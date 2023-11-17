const bcrypt = require('bcrypt');

function login(req, res) {
  if (req.session.loggedin != true) {
    res.render('login/index');
  } else {
    res.redirect('/');
  } // login   
}

function auth(req, res) {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM users WHERE email = ?', [data.email], (err, userdata) => {

      if (userdata.length > 0) {

        userdata.forEach(element => {
          /* data.password es lo que viene del formulario, userdata.password de la bd*/
          bcrypt.compare(data.password, element.password, (err, isMatch) => {

            if (!isMatch) {
              res.render('login/index', { error: 'Contraseña incorrecta' });
            } else {

              req.session.loggedin = true;
              req.session.name = element.name;

              res.redirect('/');

            }

          });
        });

      } else {
        res.render('login/index', { error: 'El usuario NO existe' });
      }

    });
  }); // req.getConnection
}





function register(req, res) {
  res.render('login/register');
} // register

function storeUser(req, res) {
  const data = req.body;


  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM users WHERE email = ?', [data.email], (err, userdata) => {
      if (userdata.length > 0) {
        res.render('login/register', { error: 'El usuario ya existe' });
      } else {
        bcrypt.hash(data.password, 12, (err, hash) => {
          data.password = hash;

          req.getConnection((err, conn) => {
            conn.query('INSERT INTO users SET ?', [data], (err, rows) => {
              
              req.session.loggedin = true;
              req.session.name = data.name;
              
              res.redirect('/');
            }); // conn.query
          }); // req.getConnection=
        }); // user.save

      }
    });
  });
} // storeUser


function logout(req, res) {
  if (req.session.loggedin == true) {
    req.session.destroy();
  }
  res.redirect('/login');

}


module.exports = {
  login,
  register,
  storeUser,
  auth,
  logout
} 