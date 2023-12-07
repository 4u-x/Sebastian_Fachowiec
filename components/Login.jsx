import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Importujesz hook useRouter
import styles from "../styles/login.module.css";
import Link from 'next/link'; // Importujesz komponent Link

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); // Tworzysz instancję routera

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: username, password: password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Przekierowanie do strony formularza po zalogowaniu
                router.push('/posts/form');
            } else {
                // Wyświetlanie komunikatu o błędzie
                alert(data.message);
            }
        } catch (error) {
            // Obsługa błędów związanych z siecią
            console.error('Błąd logowania:', error);
        }
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.logo}>
                    <img src="/images/nft.png" alt="NFT Logo" />
                </div>
                <div className={styles.formField}>
                    <span className="far fa-user"></span>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Username/email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.formField}>
                    <span className="fas fa-key"></span>
                    <input
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className={styles.btn} type="submit">🔒 Login</button>
            </form>
            <div className={styles.registerLink}>
                {/* Link do strony rejestracji */}
                <Link href="/posts/newsign">
                    <>Zarejestruj się</>
                </Link>
            </div>
        </div>
    );
}


