import './PopUp.css'

interface PopUpButtonInterface {
  id: string
  onClose: () => void
  text?: string
}

const PopUpButton = ({
  id: componentId,
  onClose,
  text,
}: PopUpButtonInterface) => {
  return (
    <button
      className="PopUpButton"
      data-testid={`${componentId}-close-button`}
      onClick={onClose}
    >
      {text ? text : 'Back'}
    </button>
  )
}

export default PopUpButton
