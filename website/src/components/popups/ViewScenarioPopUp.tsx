import { useState } from 'react'
import PopUp from './PopUp'
import PopUpButton from './PopUpButton'

const ViewScenarioPopUp = ({ open, onClose }: any) => {
  if (!open) return null

  const [title, setTitle] = useState('')

  const disabled = title === ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <PopUp id={'delete-scenario-popup'} title="View Scenario" onClose={onClose}>
      <div className="PopUpText">
        <p>
          Enter the <i>title</i> of the scenario which you want to load.
        </p>
        <br />
        <input onChange={handleChange}></input>
      </div>
      <PopUpButton
        id="close"
        text={'Proceed'}
        onClose={onClose}
        disabled={disabled}
      />
    </PopUp>
  )
}

export default ViewScenarioPopUp
