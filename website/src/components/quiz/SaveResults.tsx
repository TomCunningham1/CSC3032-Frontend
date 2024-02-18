import { TextField } from '@mui/material'
import { useState } from 'react'
import BackendService from '../../services/backend-service'
import scenarioName from '../../config/scenarioName'

interface SaveResultsInterface {
  score: number
  numberOfQuestions: number
  numberOfAnsweredQuestions: number
  correctAnswers: number
  wrongAnswers: number
  hintsUsed: number
  fiftyFiftyUsed: number
  time: number
}

const SaveResults = ({
  score,
  numberOfAnsweredQuestions,
  numberOfQuestions,
  correctAnswers,
  wrongAnswers,
  hintsUsed,
  fiftyFiftyUsed,
  time,
}: SaveResultsInterface) => {
  const [username, setUsername] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsername(e.target.value)
  }

  const handleSubmit = () => {
    BackendService.saveResults(
      username,
      scenarioName.scenario,
      score,
      numberOfQuestions,
      numberOfAnsweredQuestions,
      correctAnswers,
      wrongAnswers,
      hintsUsed,
      fiftyFiftyUsed,
      time
    )
  }

  return (
    <div data-testid={'send-results-container'}>
      <TextField
        placeholder="Enter Username"
        onChange={handleChange}
        data-testid={'send-results-text-input'}
      ></TextField>
      <button onClick={handleSubmit} data-testid={'send-results-button'}>
        Save Results
      </button>
    </div>
  )
}

export default SaveResults
