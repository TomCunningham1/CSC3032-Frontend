import { TextField } from '@mui/material'
import { useState } from 'react'
import BackendService from '../../services/backend-service'

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
    console.log(e)

    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    console.log('send')

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
    <div data-testid={'send-email-container'}>
      <TextField
        onChange={handleChange}
        data-testid={'send-email-text-input'}
      ></TextField>
      <button onClick={handleSubmit} data-testid={'send-email-button'}>
        Send Email
      </button>
    </div>
  )
}

export default SendEmail
