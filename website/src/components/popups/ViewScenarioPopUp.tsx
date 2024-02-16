import PopUp from './PopUp'
import PopUpButton from './PopUpButton'

const ViewScenarioPopUp = ({ open, onClose }: any) => {
  if (!open) return null

  return (
    <PopUp id={'delete-scenario-popup'} title="View Scenario" onClose={onClose}>
      <div className="PopUpText">
        Enter the <i>title</i> of the scenario which you want to load.
        <br />
        <input></input>
      </div>
      <PopUpButton id="close" text={'Proceed'} onClose={onClose} />
    </PopUp>
  )
}

export default ViewScenarioPopUp
