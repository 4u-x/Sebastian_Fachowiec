// routes/register.js
import express from 'express';
import bcrypt from 'bcrypt';
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Utworzenie połączenia z bazą danych
const database = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

database.connect(error => {
  if (error) {
    console.error('Błąd połączenia z MySQL:', error);
    return;
  }
  console.log("Połączono z MySQL w module rejestracji.");
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hashowanie hasła
    const hashedPassword = await bcrypt.hash(password, 10);

    // Zapytanie do bazy danych
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    database.query(query, [name, email, hashedPassword], (error, results) => {
      if (error) {
        console.error('Błąd zapisu do bazy danych:', error);
        res.status(500).json({ message: "Błąd podczas rejestracji użytkownika", error });
        return;
      }
      res.status(201).json({ message: "Użytkownik zarejestrowany pomyślnie" });
    });
  } catch (error) {
    console.error('Błąd hashowania hasła:', error);
    res.status(500).json({ message: "Błąd podczas hashowania hasła", error });
  }
});

export default router;
