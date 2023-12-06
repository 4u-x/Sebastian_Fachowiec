import React, { useState } from 'react';
import styles from "../styles/Login.module.css"

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

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
                // Redirect to posts form page
                window.location.href = 'http://localhost:3000/posts/form';
            } else {
                alert(data.message); // Show error message
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    }

    return (
        <div className='logos'>
            <div className={styles.wrapper}>
                
                <form className="p-3 mt-3" onSubmit={handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input type="text" name="userName" id="userName" placeholder="Username" 
                               value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input type="password" name="password" id="pwd" placeholder="Password" 
                               value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn mt-3" type="submit">Login</button>
                </form>
                
            </div>
        </div>
    );
}



