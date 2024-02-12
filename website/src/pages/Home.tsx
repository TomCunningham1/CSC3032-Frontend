import { Link } from 'react-router-dom'
import '../App.css'
import MainMenuContainer from '../components/MainMenu/MainMenuContainer'

const Home = () => {
  return (
    <div data-testid={'app-wrapper'}>
      <MainMenuContainer />

      <Link to={'/admin-login'}>Admin Login</Link>
    </div>
  )
}

export default Home
