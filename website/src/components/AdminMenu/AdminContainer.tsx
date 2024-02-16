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

const ViewScenarioButton = () => {
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

const SubmitButton = () => {
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <>
      <SubmitScenarioPopup
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
      >
        Submit Scenario
      </button>
    </>
  )
}

const AdminOptionsContainer = () => (
  <div className={'admin-menu-options'}>
    <DeleteScenarioButton />
    <ViewScenarioButton />
    <ResetLeaderboardButton />
  </div>
)

const AdminContainer = () => {
  return (
    <div className="admin-menu-container" data-testid={'admin-menu-wrapper'}>
      <AdminOptionsContainer />
      <AddUpdateScenario />
      <SubmitButton />
    </div>
  )
}

export default AdminContainer
