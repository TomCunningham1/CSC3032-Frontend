import PopUp from './PopUp'
import PopUpButton from './PopUpButton'

const SubmitScenarioPopup = ({ open, onClose }: any) => {
  if (!open) return null

  return (
    <PopUp
      id={'submit-scenario-popup'}
      title="Submit Scenario"
      onClose={onClose}
    >
      <div className="PopUpText">
        Submitting the updated scenario will over-write any existing questions.
        <br />
        Enter the <i>title</i> of the scenario which you want to load.
        <br />
        <input></input>
      </div>
      <PopUpButton id="close" text={'Proceed'} onClose={onClose} />
    </PopUp>
  )
}

export default SubmitScenarioPopup
