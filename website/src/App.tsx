import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Account } from './auth/Account'
import RenderRoutes from './config/routes'

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
