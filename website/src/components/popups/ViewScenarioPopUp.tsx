import { useState } from 'react'
import PopUp from './PopUp'
import PopUpButton from './PopUpButton'
import BackendService from '../../services/backend-service'

const ViewScenarioPopUp = ({ open, onClose, setScenario }: any) => {
  if (!open) return null

  const [title, setTitle] = useState('')

  const disabled = title === ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleProceed = async () => {
    const response = await BackendService.readScenario(title)
    console.log(response)
    setScenario(JSON.stringify(response.data, null, 2))
    onClose()
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
        onClose={handleProceed}
        disabled={disabled}
      />
    </PopUp>
  )
}

export default ViewScenarioPopUp
