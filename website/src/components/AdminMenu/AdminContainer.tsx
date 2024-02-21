import { useEffect, useState } from 'react'
import AddUpdateScenario from './AddUpdateScenario'
import './admin.css'
import SubmitScenarioPopup from '../popups/SubmitScenarioPopUp'
import DeleteScenarioButton from './AdminMenuButtons/DeleteScenarioButton'
import ResetLeaderboardButton from './AdminMenuButtons/ResetLeaderboardButton'
import ViewScenarioButton from './AdminMenuButtons/ViewScenarioButton'
import toast, { Toaster } from 'react-hot-toast'
import LoadingClock from '../LoadingClock/LoadingClock'
import BackendService from '../../services/backend-service'

const SubmitButton = ({ scenario }: { scenario: string }) => {
  const [openPopup, setOpenPopup] = useState(false)

  const disabled = isJSON(scenario) ? false : true

  return (
    <>
      <SubmitScenarioPopup
        scenario={scenario}
        open={openPopup}
        onClose={() => {
          setOpenPopup(false)
        }}
      />
      <button
        className="admin-menu-button-right"
        onClick={() => {
          setOpenPopup(true)
        }}
        disabled={disabled}
      >
        Submit Scenario
      </button>
    </>
  )
}

const AdminOptionsContainer = ({ setScenario, scenarios }: any) => (
  <div className={'admin-menu-options'}>
    <DeleteScenarioButton scenarios={scenarios}/>
    <ViewScenarioButton setScenario={setScenario} />
    <ResetLeaderboardButton />
  </div>
)

const AdminContainer = () => {
  const [scenario, setScenario] = useState('')
  const [value, setValue] = useState('')
  const [loading, isLoading] = useState(true)
  const [scenarios, setScenarios] = useState([])

  useEffect(() => {
    isLoading(true)
    const getScenarios = async () => {
      await BackendService.getAllScenarios().then((resp) => {
        setScenarios(resp.data)
      }).catch((err) => {
        toast.error(err)
      })
    }
    getScenarios()
    isLoading(false)
  }, [])

  return (
    <>
      <Toaster />
      { loading ? <LoadingClock /> : 
          <div className="admin-menu-container" data-testid={'admin-menu-wrapper'}>
          <AdminOptionsContainer setScenario={setScenario} scenarios={scenarios}/>
          <AddUpdateScenario
            scenario={scenario}
            setScenario={setScenario}
            value={value}
            setValue={setValue}
          />
          {isJSON(scenario) ? <>Valid JSON</> : <>Invalid JSON</>}
          <SubmitButton scenario={scenario} />
        </div>}
    </>

  )
}

const isJSON = (str: string) => {
  try {
    return JSON.parse(str) && !!str
  } catch (e) {
    return false
  }
}

export default AdminContainer
