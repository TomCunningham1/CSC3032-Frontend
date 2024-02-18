import { TextField } from '@mui/material'
import { useState } from 'react'
import BackendService from '../../../services/backend-service'
import './quiz-summary.css'

interface SendEmailInterface {
  score: number
  numberOfQuestions: number
  numberOfAnsweredQuestions: number
  correctAnswers: number
  wrongAnswers: number
  hintsUsed: number
  fiftyFiftyUsed: number
}

const SendEmail = ({
  score,
  numberOfAnsweredQuestions,
  numberOfQuestions,
  correctAnswers,
  wrongAnswers,
  hintsUsed,
  fiftyFiftyUsed,
}: SendEmailInterface) => {
  const [email, setEmail] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    BackendService.emailResults(
      email,
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
    <div
      data-testid={'send-email-container'}
      className={'quiz-summary-button-container'}
    >
      <input
        onChange={handleChange}
        placeholder="Enter an email"
        data-testid={'send-email-text-input'}
        value={email}
      />
      <button
        className={'quiz-summary-button'}
        onClick={handleSubmit}
        data-testid={'send-email-button'}
      >
        Send Email
      </button>
    </div>
  )
}

export default SendEmail
