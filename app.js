import express from "express";
import "dotenv/config";
import path from "path";
const __dirname = import.meta.dirname;

const app = express();

const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Configuración del motor de plantillas PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src', 'views'));

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Control de Gastos'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});