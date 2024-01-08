import { useNavigate } from 'react-router-dom'

const componentId = 'scenario-popup';

const ScenarioPopUp = ({ open, onClose }: any) => {
  const navigate = useNavigate()

  const chooseSQLInjection = () => {
    navigate('/play/instructions')
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
