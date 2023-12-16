import express from "express";

const router = express.Router();

// Endpoint dla strony głównej
router.get("/api/home", (req, res) => {
    // Logika dla endpointu, np. pobieranie danych z bazy
    res.json({ message: "Home page data" });
});

// Endpoint do logowania
router.post("/api/auth", (req, res) => {
    const { email, password } = req.body;

    // Tutaj dodaj logikę weryfikacji danych logowania
    if (email === "test@ex.com" && password === "password") {
        // Logowanie pomyślne
        res.json({ message: "Login successful!" });
    } else {
        // Logowanie nieudane
        res.status(401).json({ message: "Invalid credentials!" });
    }
});

// Zamiast 'module.exports', użyj 'export default'
export default router;
