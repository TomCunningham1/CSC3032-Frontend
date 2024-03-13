import PopUp from './PopUp'
import './PopUp.css'

const componentId = 'fiftyfifty-popup'

const FiftyFiftyPopUp = ({ open, onClose }: any) => {
  if (!open) return null
  return (
    <PopUp id={componentId} title={'FiftyFifty'} onClose={onClose}>
      <div className="PopUpText" data-testid="help-popup-text">
        <ul>
          <li>Contacting a cyber specialist now</li>
          <li>Give us a few more seconds</li>
          <li>We removed 2 wromg answers for you. Good Luck!</li>
        </ul>
      </div>
    </PopUp>
  )
}

export default FiftyFiftyPopUp
