import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import BackendService from "../services/backend-service";

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        await BackendService.registerUser(
            username,
            pass,
            firstName,
            lastName,
            email
        ).then((res: any) => {
            console.log(res)
            navigate('/home')
        })
        .catch((err: any) => {
            console.log(err)
            alert(err.response.data.message);
        })
    }

    const handleReturn = () => {
        navigate('/');
    }

    return (
        <div className="App" >
            <div className="auth-form-container">
                <h2>Register</h2>
                {/* <form className="register-form" onSubmit={handleLogin}> */}
                <label htmlFor="name">First Name</label>
                <input data-testid='first-name-input' value={firstName} name="name" onChange={(e) => setFirstName(e.target.value)} id="name" placeholder="First Name" />
                <label htmlFor="name">Last Name</label>
                <input data-testid='last-name-input' value={lastName} name="name" onChange={(e) => setLastName(e.target.value)} id="name" placeholder="Last Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@mail.com" id="email" name="email" />
                <label htmlFor="name">Username</label>
                <input value={username} name="name" onChange={(e) => setUsername(e.target.value)} id="name" placeholder="Full Name" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={handleLogin}>Register</button>
            {/* </form> */}
                <button className="link-btn" onClick={handleReturn}>Already registered? Login here.</button>
            </div>
        </div>
    );
};

export default Register;
