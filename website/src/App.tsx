import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Account } from './auth/Account'
import RenderRoutes from './config/routes'
import { Loader } from './components/LoadingContext/LoadingContext'

function App() {
  document.title = 'Hack Attack'

  return (
    <Account>
      <Loader>
        <BrowserRouter>
          <RenderRoutes />
        </BrowserRouter>
      </Loader>
    </Account>
  )
}

export default App
