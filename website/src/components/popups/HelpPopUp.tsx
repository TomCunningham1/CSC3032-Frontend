import PopUp from "./PopUp"
import './PopUp.css'

const componentId = 'help-popup'

const HelpPopUp = ({ open, onClose }: any) => {
  if (!open) return null
  return (
    <PopUp id={componentId} title={'Help'} onClose={onClose} >
      <div className="PopUpText">
        <ul>
          <li>To pick a game scenario, select one of the options on the home page.</li>
          <li>Current Scenario options are:
            <ul>
              <li>SQL Injection</li>
              <li>Distributed Denial of Service</li>
              <li>Cross Site Scripting</li>
              <li>Buffer Overflow</li>
            </ul>
          </li>
          <li>To change your settings, click the settings button on the navigation bar at the top of the screen. </li>
          <li>To view how other players have done, view the leaderboards, by clicking the leaderboard button at the top of the screen.</li>
          <li>To close pop ups, click the "Back" button at the bottom of the pop up.</li>
        </ul>
      </div>
    </PopUp>
  )
}

export default HelpPopUp
