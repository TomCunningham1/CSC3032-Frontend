import PopUp from './PopUp'
import PopUpButton from './PopUpButton'

const DeleteScenarioPopUp = ({ open, onClose }: any) => {
  if (!open) return null

  return (
    <PopUp
      id={'delete-scenario-popup'}
      title="Delete Scenario"
      onClose={onClose}
    >
      <div className="PopUpText">
        Enter the <i>title</i> of the scenario which you want to delete.*
        <br />
        <input></input>
        <br />
        To confirm enter <i>permanently delete</i> into the below text box.
        <br />
        <input></input>
        <br />
        *Deleting is permenant and cannot be undone
      </div>
      <PopUpButton id="close" text={'Proceed'} onClose={onClose} />
    </PopUp>
  )
}

export default DeleteScenarioPopUp
