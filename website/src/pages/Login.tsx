import { useEffect, useState } from "react";
import React from 'react';
import BackendService from "../services/backend-service"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [valid, setValid] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        BackendService.getHealth();
    }, []);

    const handleRegister = () => {
        navigate('/register');
    }

    const handleLogin = () => {
        navigate('/home');
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input data-testid='email-input' value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@mail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input data-testid='password-input' value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={handleLogin}>Log In</button>
            </form>
            <button className="link-btn" onClick={handleRegister}>First time? Register here.</button>
        </div>
    )
}


export default Login;