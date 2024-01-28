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
}

const SaveResults = ({
  score,
  numberOfAnsweredQuestions,
  numberOfQuestions,
  correctAnswers,
  wrongAnswers,
  hintsUsed,
  fiftyFiftyUsed,
}: SaveResultsInterface) => {
  const [username, setUsername] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e)

    setUsername(e.target.value)
  }

  const handleSubmit = () => {
    console.log('send')

    BackendService.saveResults(
      username,
      scenarioName.scenario,
      score,
      numberOfQuestions,
      numberOfAnsweredQuestions,
      correctAnswers,
      wrongAnswers,
      hintsUsed,
      fiftyFiftyUsed
    )
  }

  return (
    <div data-testid={'send-email-container'}>
      <TextField
        placeholder="Enter Username"
        onChange={handleChange}
        data-testid={'send-email-text-input'}
      ></TextField>
      <button onClick={handleSubmit} data-testid={'send-email-button'}>
        Save Results
      </button>
    </div>
  )
}

export default SaveResults
