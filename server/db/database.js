import mysql from 'mysql';
import dotenv from "dotenv";


dotenv.config({path: './.env'})

const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE
});


database.connect((error) => {
    if (error) {
        console.error("Błąd połączenia z MySQL:", error);
        return;
    }
    console.log("Połączono z MySQL...");
});
export default database;