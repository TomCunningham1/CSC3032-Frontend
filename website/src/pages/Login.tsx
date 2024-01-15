import { useState } from 'react'
import BackendService from '../services/backend-service'
import { useNavigate } from 'react-router-dom'
import User from '../types/User'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const navigate = useNavigate()

  const handleRegister = () => {
    navigate('/register')
  }

  const handleLogin = () => {
    BackendService.loginUser(email, pass)
      .then((value: any) => {
        const user = value.data as User
        if (user) {
          navigate('/home')
        }
      })
      .catch((err: any) => {
        console.log(err)
        alert('Invalid Login')
      })
  }

  return (
    <div className="auth-form-container" data-testid="auth-form-container">
      <h2>Login</h2>
      <label htmlFor="email">Email</label>
      <input
        data-testid="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="youremail@mail.com"
        id="email"
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input
        data-testid="password-input"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type="password"
        placeholder="********"
        id="password"
        name="password"
      />
      <button type="submit" data-testid="submit-button" onClick={handleLogin}>
        Log In
      </button>
      <button
        data-testid="nav-register"
        className="link-btn"
        onClick={handleRegister}
      >
        First time? Register here.
      </button>
    </div>
  )
}

export default Login
