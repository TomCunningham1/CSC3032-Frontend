import { useContext, useState } from 'react'
import PopUp from './PopUp'
import PopUpButton from './PopUpButton'
import BackendService from '../../services/backend-service'
import toast, { Toaster } from 'react-hot-toast'
import { LoadingContext } from '../LoadingContext/LoadingContext'

const SubmitScenarioPopup = ({ scenario, open, onClose }: any) => {
  if (!open) return null

  const [value, setValue] = useState('')

  const parsedScenario = JSON.parse(scenario)

  const { updateLoading } = useContext(LoadingContext)

  const title = parsedScenario.title
  const questions = parsedScenario.questions

  const expected = 'confirm'

  const disabled = expected !== value

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmit = async () => {
    updateLoading(true)
    await BackendService.writeScenario(title, questions)
      .then(() => {
        toast.success('Successfully updated')
        onClose()
      })
      .catch((err) => {
        toast.error(err.message)
      })
    updateLoading(false)
  }

  console.log(disabled)

  return (
    <PopUp
      id={'submit-scenario-popup'}
      title="Submit Scenario"
      onClose={onClose}
    >
      <Toaster />
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
