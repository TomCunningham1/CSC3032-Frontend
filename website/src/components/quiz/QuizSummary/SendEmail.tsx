import { Alert, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import BackendService from '../../../services/backend-service'
import './quiz-summary.css'
import toast, { Toaster } from 'react-hot-toast'

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

  const handleSubmit = async () => {
    await BackendService.emailResults(
      email,
      score,
      numberOfQuestions,
      numberOfAnsweredQuestions,
      correctAnswers,
      wrongAnswers,
      hintsUsed,
      fiftyFiftyUsed
    )
      .then(() => {
        toast.success('Results have been sent')
      })
      .catch((err) => {
        toast.error('Unable to send email')
      })
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
      <Toaster />
    </div>
  )
}

export default SendEmail
