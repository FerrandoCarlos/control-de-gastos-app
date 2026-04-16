import { Router } from "express";

const router = Router();

// Definimos las rutas
router.get('/', (req, res) => {
    res.render('index', { title: 'Inicio | Control de Gastos' });
});
router.get('/gastos', (req, res) => {
    res.render('gastos');
});
router.get('/categorias', (req, res) => {
    res.render('categorias');
});

