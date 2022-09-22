// CONFIG INICIAL
const LocalStrategy = require('passport-local').Strategy;
const conexionDB = require('../db/mongoConection'); // conexión con bd
const Usuario = require('../db/models/usuarios');
const { v4: uuidv4 } = require('uuid'); // paquete para crear IDs
const safety = require('./encrypt');
const passport = require('passport');

//consulta a la base de datos para inicio de sesion y mensajes de alerta
passport.use('local.iniciosesion', new LocalStrategy({
    usernameField: 'correo', //desde que campo tomo el nombre de usuario
    passwordField: 'contrasena', //desde que campo tomo la contrasena
    passReqToCallback: true
  }, async (req, correo, contrasena, done) => {
    
    //busco el correo ingresado para verificar si se encuentra un usuario con ese correo
    const comprobacionUsuario = async () => {
      try {
          await conexionDB();
          const usuario = await Usuario.find({ correo: correo });
          return usuario;
      } catch (err) {
          console.log('Error en proceso:', err);
      }
    };
    const usuarioFiltrado = await comprobacionUsuario(); //paso el usuario retornado desde la funcion a una constante
    
    //validaciones de usuario y contrasena
    if (usuarioFiltrado.length > 0) {
      const usuario = usuarioFiltrado[0];
      const contrasenaValida = await safety.matchPassword(contrasena, usuario.contrasena);
      if (contrasenaValida) {
        return done(null, usuario);
      } 
      else {
        return done(null, false);
      }
    } else {
      return done(null, false);
    }
  }));
  
  // ingreso de datos de registro del usuario en la base de datos
  passport.use('local.registro', new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'contrasena',
    passReqToCallback: true
  }, async (req, correo, contrasena, done) => {

      //compruebo si existe un usuario con 
      await conexionDB();
      const usuario = await Usuario.find({ correo: req.body.correo });
      if (usuario[0]!==undefined) return done(null, false);

      const { nombre, apellido, documento, fechaNacimiento, telefono } = req.body; //tomo la info de registro del body
      const id = uuidv4(); //genero un id para el usuario
      contrasena = await safety.encryptPassword(contrasena); //encripto la contraseña ingresada por el usuario
      
      let usuarioNuevo = {
        id,
        correo, 
        contrasena,
        nombre,
        apellido,
        documento,
        fechaNacimiento,
        telefono
      };

      // guardo el nuevo usuario en la base de datos
      try {
        await conexionDB();
        await Usuario(usuarioNuevo).save();
      } catch (err) {
        console.log('Error en proceso:', err);
      }

      return done(null, usuarioNuevo);
    
    }));
  
  // serializacion del usuario
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  // desserializacion del usuario
  passport.deserializeUser(async (id, done) => {
    try {
      await conexionDB();
      const usuario = await Usuario.find({ id: id });
      done(null, usuario);
    } catch (err) {
      console.log('Error en proceso:', err);
    }
  });
  