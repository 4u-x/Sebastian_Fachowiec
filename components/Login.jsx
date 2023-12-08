import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import styles from "../styles/login.module.css";
import Link from 'next/link'; 

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter(); 

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
                
                router.push('/posts/form');
            } else {
              
                alert(data.message);
            }
        } catch (error) {
            
            console.error('Błąd logowania:', error);
        }
    }

    return (
        <div className={styles.back}>
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
                
                <Link href="/posts/newsign">
                    <>Zarejestruj się</>
                </Link>
            </div>
        </div>
        </div>
    );
}


