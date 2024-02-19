import { useNavigate } from 'react-router'
import './admin-login.css'
import { useContext, useState } from 'react'
import { AccountContext } from '../../auth/Account'
import toast, { Toaster } from 'react-hot-toast'

// Creates the login form for admin users
const AdminLoginContainer = () => {
  
  // Navigate hook to allow navigation away from the page
  const navigate = useNavigate()

  // Importing authentication config to validate any users
  const { authenticate, authenticated } = useContext(AccountContext)

  // Constant to store values from text boxes
  const [username, setUsername] = useState('')
  const [pswrd, setPswrd] = useState('')

  // Check to ensure that a value has been entered before enabling the submit button
  const disabled = username === '' || pswrd === ''

  // function to handle validating the user when the button is clicked
  const validate = async () => {
    await authenticate(username, pswrd).then(()=>{
      toast.success('Logging in')
      navigate('/admin-menu')
    }).catch((err) => {
      toast.error(err.message)
    })
  }

  // functions to handle user inputs in text fields
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleChangePswrd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPswrd(e.target.value)
  }

  return (
    // Login container 
    <div
      className="admin-login-menu-container"
      data-testid={'admin-login-wrapper'}
    >
      {/* Title */}
      <h1 className="admin-login-title">Admin Users</h1>

      {/* Login Fields */}
      <div className="admin-login-fields">
        <h4 className="admin-login-field-spacer">Username</h4>

        <input onChange={handleChangeUsername} />

        <h4 className="admin-login-field-spacer">Password</h4>

        <input type="password" onChange={handleChangePswrd} />
      </div>

      {/* Login Button */}
      <button
        className="admin-login-menu-submit-button"
        onClick={validate}
        disabled={disabled}
      >
        Login
      </button>
      <Toaster />
    </div>
  )
}

export default AdminLoginContainer
