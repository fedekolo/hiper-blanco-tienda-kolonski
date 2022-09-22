const mongoose = require('mongoose');
const carritoCollection = 'carrito';

const CarritoEsquema = mongoose.Schema({
    idUsuario: {type: String, require: true, minLength: 1, maxLenghth: 20},
    productos: {type: Array, require: true}
});

const Carrito = mongoose.model(carritoCollection, CarritoEsquema);

module.exports = Carrito;