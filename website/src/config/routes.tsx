import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register'
import App from '../App'
import Play from '../components/quiz/Play'

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
    element: <>Home</>,
  },
  {
    path: '/quiz',
    element: <Play state={undefined} history={undefined} />
  }
])

export default router
