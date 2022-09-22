// CONFIG INICIAL
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const MongoDbStore = require('connect-mongo');
require('./passport/controller'); // importo la config general de passport

// SERVIDOR / ENRUTADOR
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(
    cors({
      origin: "http://localhost:3000", // locacion de mi app react
      credentials: true,
      optionSuccessStatus:200
    })
);
app.use(session({
    secret: 'este es es un secreto que no se lo podes contar a nadie en tu vida',
    resave: false, //sirve para que no se renueve la sesion
    saveUninitialized: false, //para que no se vueva a establecer la sesion
    store: MongoDbStore.create({
        mongoUrl: 'mongodb://localhost:27017/hiperblanco',
        collectionName: 'sessions'
    }) //donde guardo la sesion
}));
app.use(passport.initialize());
app.use(passport.session());

// ENRUTADOR
app.use('/productos',require('./routes/productos')); //enrutador de productos
app.use('/categorias',require('./routes/categorias')); //enrutador de categorias
app.use('/usuarios',require('./passport/router')); //enrutador de usuarios
app.use('/carrito',require('./routes/carrito')); //enrutador de carritos

// CONFIG CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}); 