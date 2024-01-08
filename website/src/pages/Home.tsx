import React, { useState } from 'react'
import '../App.css'
import ScenarioPopUp from '../components/popups/ScenarioPopUp'
import HelpPopUp from '../components/popups/HelpPopUp'
import SettingsPopUp from '../components/popups/SettingsPopUp'
import LogoutPopUp from '../components/popups/LogoutPopUp'

const Home = () => {
  const [openScenarioPopUp, setOpenScenarioPopUp] = useState(false)
  const [openHelpPopUp, setOpenHelpPopUp] = useState(false)
  const [openSettingsPopUp, setOpenSettingsPopUp] = useState(false)
  const [openLogoutPopUp, setOpenLogoutPopUp] = useState(false)

  return (
    // TODO - Rename App class
    <div className="App" data-testid={"app-wrapper"}>
      <ScenarioPopUp
        open={openScenarioPopUp}
        onClose={() => setOpenScenarioPopUp(false)}
      />
      <HelpPopUp open={openHelpPopUp} onClose={() => setOpenHelpPopUp(false)} />
      <SettingsPopUp
        open={openSettingsPopUp}
        onClose={() => setOpenSettingsPopUp(false)}
      />
      <LogoutPopUp
        open={openLogoutPopUp}
        onClose={() => setOpenLogoutPopUp(false)}
      />
      <div className="main-menu-wrapper" data-testid={"main-menu-wrapper"}>
        <h2>Hack Attack</h2>
        <button
          className="home-btn"
          data-testid={"scenarios-button"}
          onClick={() => {
            setOpenScenarioPopUp(true)
          }}
        >
          Scenarios
        </button>
        <button className="home-btn" data-testid={'help-button'}
        onClick={() => setOpenHelpPopUp(true)}>
          Help
        </button>
        <button className="home-btn" data-testid={'settings-button'}
        onClick={() => setOpenSettingsPopUp(true)}>
          Settings
        </button>
        <button className="home-btn" data-testid={'logout-button'}
        onClick={() => setOpenLogoutPopUp(true)}>
          Logout
        </button>
      </div>
    </div>
  ) // TODO - Rename home-btn class
}

export default Home
