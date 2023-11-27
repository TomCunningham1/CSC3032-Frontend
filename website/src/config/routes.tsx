import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register'
import Home from '../pages/Home'
import App from '../App'
import TitleBar from '../components/TitleBar/TitleBar'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TitleBar>
        <App />
      </TitleBar>
    ),
  },
  {
    path: '/register',
    element: (
      <TitleBar>
        <Register />
      </TitleBar>
    ),
  },
  {
    path: '/home',
    element: <TitleBar><Home /></TitleBar>,
  }
])

export default router
