const mongoose = require('mongoose');
const productosCollection = 'productos';

const ProductoEsquema = mongoose.Schema({
    nombre: {type: String, require: true, minLength: 1, maxLenghth: 50},
    precio: {type: Number, require: true, minLength: 1, maxLenghth: 15},
    foto: {type: String, require: true, minLength: 1, maxLenghth: 50},
    id: {type: String, require: true, minLength: 1, maxLenghth: 20},
    fechaHora: {type: String, require: true, minLength: 1, maxLenghth: 50},
    colores: {type: Array, require: true, minLength: 1, maxLenghth: 50},
    idCategoria: {type: String, require: true, minLength: 1, maxLenghth: 20},
    descripcion: {type: String, require: true, minLength: 1, maxLenghth: 1000},
    codigo: {type: Number, require: true, minLength: 1, maxLenghth: 20},
    stock: {type: Number, require: true, minLength: 1, maxLenghth: 10}
});

const Producto = mongoose.model(productosCollection, ProductoEsquema);

module.exports = Producto;