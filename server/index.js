import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
import pagesRouter from './routes/pages.js';


dotenv.config({path: './.env'});

const app = express();
const PORT = 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Konfiguracja połączenia z bazą danych
const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE
});
const publicDirectory =  path.join(__dirname,)
console.log(__dirname);
// Nawiązywanie połączenia z bazą danych
database.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("MYSQL Connected...");
    }
});

app.use(cors());
app.use(express.json());

// w tym momwncie sciagamy z pages componenty
app.use('/', pagesRouter);// w tym miejscu wymagamy z pages strony



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
