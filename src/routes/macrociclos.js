const express = require('express');
const MacrocicloController = require('../controllers/MacrocicloController');
// Step 1: Import LoginController
const LoginController = require('../controllers/LoginController');

const router = express.Router();
router.get('/macrociclos', MacrocicloController.index);
router.get('/macrociclos/create', MacrocicloController.create);

// Rutas específicas para mostrar las páginas de índice y creación de macrociclos
router.get('/index', function(req, res) {
    res.render('macrociclos/index');
});

router.get('/create', function(req, res) {
    //Aqui se debe pasar el nombre del usuario para valdar si está logueado

    res.render('macrociclos/create', { name: req.session.name });
});



// Step 2: Use router.post('/login', LoginController.auth);
router.post('/login', LoginController.auth);



module.exports = router;