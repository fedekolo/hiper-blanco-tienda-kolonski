// CONFIG INICIAL
const Producto = require('../db/models/productos');
const moment = require('moment');
const conexionDB = require('../db/mongoConection');
const mongoose = require('mongoose');

// CONTROLADORES
const listar = async () => {
    try {
        await conexionDB();
        const productosFiltrados = await Producto.find({});
        mongoose.disconnect();
        return productosFiltrados==undefined ? {} : productosFiltrados;
    } catch (err) {
        console.log('Error en proceso:', err);
    }
};

module.exports = {listar};