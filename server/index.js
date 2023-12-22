import express from "express";
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(authRoutes);  //Wszystkie żądania do ścieżek zaczynających się od /api będą przekierowane do Twojego routera authRoutes.

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
