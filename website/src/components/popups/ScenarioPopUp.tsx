// import React from 'react'
// import { useNavigate } from 'react-router-dom'

const ScenarioPopUp = ({ open, onClose }: any) => {
  // const navigate = useNavigate()

  const chooseSQLInjection = () => {
    //navigate('/SQL')
    alert('You have chosen SQL Injection')
  }

  const chooseBufferOverflow = () => {
    //navigate('/BufferOverflow')
    alert('You have chosen Buffer Overflow')
  }

  const chooseXSS = () => {
    //navigate('/XSS')
    alert('You have chosen Cross Site Scripting')
  }

  const chooseDDoS = () => {
    //navigate('/DDoS')
    alert('You have chosen Distributed Denial of Service')
  }

  if (!open) return null
  return (
    <div className="popup">
      <h1>Scenario Selection</h1>
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <button className="home-btn" onClick={chooseSQLInjection}>
        SQL Injection
      </button>
      <button className="home-btn" onClick={chooseBufferOverflow}>
        Buffer Overflow
      </button>
      <button className="home-btn" onClick={chooseXSS}>
        Cross Site Scripting
      </button>
      <button className="home-btn" onClick={chooseDDoS}>
        Distributed Denial of Service
      </button>
    </div>
  )
}

export default ScenarioPopUp
