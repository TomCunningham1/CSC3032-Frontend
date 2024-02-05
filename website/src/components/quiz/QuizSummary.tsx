import { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import withRouter from '../Router'
import { Button, TextField } from '@mui/material'
import BackendService from '../../services/backend-service'
import SendEmail from './SendEmail'
import SaveResults from './SaveResults'
import scenarioName from '../../config/scenarioName'
import calculateSeconds from '../../utils/calculateSeconds'

interface QuizSummaryProps {
  router?: any
  location: any
  data: any
}

interface QuizSummaryState {
  score: number
  numberOfQuestions: number
  numberOfAnsweredQuestions: number
  correctAnswers: number
  wrongAnswers: number
  hintsUsed: number
  fiftyFiftyUsed: number
  minutes: string
  seconds: string
}

class QuizSummary extends Component<QuizSummaryProps, QuizSummaryState> {
  constructor(props: QuizSummaryProps) {
    super(props)
    this.state = {
      score: 0,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
      fiftyFiftyUsed: 0,
      minutes: '',
      seconds: ''
    }
  }

  handleEmail() {
    BackendService.emailResults(
      'tom.c22@hotmail.co.uk',
      this.state.score,
      this.state.numberOfQuestions,
      this.state.numberOfAnsweredQuestions,
      this.state.correctAnswers,
      this.state.wrongAnswers,
      this.state.hintsUsed,
      this.state.fiftyFiftyUsed
    )
  }
  handleResults() {
    BackendService.saveResults(
      'TestNew',
      scenarioName.scenario,
      this.state.score,
      this.state.numberOfQuestions,
      this.state.numberOfAnsweredQuestions,
      this.state.correctAnswers,
      this.state.wrongAnswers,
      this.state.hintsUsed,
      this.state.fiftyFiftyUsed,
      calculateSeconds(this.state.minutes, this.state.seconds)
      
    )
  }

  componentDidMount() {
    const { state }: any = this.props.router.location
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        hintsUsed: state.hintsUsed,
        fiftyFiftyUsed: state.fiftyFiftyUsed,
        minutes: state.minutes,
        seconds: state.seconds
      })
    }
  }

  render() {
    const { state } = this.props.router.location
    let stats, remark
    const userScore = this.state.score

    if (userScore <= 30) {
      remark = 'You need a lot more practice'
    } else if (userScore > 30 && userScore <= 50) {
      remark = 'Better luck next time'
    } else if (userScore <= 70 && userScore > 50) {
      remark = 'You can still do better'
    } else if (userScore >= 71 && userScore <= 84) {
      remark = 'Great job!'
    } else {
      remark = "You're a clever cookie!"
    }

    if (state !== undefined) {
      stats = (
        <Fragment>
          <div style={{ textAlign: 'center' }}>
            <span className="mdi mdi-check-circle-outline success-icon"></span>
          </div>
          <h1>Quiz has ended</h1>
          <div className="container stats">
            <h4>{remark}</h4>
            <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
            <span className="stat left">Total number of questions: </span>
            <span className="right">{this.state.numberOfQuestions}</span>
            <br />
            <span className="stat left">Number of attempted questions: </span>
            <span className="right">
              {this.state.numberOfAnsweredQuestions}
            </span>
            <br />
            <span className="stat left">Number of Correct Answers: </span>
            <span className="right">{this.state.correctAnswers}</span> <br />
            <span className="stat left">Number of Wrong Answers: </span>
            <span className="right">{this.state.wrongAnswers}</span>
            <br />
            <span className="stat left">Hints Used: </span>
            <span className="right">{this.state.hintsUsed}</span>
            <br />
            <span className="stat left">50-50 Used: </span>
            <span className="right">{this.state.fiftyFiftyUsed}</span>
            <br />
            <span className="stat left">Time: </span>
            <span className="right">{this.state.minutes}:{this.state.seconds}</span>
          </div>
          <section>
            <ul>
              <li>
                <SendEmail
                  score={this.state.score}
                  numberOfQuestions={this.state.numberOfQuestions}
                  numberOfAnsweredQuestions={
                    this.state.numberOfAnsweredQuestions
                  }
                  correctAnswers={this.state.correctAnswers}
                  wrongAnswers={this.state.wrongAnswers}
                  hintsUsed={this.state.hintsUsed}
                  fiftyFiftyUsed={this.state.fiftyFiftyUsed}
                />
              </li>
              <li>
                <SaveResults
                  score={this.state.score}
                  numberOfQuestions={this.state.numberOfQuestions}
                  numberOfAnsweredQuestions={
                    this.state.numberOfAnsweredQuestions
                  }
                  correctAnswers={this.state.correctAnswers}
                  wrongAnswers={this.state.wrongAnswers}
                  hintsUsed={this.state.hintsUsed}
                  fiftyFiftyUsed={this.state.fiftyFiftyUsed}
                  time = {calculateSeconds(this.state.minutes, this.state.seconds)}
                />
              </li>
              <li>
                <Link to="/play/quiz">Play Again</Link>
              </li>
              <li>
                <Link to="/">Back to Home</Link>
              </li>
            </ul>
          </section>
        </Fragment>
      )
    } else {
      stats = (
        <section>
          <h1 className="no-stats">No Statistics Available</h1>
          <ul>
            <li>
              <Link to="/play/quiz">Play a Scenrio</Link>
            </li>
            <li>
              <Link to="/">Back Home</Link>
            </li>
          </ul>
        </section>
      )
    }
    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Summary</title>
        </Helmet>
        <div className="quiz-summary">{stats}</div>
      </Fragment>
    )
  }
}

export default withRouter(QuizSummary)
