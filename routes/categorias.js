// CONFIG INICIAL
const express = require('express');
const router = express.Router();
const {listar,agregar} = require('../controller/categorias');

// listar todas las categorias
router.get('/listar', async (req,res) => {
    const listarCategorias = await listar();
    res.json(listarCategorias);
});

//agregar un producto
router.post('/agregar', async (req,res) => {
    const categoriaBody = req.body;
    const categoriaNueva = await agregar(categoriaBody);
    res.json(categoriaNueva);
});

module.exports = router;