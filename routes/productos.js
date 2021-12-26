// CONFIG INICIAL
const express = require('express');
const router = express.Router();

router.get('/listar',(req,res) => {
    res.json('Prueba conexión back con react');
});

module.exports = router;