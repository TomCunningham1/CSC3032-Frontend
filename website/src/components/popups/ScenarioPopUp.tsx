import { useNavigate } from 'react-router-dom'
import questions from '../../questions/QuizQuestions'
import { Button } from '@mui/material'

const componentId = 'scenario-popup'

const ScenarioPopUp = ({ open, onClose }: any) => {
  const navigate = useNavigate()

  if (!open) return null
  return (
    <div className="popup" data-testid={componentId}>
      <h1>Scenario Selection</h1>
      <button
        className="close-btn"
        onClick={onClose}
        data-testid={`${componentId}-close-button`}
      >
        X
      </button>

      {questions.map((playthrough: { title: string; questions: object }) => {
        const navigateToQuiz = () => {
          navigate('/play/instructions', { state: playthrough.questions })
        }

        return (
          <button className="home-btn" onClick={navigateToQuiz}>
            {playthrough.title}
          </button>
        )
      })}
    </div>
  )
}

export default ScenarioPopUp
