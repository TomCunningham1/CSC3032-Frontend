import { useNavigate } from 'react-router-dom'

const componentId = 'scenario-popup';

const ScenarioPopUp = ({ open, onClose }: any) => {
  const navigate = useNavigate()

  const chooseSQLInjection = () => {
    navigate('/play/instructions')
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
    <div className="popup" data-testid={componentId}>
      <h1>Scenario Selection</h1>
      <button className="close-btn" onClick={onClose} data-testid={`${componentId}-close-button`}>
        X
      </button>
      <button className="home-btn" onClick={chooseSQLInjection} data-testid={`${componentId}-sql`}>
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
