import { useState } from 'react'
import PopUp from './PopUp'
import PopUpButton from './PopUpButton'
import exp from 'constants'
import BackendService from '../../services/backend-service'

const SubmitScenarioPopup = ({ scenario, open, onClose }: any) => {
  if (!open) return null

  const [value, setValue] = useState('')

  const parsedScenario = JSON.parse(scenario)

  const title = parsedScenario.title
  const questions = parsedScenario.questions

  const expected = 'confirm'

  const disabled = expected !== value

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = () => {
    BackendService.writeScenario(title, questions)
    onClose()
  }

  console.log(disabled)

  return (
    <PopUp
      id={'submit-scenario-popup'}
      title="Submit Scenario"
      onClose={onClose}
    >
      <div className="PopUpText">
        <p>
          Submitting the updated scenario will over-write any existing
          questions.
        </p>
        <br />
        <p>
          Enter <i>confirm</i> to confirm you want to update the scenario.
        </p>
        <br />
        <input onChange={handleChange}></input>
      </div>
      <PopUpButton
        id="close"
        text={'Proceed'}
        onClose={onSubmit}
        disabled={disabled}
      />
    </PopUp>
  )
}

export default SubmitScenarioPopup
