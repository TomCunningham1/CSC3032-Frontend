import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './config/routes'

function App() {
  document.title = 'Hack Attack'

  return (
    <RouterProvider router={router} />
  )
}

export default App
