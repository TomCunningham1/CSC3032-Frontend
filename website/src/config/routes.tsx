import Login from '../pages/Login'
import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Leaderboard from '../pages/Leaderboard'
import App from '../App'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/leaderboard',
    element: <Leaderboard />,
  },
])

export default router
