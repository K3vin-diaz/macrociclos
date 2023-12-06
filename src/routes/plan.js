const express = require("express");
const PlanController = require("../controllers/PlanController");
// Step 1: Import LoginController
const LoginController = require("../controllers/LoginController");

const router = express.Router();
router.get("/plan", PlanController.index);
router.get("/plan/create", PlanController.create);

// Rutas específicas para mostrar las páginas de índice y creación de macrociclos
router.get("/index", function (req, res) {
  res.render("plan/index", { name: req.session.name });
});

router.get("/create", function (req, res) {
  //Aqui se debe pasar el nombre del usuario para valdar si está logueado

  res.render("plan/create", { name: req.session.name });
});

// Step 2: Use router.post('/login', LoginController.auth);
router.post("/login", LoginController.auth);

module.exports = router;
