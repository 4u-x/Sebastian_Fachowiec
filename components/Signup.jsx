import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import styles from "../styles/Signup.module.css";


export default function Login() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setpasswordConfirm] = useState('');
    const router = useRouter(); 

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name ,email: username, password: password }),
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
                            name="name"
                            id="name"
                            placeholder="Imię"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                <div className={styles.formField}>
                    <span className="far fa-user"></span>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="email"
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
                <div className={styles.formField}>
                    <span className="fas fa-key"></span>
                    <input
                        type="password"
                        name="passwordConfirm"
                        id="pwd"
                        placeholder="Password Confirm"
                        value={passwordConfirm}
                        onChange={(e) => setpasswordConfirm(e.target.value)}
                    />
                </div>
                <button className={styles.btn} type="submit">🔒Zarejestruj się</button>
            </form>
            <div className={styles.registerLink}>
                </div>
        </div>
        </div>
    );
}