import express from 'express';
import bcrypt from 'bcrypt';
import database from './../db/database.js';


const authRoutes = express.Router();
// Endpoint dla strony głównej
authRoutes.get("/", (req, res) => {
    // Logika dla tego endpointu, np. pobieranie danych z bazy
    res.json({ message: "Dane strony głównej" });
});

// Endpoint do logowania
authRoutes.post("/api/auth", (req, res) => {
    const { email, password } = req.body;

    // Zapytanie do bazy danych tylko po email, aby pobrać zahashowane hasło
    const query = "SELECT * FROM users WHERE email = ?";
    database.query(query, [email], async (error, results) => {
        if (error) {
            res.status(500).json({ message: "Błąd bazy danych", error });
            return;
        }
        
        if (results.length > 0) {
            // Porównanie zahashowanego hasła z hasłem przekazanym przez użytkownika
            const match = await bcrypt.compare(password, results[0].password);
            if (match) {
                // Hasła się zgadzają, logowanie udane
                res.json({ message: "Logowanie udane!" });
            } else {
                // Hasła się nie zgadzają, logowanie nieudane
                res.status(401).json({ message: "Nieprawidłowe dane logowania!" });
            }
        } else {
            // Nie znaleziono użytkownika z tym emailem
            res.status(401).json({ message: "Nieprawidłowe dane logowania!" });
        }
    });
});

authRoutes.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Hashowanie hasła
        const hashedPassword = await bcrypt.hash(password, 10);

        // Zapytanie do bazy danych
        const insertQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        database.query(insertQuery, [name, email, hashedPassword], (error, results) => {
            if (error) {
                // Obsługa błędu związana z bazą danych
                return res.status(500).json({ message: "Błąd podczas rejestracji użytkownika", error });
            }

            // Użytkownik został zarejestrowany
            res.status(201).json({ message: "Użytkownik zarejestrowany pomyślnie" });
        });
    } catch (error) {
        // Obsługa błędów związanych z hashowaniem hasła
        res.status(500).json({ message: "Błąd podczas hashowania hasła", error });
    }
});

export default authRoutes;
