import { useEffect, useState } from "react";
import BackendService from "../services/backend-service"


const Login = (): React.ReactElement => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [valid, setValid] = useState(false);

    useEffect(() => {
        BackendService.getHealth();
    }, []);

    const handleSubmit = async () => {

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
            <button className="link-btn" onClick={handleSubmit}>First time? Register here.</button>
        </div>
    )
}


export default Login;