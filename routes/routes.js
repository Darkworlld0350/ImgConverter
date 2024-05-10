// routes/routes.js

const express = require('express');
const router = express.Router();

// Importa las rutas específicas
const index = require('./index');
const login = require('./login');
const logout = require('./logout');

//Cofiguracion de rutas

router.use('/', index);
router.use('/login', login);
router.use('/logout', logout);

module.exports = router;