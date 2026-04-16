import express from "express";
import "dotenv/config";
import path from "path";
const __dirname = import.meta.dirname;

const app = express();

const PORT = process.env.PORT;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// Configuración del motor de plantillas PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

// Ruta de prueba inicial
app.get('/', (req, res) => {
    res.render('layout', { title: 'Control de Gastos', message: 'APP de control de gastos.' });
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});