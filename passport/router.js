// CONFIG INICIAL
const express = require('express');
const router = express.Router();
const passport = require('passport');
const conexionDB = require('../db/mongoConection'); // conexión con bd
const Usuario = require('../db/models/usuarios');

// ruta de registro
router.post("/registro", (req, res, next) => {
  passport.authenticate("local.registro", (err, user) => {
    if (err) throw err;
    user ? res.send(true) : res.send(false);
  })(req, res, next);
});

// ruta para redirigir segun si el inicio de sesion es exitoso
router.post('/iniciosesion', (req, res, next) => {
  passport.authenticate("local.iniciosesion", (err, user) => {
    if (err) throw err;
    if (!user) res.send(false);
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(user);
      });
    }
  })(req, res, next);
});

// ruta para comprobar la informacion del usuario logueado 
router.post("/sesion", (req,res) => {
  req.isAuthenticated() ? res.send(req.user) : res.send(false);
});

router.get("/sesion2", (req,res) => {
  res.send(req.user)
});

//ruta para editar información de usuario
router.post('/editar/:id', async (req, res) => {
  const { id } = req.params;
  const {nombre, apellido, documento, fechaNacimiento, correo, telefono} = req.body; 
  const usuarioModificado = {
    id,
    correo, 
    contrasena,
    nombre,
    apellido,
    documento,
    fechaNacimiento,
    telefono
  };
  await conexionDB();
  await Usuario.updateOne({id: id}, {$set: usuarioModificado});
  res.json(true);
});

//ruta para solicitar info del usuario
router.get('/listar/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await conexionDB();
    const usuarioFiltrado = await Usuario.find({id:id});
    return usuarioFiltrado==undefined ? {} : usuarioFiltrado;
} catch (err) {
    console.log('Error en proceso:', err);
}
});

//ruta para cerrar sesion
router.get('/cerrarsesion', (req, res) => {
  req.logOut();
  res.send(true);
});

module.exports = router,passport;
