import express from 'express';
import database from './../db/database.js';

const authForm =express.Router();

authForm.get("/", (req, res)=>{
// pytanie czy res jest konieczne jezeli jest juz wykorzystane w innymoliku
});

authForm.post("/api/authForm", (req, res)=>{
    const { imie, nazwisko, usluga, miejscowosc, telefon, email, website, opis } = req.body;

    const sql = "INSERT INTO usersform (imie, nazwisko, usluga, miejscowosc, telefon, email, opis) VALUES (?, ?, ?, ?, ?, ?, ?)";
    database.query(sql, [imie, nazwisko, usluga, miejscowosc, telefon, email, website, opis], (err, result) => {
        if (err) {
            res.status(500).json({ message: "Wystąpił błąd przy zapisie do bazy danych", error: err });
            return;
        }
        res.status(200).json({ message: "Dane zostały zapisane", id: result.insertId });
    });
});
export default authForm;





