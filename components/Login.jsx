import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from "../styles/Login.module.css";


export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: userName, password: password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data.message);
                router.push('/posts/form');  
            } else {
                console.error('Błąd logowania:', data.message); 
            }
        } catch (error) {
            console.error('Błąd połączenia:', error);
        }
    };

    return (
        <div className={styles.logos}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src="/images/nft.png" alt="NFT Logo" />
                </div>
                <div className="text-center mt-4 name">
                    Fachowiec
                </div>
                <form className="p-3 mt-3" onSubmit={handleLogin}>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="userName" id="userName" placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn mt-3" type="submit">Login</button>
                </form>
                <div className="text-center fs-6">
                <a href="#">Forgot password?</a> or <a href="#">Sign up</a>
                </div>
            </div>
        </div>
    );
}
