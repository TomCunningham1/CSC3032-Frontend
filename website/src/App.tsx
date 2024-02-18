import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import router from './config/routes'
import { Account } from './auth/Account'
import RenderRoutes from './config/newRoutes'

function App() {
  document.title = 'Hack Attack'

  return (
    <Account>
      <BrowserRouter>
        <RenderRoutes />
      </BrowserRouter>
    </Account>
  )
}

export default App
