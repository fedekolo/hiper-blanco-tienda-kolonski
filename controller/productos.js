// CONFIG INICIAL
const Producto = require('../db/models/productos');
const moment = require('moment');
const conexionDB = require('../db/mongoConection'); // conexión con bd
const { v4: uuidv4 } = require('uuid'); // paquete para crear IDs
const {idSegunCategoria} = require('./categorias');

// --- CONTROLADORES ---

//listar todos los productos
const listar = async () => {
    try {
        await conexionDB();
        const productosFiltrados = await Producto.find({});
        return productosFiltrados==undefined ? {} : productosFiltrados;
    } catch (err) {
        console.log('Error en proceso:', err);
    }
};

//listar un único producto
const listarId = async (id) => {
    try {
        await conexionDB();
        const productoFiltrado = await Producto.find({id:id});
        return productoFiltrado==undefined ? {} : productoFiltrado;
    } catch (err) {
        console.log('Error en proceso:', err);
    }
};

//listar productos segun categoria seleccionada
const listarCatId = async (catId) => {
    try {
        await conexionDB();
        const productosFiltrados = await Producto.find({idCategoria:catId});
        return productosFiltrados==undefined ? {} : productosFiltrados;
    } catch (err) {
        console.log('Error en proceso:', err);
    }
};

//agregar un producto
const agregar = async (body) => {
    try {
        await conexionDB();
        const idCategoria = await idSegunCategoria(body.categoria); // según el nombre de la categoria del body, devuelve el ID de esta
        const productoNuevo = {
            id: uuidv4(),
            nombre: body.nombre,
            precio: body.precio,
            foto: body.foto,
            colores: body.colores.split(" "),
            fechaHora: moment().utcOffset("-03:00").format('DD/MM/YYYY h:mm:ss a'),
            descripcion: body.descripcion,
            idCategoria: idCategoria,
            codigo: body.codigo,
            stock: body.stock
        };
        await Producto(productoNuevo).save();
        return;
    } catch (err) {
        console.log('Error en proceso:', err);
    }
};

//editar características de un producto
const editar = async (body,id) => {
    try {
        await conexionDB();
        const productoActualizado = {
            nombre: body.nombre,
            foto: body.foto,
            colores: body.colores.split(" "),
            fechaHora: moment().utcOffset("-03:00").format('DD/MM/YYYY h:mm:ss a'),
            descripcion: body.descripcion,
            codigo: body.codigo
        };
        await Producto.updateOne({id: id}, {$set: productoActualizado});
        return;
    } catch (err) {
        console.log('Error en proceso:', err);
    }
};

//editar stock de un producto
const editarStock = async (stock,id) => {
    try {
        await conexionDB();
        await Producto.updateOne({id: id}, {$set: {stock:stock}});
        return;
    } catch (err) {
        console.log('Error en proceso:', err);
    }
};

//editar precio de un producto
const editarPrecio = async (precio,id) => {
    try {
        await conexionDB();
        await Producto.updateOne({id: id}, {$set: {precio:precio}});
        return;
    } catch (err) {
        console.log('Error en proceso:', err);
    }
};

//eliminar un producto
const eliminar = async (id) => {
    try {
        await conexionDB();
        await Producto.deleteOne({id:id});
        return;
    } catch (err) {
        console.log('Error en proceso:', err);
    }
}

module.exports = {listar,listarCatId,listarId,agregar,editar,editarStock,editarPrecio,eliminar};