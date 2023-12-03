import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutPopUp = ({ open, onClose }: any) => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  if (!open) return null
  return (
    <div className="popup">
      <h1>Logout</h1>
      <p>Are you sure you want to log out?</p>
      <button className="home-btn" onClick={logout}>Yes</button>
      <button className="home-btn" onClick={onClose}>No</button>
    </div>
  )
}

export default LogoutPopUp
