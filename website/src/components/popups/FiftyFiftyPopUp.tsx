const componentId = 'fiftyfifty-popup'

const FiftyFiftyPopUp = ({ open, onClose }: any) => {
  if (!open) return null
  return (
    <div className="popup" data-testid={componentId}>
      <h1>Help</h1>
      <button
        className="close-btn"
        data-testid={`${componentId}-close-button`}
        onClick={onClose}
      >
        X
      </button>
      <p>Please wait while a specialist assists you</p>
    </div>
  )
}

export default FiftyFiftyPopUp
