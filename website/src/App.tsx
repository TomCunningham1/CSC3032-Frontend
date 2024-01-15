import { useEffect, useState } from 'react'
import './App.css'
import CustomClockLoader from './components/LoadingClock/LoadingClock'
import Login from './pages/Login'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="background">
      {loading ? <CustomClockLoader loading={loading} /> : <Login />}
    </div>
  )
}

export default App
