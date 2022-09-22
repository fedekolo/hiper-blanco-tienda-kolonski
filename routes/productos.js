// CONFIG INICIAL
const express = require('express');
const router = express.Router();
const {listar,listarCatId,listarId,agregar,editar,editarStock,editarPrecio,eliminar} = require('../controller/productos');

//listar todos los productos
router.get('/listar', async (req,res) => {
    const productos = await listar();
    res.json(productos);
});

//listar un único producto
router.get('/listar/:id', async (req,res) => {
    const params = req.params;
    const producto = await listarId(params.id);
    res.json(producto);
});

//listar productos segun categoria seleccionada
router.get('/categoria/:catId', async (req,res) => {
    const params = req.params;
    const productos = await listarCatId(params.catId);
    res.json(productos);
});

//agregar un producto
router.post('/agregar', async (req,res) => {
    const productoBody = req.body;
    await agregar(productoBody);
    res.json(true);
});

//editar características de un producto
router.post('/editar/:id', async (req,res) => {
    const productoBody = req.body;
    const params = req.params;
    await editar(productoBody,params.id);
    res.json(true);
});

//editar stock de un producto
router.post('/editarstock/:id', async (req,res) => {
    const {stock} = req.body;
    const params = req.params;
    await editarStock(stock,params.id);
    res.json(true);
});

//editar precio de un producto
router.post('/editarprecio/:id', async (req,res) => {
    const {precio} = req.body;
    const params = req.params;
    await editarPrecio(precio,params.id);
    res.json(true);
});

//eliminar un producto
router.delete('/eliminar/:id', async (req,res) => {
    const params = req.params;
    await eliminar(params.id);
    res.json(true);
});

module.exports = router;