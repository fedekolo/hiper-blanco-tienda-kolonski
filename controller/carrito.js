// CONFIG INICIAL
const Carrito = require('../db/models/carrito');
const Producto = require('../db/models/productos');
const conexionDB = require('../db/mongoConection'); // conexión con bd

// --- CONTROLADORES ---

//listar todos los productos que contiene el carrito del usuario
const listar = async (idUsuario) => {
    try {
        await conexionDB();
        const carritoFiltrado = await Carrito.find({idUsuario: idUsuario[0].id});
        return carritoFiltrado==undefined ? {} : carritoFiltrado;
    } catch (err) {
        console.log('Error en proceso:', err);
    }
};

//agregar un producto al carrito de un usuario
const agregar = async (body) => {
    try {
        await conexionDB();
        const idProducto = body.id;
        const productoFiltrado = await Producto.find({id:idProducto});
        const idUsuario = req.user[0].id;
        await Carrito.updateOne({idUsuario: idUsuario},{ $addToSet: { "productos" : { $each: productoFiltrado}}});
        // await Producto(productoNuevo).save();
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

module.exports = {listar,agregar,editar,editarStock,editarPrecio,eliminar};