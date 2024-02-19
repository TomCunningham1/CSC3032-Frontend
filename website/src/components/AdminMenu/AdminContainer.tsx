import { useState } from 'react'
import AddUpdateScenario from './AddUpdateScenario'
import './admin.css'
import DeleteScenarioPopUp from '../popups/DeleteScenarioPopUp'
import ResetLeaderboardPopup from '../popups/ResetLeaderboardPopUp'
import ViewScenarioPopUp from '../popups/ViewScenarioPopUp'
import SubmitScenarioPopup from '../popups/SubmitScenarioPopUp'

interface AdminOptionButtonInterface {
  id: string
  title: string
  method?: () => void
}

const DeleteScenarioButton = () => {
  const [openDeleteScenarioPopUp, setOpenDeleteScenarioPopUp] = useState(false)

  return (
    <>
      <DeleteScenarioPopUp
        open={openDeleteScenarioPopUp}
        onClose={() => {
          setOpenDeleteScenarioPopUp(false)
        }}
      />
      <AdminOptionButton
        method={() => {
          setOpenDeleteScenarioPopUp(true)
        }}
        id="delete-scenario"
        title="Delete a Scenario"
      />
    </>
  )
}

const ViewScenarioButton = ({ setScenario }: any) => {
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <>
      <AdminOptionButton
        id="view-scenario"
        title="View Scenario"
        method={() => {
          setOpenPopup(true)
        }}
      />
      <ViewScenarioPopUp
        open={openPopup}
        setScenario={setScenario}
        onClose={() => {
          setOpenPopup(false)
        }}
      />
    </>
  )
}

const ResetLeaderboardButton = () => {
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <>
      <AdminOptionButton
        id="reset-leaderboard"
        title="Reset the leaderbard"
        method={() => setOpenPopup(true)}
      />
      <ResetLeaderboardPopup
        open={openPopup}
        onClose={() => {
          setOpenPopup(false)
        }}
      />
    </>
  )
}

const AdminOptionButton = ({
  id,
  title,
  method,
}: AdminOptionButtonInterface) => {
  return (
    <button
      className="admin-menu-button"
      onClick={method}
      id={id}
      data-testid={id}
    >
      {title}
    </button>
  )
}

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

const AdminOptionsContainer = ({ setScenario }: any) => (
  <div className={'admin-menu-options'}>
    <DeleteScenarioButton />
    <ViewScenarioButton setScenario={setScenario} />
    <ResetLeaderboardButton />
  </div>
)

const AdminContainer = () => {
  const [scenario, setScenario] = useState('')
  const [value, setValue] = useState('')

  return (
    <div className="admin-menu-container" data-testid={'admin-menu-wrapper'}>
      <AdminOptionsContainer setScenario={setScenario} />
      <AddUpdateScenario
        scenario={scenario}
        setScenario={setScenario}
        value={value}
        setValue={setValue}
      />
      {isJSON(scenario) ? <>Valid JSON</> : <>Invalid JSON</>}
      <SubmitButton scenario={scenario} />
    </div>
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
