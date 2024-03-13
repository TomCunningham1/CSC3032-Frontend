import PopUp from './PopUp'
import '../../styles/styles.scss'
import PhoneIcon from '@mui/icons-material/Phone'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'

const componentId = 'help-popup'

const HelpPopUp = ({ open, onClose }: any) => {
  if (!open) return null
  return (
    <PopUp id={componentId} title={'Help'} onClose={onClose}>
      <div className="pop-up-text" data-testid="help-popup-text">
        <ul>
          <li>
            To pick a game scenario, select one of the options on the home page.
          </li>
          <li>
            Current Scenario options are:
            <ul>
              <li>SQL Injection</li>
              <li>Distributed Denial of Service</li>
              <li>Cross Site Scripting</li>
              <li>Buffer Overflow</li>
            </ul>
          </li>
          <li>
            To change your settings, click the Settings button on the navigation
            bar at the top of the screen.{' '}
          </li>
          <li>
            To view how other players have done, view the leaderboards, by
            clicking the Leaderboard button at the top of the screen.
          </li>
          <li>
            <LiveHelpIcon style={{ color: 'white' }} /> Represents the 'Call a
            friend' option which removes one incorrect option from the
            questions.
          </li>
          <li>
            <PhoneIcon color="primary" style={{ color: 'white' }} /> Represents
            50/50 which can be used in the quiz to remove two options.
          </li>
          <li>
            To close pop ups, click the "Back" button at the bottom of the pop
            up.
          </li>
        </ul>
      </div>
    </PopUp>
  )
}

export default HelpPopUp
