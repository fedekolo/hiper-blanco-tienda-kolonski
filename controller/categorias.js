// CONFIG INICIAL
const Categoria = require('../db/models/categorias');
const conexionDB = require('../db/mongoConection'); // conexión con bd
const { v4: uuidv4 } = require('uuid'); // paquete para crear IDs

// CONTROLADORES

// listar todas las categorias
const listar = async () => {
    try {
        await conexionDB();
        const categoriasFiltradas = await Categoria.find({});
        // mongoose.disconnect();
        return categoriasFiltradas==undefined ? {} : categoriasFiltradas;
    } catch (err) {
        console.log('Error en proceso:', err);
    } 
};

// agregar categoria
const agregar = async (body) => {
    try {
        await conexionDB();
        const categoriaNueva = {
            id: uuidv4(),
            nombre: body.nombre
        };
        await Categoria(categoriaNueva).save();
        // mongoose.disconnect();

        return;
    } catch (err) {
        console.log('Error en proceso:', err);
    } 
};

// obtener ID de categoria según su nombre
const idSegunCategoria = async (categoria) => {
    try {
        await conexionDB();
        const categoriaFiltrada = await Categoria.find({nombre:categoria});
        const idCategoria = categoriaFiltrada[0].id;
        // mongoose.disconnect();
        return idCategoria;
    } catch (err) {
        console.log('Error en proceso:', err);
    } 
};



module.exports = {listar,idSegunCategoria,agregar}