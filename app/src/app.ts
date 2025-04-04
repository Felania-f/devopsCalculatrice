// src/app.ts
import express from 'express';

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Importation et utilisation des routes
import calculatorRoutes from './routes/calculator.routes';
app.use('/api/calculator', calculatorRoutes);

// Route de base
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API de calculatrice!' });
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});