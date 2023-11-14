import React, { useEffect, useState } from "react";
import BackendService from "./services/backend-service.mjs"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [valid, setValid] = useState(false);

    useEffect(() => {
        BackendService.getHealth();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await BackendService.getLogin(email, pass)
            .then((response) => {
                console.log(response.data);
                setValid(response.data.login);
            });
        if (valid) {
            await BackendService.getDatabaseConnectivity()
            .then((r) => {console.log(r)})
            .catch((e) => {console.log(e)});
            alert("Success");
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input data-testid='email-input' value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@mail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input data-testid='password-input' value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>First time? Register here.</button>
        </div>
    )
}