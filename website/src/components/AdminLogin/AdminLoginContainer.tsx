import { useNavigate } from 'react-router'
import './admin-login.css'
import { useContext, useState } from 'react'
import { AccountContext } from '../../auth/Account'

const AdminLoginContainer = () => {
  const navigate = useNavigate()

  const { authenticate } = useContext(AccountContext)

  const [username, setUsername] = useState('')
  const [pswrd, setPswrd] = useState('')

  const disabled = username === '' || pswrd === ''

  const validate = () => {
    authenticate(username, pswrd)

    navigate('/admin-menu')
  }

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleChangePswrd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPswrd(e.target.value)
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

        <input onChange={handleChangeUsername} />

        <h4 className="admin-login-field-spacer">Password</h4>

        <input type="password" onChange={handleChangePswrd} />
      </div>

      <button
        className="admin-login-menu-submit-button"
        onClick={validate}
        disabled={disabled}
      >
        Login
      </button>
    </div>
  )
}

export default AdminLoginContainer
