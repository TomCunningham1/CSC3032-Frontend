import { useContext, useState } from 'react'
import PopUp from './PopUp'
import PopUpButton from './PopUpButton'
import BackendService from '../../services/backend-service'
import toast, { Toaster } from 'react-hot-toast'
import { LoadingContext } from '../LoadingContext/LoadingContext'

interface ViewScenarioPopUpProps {
  open: boolean
  onClose: () => void
  setScenario: () => void
  scenarios: string[]
}
const ViewScenarioPopUp = ({ open, onClose, setScenario, scenarios }: any) => {
  if (!open) return null

  const [title, setTitle] = useState('')

  const { updateLoading } = useContext(LoadingContext)

  const disabled = title === ''

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTitle(e.target.value)
  }

  const handleProceed = async () => {
    updateLoading(true)
    await BackendService.readScenario(title)
      .then((response) => {
        setScenario(JSON.stringify(response.data, null, 2))
        toast.success('Scenario successfully retrieved')
        onClose()
      })
      .catch((err) => {
        toast.error(err.message)
      })
    updateLoading(false)
  }

  return (
    <PopUp id={'delete-scenario-popup'} title="View Scenario" onClose={onClose}>
      <Toaster />
      <div className="PopUpText">
        <p>
          Enter the <i>title</i> of the scenario which you want to load.
        </p>
        <br />
        <select id='scenario-select' className={'PopUpSelect'} onChange={handleChange}>
          <option value={''}></option>
          {scenarios.map((scenario: string) => {
            return <option value={scenario}>{scenario}</option>
          })}
        </select>
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
