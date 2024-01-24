import React from 'react'
import { useNavigate } from 'react-router-dom'

const componentId = 'logout-popup'

const LogoutPopUp = ({ open, onClose }: any) => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  if (!open) return null
  return (
    <div className="popup" data-testid={componentId}>
      <h1>Logout</h1>
      <p>Are you sure you want to log out?</p>
      <button
        className="home-btn"
        onClick={logout}
        data-testid={`${componentId}-logout-button`}
      >
        Yes
      </button>
      <button
        className="home-btn"
        onClick={onClose}
        data-testid={`${componentId}-close-button`}
      >
        No
      </button>
    </div>
  )
}

export default LogoutPopUp
