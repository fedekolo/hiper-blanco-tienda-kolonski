const mongoose = require('mongoose');
const usuariosCollection = 'usuarios';

const UsuarioEsquema = mongoose.Schema({
    nombre: {type: String, require: true, minLength: 1, maxLenghth: 30},
    apellido: {type: String, require: true, minLength: 1, maxLenghth: 30},
    documento: {type: String, require: true, minLength: 1, maxLenghth: 20},
    fechaNacimiento: {type: String, require: true, minLength: 1, maxLenghth: 20},
    correo: {type: String, require: true, minLength: 1, maxLenghth: 30},
    telefono: {type: String, require: true, minLength: 1, maxLenghth: 20},
    contrasena: {type: String, require: true, minLength: 1, maxLenghth: 50},
    id: {type: String, require: true, minLength: 1, maxLenghth: 20}
});

const Usuario = mongoose.model(usuariosCollection, UsuarioEsquema);

module.exports = Usuario;