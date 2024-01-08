const componentId = 'help-popup'

const HelpPopUp = ({ open, onClose }: any) => {
  if (!open) return null
  return (
    <div className="popup" data-testid={componentId}>
      <h1>Help</h1>
      <button className="close-btn" 
      data-testid={`${componentId}-close-button`}
      onClick={onClose}>
        X
      </button>
      <p>To pick a game scenario, click scenario</p>
      <p>To change your settings, click settings</p>
      <p>To logout, click logout</p>
    </div>
  )
}

export default HelpPopUp
