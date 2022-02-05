const { Router } = require('express');
const router = Router();

//Importaciones de rutas
const userRoutes = require("./user");

//Rutas
router.use('/user', userRoutes);

module.exports = router;


