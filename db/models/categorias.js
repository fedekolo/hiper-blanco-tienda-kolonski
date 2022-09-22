const mongoose = require('mongoose');
const categoriasCollection = 'categorias';

const CategoriaEsquema = mongoose.Schema({
    nombre: {type: String, require: true, minLength: 1, maxLenghth: 50},
    id: {type: String, require: true, minLength: 1, maxLenghth: 20}
});

const Categoria = mongoose.model(categoriasCollection, CategoriaEsquema);

module.exports = Categoria;