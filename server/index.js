import express from 'express';
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); 

app.get("/api/home", (req, res) => {
    res.json({ message: "love winter", people: ["josef", "ania", "claudia"] });
});

// Dodajemy endpoint do logowania
app.post("/api/auth", (req, res) => {
    const { email, password } = req.body;
    
    // Tutaj dodaj logikę weryfikacji danych logowania, na przykład sprawdzając w bazie danych
    // Dla uproszczenia używamy stałych wartości
    if (email === "test@ex.com" && password === "password") {
        // Logowanie pomyślne
        res.json({ message: "Login successful!" });
    } else {
        // Logowanie nieudane
        res.status(401).json({ message: "Invalid credentials!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



