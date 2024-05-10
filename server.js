const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/routes');
const authMidlewares =require('./midlewares/authMidleware');
const mysql2 = require('mysql2/promise')(session);
const cookieParser = require('cookie-parser');

//Configuración Cookie Parser
app.use(cookieparser());

//Configura DotEnv
dotenv.config();

//Configuracion de middleware para manejar sesiones 
app.use(session( {
    secret: process.env.ACCESS_TOKEN_SECRET, // Clave secreta para firmar la cookie de sesión
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore
}));

//Middleware para procesar los archvivos estaticos para la carpeta public
app.use(express.static('public'));
app.use(express.json());

app.use('/', router);

// Configuracion para el motor de plantillas pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Puerto del servidor
const port = 3000;
app.listen(port , () => {
    console.log(`servidor iniciado en http://localhost:${port}`);
});