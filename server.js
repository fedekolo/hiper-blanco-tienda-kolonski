// CONFIG INICIAL
const express = require('express');
const app = express();
const cors = require('cors');

// SERVIDOR / ENRUTADOR
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(cors());

// ENRUTADOR
app.use('/productos',require('./routes/productos'));