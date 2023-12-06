const express = require("express");
const VolumenController = require ("../controllers/VolumenController")
const LoginController = require("../controllers/LoginController");

const router = express.Router();
router.get("/volumen", VolumenController.index);
router.get("/volumen/create", VolumenController.create);

// Rutas específicas para mostrar las páginas de índice y creación de macrociclos
router.get("/index", function (req, res) {
  res.render("volumen/index", { name: req.session.name });
});

router.get("/create", function (req, res) {
  //Aqui se debe pasar el nombre del usuario para valdar si está logueado

  res.render("volumen/create", { name: req.session.name });
});

// Step 2: Use router.post('/login', LoginController.auth);
router.post("/login", LoginController.auth);

module.exports = router;
