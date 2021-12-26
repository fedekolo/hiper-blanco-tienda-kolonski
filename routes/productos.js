// CONFIG INICIAL
const express = require('express');
const router = express.Router();
const {listar} = require('../controller/productos');

router.get('/listar', async (req,res) => {
    const productos = await listar();
    res.json(productos);
});

module.exports = router;