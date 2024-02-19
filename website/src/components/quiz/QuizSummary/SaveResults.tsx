import { useState } from 'react'
import BackendService from '../../../services/backend-service'
import scenarioName from '../../../config/scenarioName'
import toast, { Toaster } from 'react-hot-toast'

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
      .then(() => {
        toast.success('Your results have been saved!')
      })
      .catch((err) => {
        console.log(err.message)
        toast.error('Error saving your results, please try again later!')
      })
  }

  return (
    <div
      data-testid={'send-email-container'}
      className={'quiz-summary-button-container'}
    >
      <input
        placeholder="Enter Username"
        onChange={handleChange}
        data-testid={'send-email-text-input'}
      ></input>
      <button
        className={'quiz-summary-button'}
        onClick={handleSubmit}
        data-testid={'send-email-button'}
      >
        Save Results
      </button>
      <Toaster />
    </div>
  )
}

export default SaveResults
