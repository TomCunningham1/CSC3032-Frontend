import { useContext, useEffect, useState } from 'react'
import { AccountContext } from './Account'
import { Link } from 'react-router-dom'

const Status = () => {
  const [status, setStatus] = useState(false)

  const { getSession, logout } = useContext(AccountContext)

  useEffect(() => {
    getSession().then((session) => {
      console.log('Session: ', session)
      setStatus(true)
    })
  }, [])

  return (
    <div>
      {status ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to={'/admin-login'}>Admin Login</Link>
      )}
    </div>
  )
}

export default Status
