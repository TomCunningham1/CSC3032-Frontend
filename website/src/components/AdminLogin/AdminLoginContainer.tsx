import { useNavigate } from 'react-router'
import './admin-login.css'

const AdminLoginContainer = () => {
  const navigate = useNavigate()

  const validate = () => {
    navigate('/admin-menu')
  }

  return (
    <div
      className="admin-login-menu-container"
      data-testid={'admin-login-wrapper'}
    >
      <h1 className="admin-login-title">Admin Users</h1>

      {/* Login Fields */}
      <div className="admin-login-fields">
        <h4 className="admin-login-field-spacer">Username</h4>

        <input />

        <h4 className="admin-login-field-spacer">Password</h4>

        <input type="password" />
      </div>

      <button className="admin-login-menu-submit-button" onClick={validate}>
        Login
      </button>
    </div>
  )
}

export default AdminLoginContainer
