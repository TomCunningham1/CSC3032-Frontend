import React from 'react'

const HelpPopUp = ({ open, onClose }: any) => {
  if (!open) return null
  return (
    <div className="popup">
      <button onClick={onClose}>X</button>
      <h1>Help</h1>
      <p>To pick a game scenario, click scenario</p>
      <p>To change your settings, click settings</p>
      <p>To logout, click logout</p>
    </div>
  )
}

export default HelpPopUp
