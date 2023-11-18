import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/');
    }

    const handleLogin = () => {
        navigate('/home')
    }

    return (
        <div className="App" >
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleLogin}>
                <label htmlFor="name">Full Name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@mail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
                <button className="link-btn" onClick={handleSubmit}>Already registered? Login here.</button>
            </div>
        </div>
    );
};

export default Register;
