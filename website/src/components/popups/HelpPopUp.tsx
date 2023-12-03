import React from 'react'

const HelpPopUp = ({ open, onClose }: any) => {
  if (!open) return null
  return (
    <div className="popup">
      <h1>Help</h1>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <p>To pick a game scenario, click scenario</p>
      <p>To change your settings, click settings</p>
      <p>To logout, click logout</p>
      <p>To close pop ups, click the x</p>
    </div>
  )
}

export default HelpPopUp
