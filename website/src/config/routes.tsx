import Login from '../pages/Login'
import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register'
import App from '../App'
import TitleBar from '../components/TitleBar/TitleBar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TitleBar><App /></TitleBar>,
  },
  {
    path: '/register',
    element: <TitleBar><Register /></TitleBar>,
  },
  {
    path: '/home',
    element: <TitleBar>Home</TitleBar>,
  },
  {
    path: '/settings',
    element: <TitleBar>Settings</TitleBar>
  },
  {
    path: '/help',
    element: <TitleBar>Help</TitleBar>
  },
])

export default router
