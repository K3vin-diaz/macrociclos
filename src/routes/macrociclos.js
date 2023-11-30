const express = require('express');
const MacrocicloController = require('../controllers/MacrocicloController');

const router = express.Router();
router.get('/macrociclos', MacrocicloController.index);
router.get('/macrociclos/create', MacrocicloController.create);

// Rutas específicas para mostrar las páginas de índice y creación de macrociclos
router.get('/index', function(req, res) {
    res.render('macrociclos/index');
});

router.get('/create', function(req, res) {
    res.render('macrociclos/create');
});
module.exports = router;