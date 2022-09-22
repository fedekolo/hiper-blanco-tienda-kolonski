// CONFIG INICIAL
const express = require('express');
const router = express.Router();
const {listar,agregar} = require('../controller/carrito');

//listar todos los productos del carrito
router.post('/listar', async (req,res) => {
    const body = req.body;
    const productos = await listar(body.idUsuario[0]);
    res.json(productos);
});

module.exports = router;