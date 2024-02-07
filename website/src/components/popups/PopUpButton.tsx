import './PopUp.css'

interface PopUpButtonInterface {
    id: string;
    onClose: ()=>void;
}

const PopUpButton = ({id: componentId, onClose}: PopUpButtonInterface) => {
    return (
        <button
            className="PopUpButton"
            data-testid={`${componentId}-close-button`}
            onClick={onClose}>
            Back
        </button>
    )
}

export default PopUpButton;
