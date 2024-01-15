import React from 'react'
import { useNavigate } from 'react-router-dom'

const ScenarioPopUp = ({ open, onClose }: any) => {
  const navigate = useNavigate()

  const chooseSQLInjection = () => {
    //navigate('/SQL')
  }

  const chooseBufferOverflow = () => {
    //navigate('/BufferOverflow')
  }

  const chooseXSS = () => {
    //navigate('/XSS')
  }

  const chooseDDoS = () => {
    //navigate('/DDoS')
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
