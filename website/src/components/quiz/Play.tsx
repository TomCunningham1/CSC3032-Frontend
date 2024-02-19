import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import M from 'materialize-css'
import classnames from 'classnames'
import isEmpty from '../../utils/is-empty'
import correctNotification from '../../assets/audio/correct-answer.mp3'
import wrongNotification from '../../assets/audio/wrong-answer.mp3'
import buttonSound from '../../assets/audio/button-sound.mp3'
import '../../styles/styles.scss'
import withRouter from '../Router'
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import KillChain from './sql-injection.json'


interface PlayPropsInterface {
  state?: any
  history?: any
  router?: any
  location: any
}

interface PlayStateInterface {
  stages: any[]
  currentStage: any
  nextStage:any
  previousStage:any
  numberOfStages: number
  questions: any[]
  currentQuestion: any
  nextQuestion: any
  previousQuestion: any
  answer: string
  numberOfQuestions: number
  numberOfAnsweredQuestions: number
  currentQuestionIndex: number
  score: number
  correctAnswers: number
  wrongAnswers: number
  hints: number
  fiftyFifty: number
  usedFiftyFifty: boolean
  nextButtonDisabled: boolean
  previousButtonDisabled: boolean
  previousRandomNumbers: any
  time: any
  state: any
}

class Play extends Component<PlayPropsInterface, PlayStateInterface> {
  correctSound: any
  correctTimeout: any
  wrongTimeout: any
  state: any
  interval: any
  wrongSound: any
  buttonSound: any

  constructor(props: PlayPropsInterface) {
    super(props)
    this.state = {
      questions: this.props.router.location.state,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: '',
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hints: 5,
      fiftyFifty: 2,
      usedFiftyFifty: false,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      previousRandomNumbers: [],
      time: {},
    }
    this.interval = null
    this.correctSound = React.createRef()
    this.wrongSound = React.createRef()
    this.buttonSound = React.createRef()
  }

  componentDidMount() {
    const { questions, currentQuestion, nextQuestion, previousQuestion, stages, currentStage, nextStage, previousStage} =
      this.state
    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion,
      stages,
      currentStage,
      nextStage,
      previousStage
    )
    this.startTimer()
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  displayStages = (
    stages = this.state.stages,
    currentStage: any,
    nextStage: any,
    previousStage: any,
  ) => {
    let { currentStageIndex } = this.state
    if(!isEmpty(this.state.questions.stages)){

      const answer = currentStage.answer
      this.setState(
        {

        },
        () => {
          this.showOptions()
          this.handleDisableButton()
        }
      )
    }
  }

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion: any,
    nextQuestion: any,
    previousQuestion: any,
    stages = this.state.stages,
    currentStage: any,
    nextStage: any,
    previousStage: any,
  ) => {
    let { currentQuestionIndex, currentStageIndex } = this.state
    if (!isEmpty(this.state.questions && this.state.questions.stage)) {
      questions = this.state.questions
      currentQuestion = questions[currentQuestionIndex]
      nextQuestion = questions[currentQuestionIndex + 1]
      previousQuestion = questions[currentQuestionIndex - 1]
      stages = this.state.questions.stages
      currentStage = stages[currentStageIndex]
      nextStage = stages[currentStageIndex + 1]
      previousStage = stages[currentStageIndex - 1]
      const answer = currentQuestion.answer
      this.setState(
        {
          currentQuestion,
          nextQuestion,
          previousQuestion,
          numberOfQuestions: questions.length,
          currentStage,
          nextStage,
          previousStage,
          numberOfStages: stages.length,
          answer,
          previousRandomNumbers: [],
        },
        () => {
          this.showOptions()
          this.handleDisableButton()
        }
      )
    }
  }

  handleOptionClick = (e: any) => {
    if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      this.correctTimeout = setTimeout(() => {
        this.correctSound.current.play()
      }, 500)
      this.correctAnswer()
    } else {
      this.wrongTimeout = setTimeout(() => {
        this.wrongSound.current.play()
      }, 500)
      this.wrongAnswer()
    }
  }

  handleNextButtonClick = () => {
    this.playButtonSound()
    if (this.state.nextQuestion !== undefined && this.state.nextStage) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
          currentStage: prevState.currentStage + 1,
        }),
        () => {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion,
            this.state.stages,
            this.state.currentStage,
            this.state.nextStage,
            this.state.previousStage,
          )
        }
      )
    }
  }

  handlePreviousButtonClick = () => {
    this.playButtonSound()
    if (this.state.previousQuestion !== undefined && this.state.previousStage !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
          currentStage: prevState.currentStage - 1,
        }),
        () => {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion,
            this.state.stages,
            this.state.currentStage,
            this.state.nextStage,
            this.state.previousStage,
          )
        }
      )
    }
  }

  handleQuitButtonClick = () => {
    this.playButtonSound()
    if (window.confirm('Are you sure you want to quit?')) {
      this.props.router.navigate('/')
    }
  }

  handleButtonClick = (e: any) => {
    switch (e.target.id) {
      case 'next-button':
        this.handleNextButtonClick()
        break

      case 'previous-button':
        this.handlePreviousButtonClick()
        break

      case 'quit-button':
        this.handleQuitButtonClick()
        break

      default:
        break
    }
  }

  playButtonSound = () => {
    this.buttonSound.current.play()
  }

  correctAnswer = () => {
    M.toast({
      html: 'Correct Answer!',
      classes: 'toast-valid',
      displayLength: 1500,
    })
    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endGame()
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion,
            this.state.stages,
            this.state.currentStage,
            this.state.nextStage,
            this.state.previousStage,
          )
        }
      }
    )
  }

  wrongAnswer = () => {
    navigator.vibrate(1000)
    M.toast({
      html: 'Wrong Answer!',
      classes: 'toast-invalid',
      displayLength: 1500,
    })
    this.setState(
      (prevState) => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
      }),
      () => {
        if (this.state.nextQuestion === undefined) {
          this.endGame()
        } else {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion,
            this.state.stages,
            this.state.currentStage,
            this.state.nextStage,
            this.state.previousStage,
          )
        }
      }
    )
  }

  showOptions = () => {
    const options = Array.from(document.querySelectorAll('.option'))

    options.forEach((option: any) => {
      option.style.visibility = 'visible'
    })

    this.setState({
      usedFiftyFifty: false,
    })
  }

  handleHints = () => {
    if (this.state.hints > 0) {
      const options = Array.from(document.querySelectorAll('.option'))
      let indexOfAnswer

      options.forEach((option, index) => {
        if (
          option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()
        ) {
          indexOfAnswer = index
        }
      })

      while (true) {
        const randomNumber = Math.round(Math.random() * 3)
        if (
          randomNumber !== indexOfAnswer &&
          !this.state.previousRandomNumbers.includes(randomNumber)
        ) {
          options.forEach((option: any, index) => {
            if (index === randomNumber) {
              option.style.visibility = 'hidden'
              this.setState((prevState) => ({
                hints: prevState.hints - 1,
                previousRandomNumbers:
                  prevState.previousRandomNumbers.concat(randomNumber),
              }))
            }
          })
          break
        }
        if (this.state.previousRandomNumbers.length >= 3) break
      }
    }
  }

  handleFiftyFifty = () => {
    if (this.state.fiftyFifty > 0 && this.state.usedFiftyFifty === false) {
      const options = document.querySelectorAll('.option')
      const randomNumbers: any[] = []
      let indexOfAnswer

      options.forEach((option, index) => {
        if (
          option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()
        ) {
          indexOfAnswer = index
        }
      })

      let count = 0
      do {
        const randomNumber = Math.round(Math.random() * 3)
        if (randomNumber !== indexOfAnswer) {
          if (
            randomNumbers.length < 2 &&
            !randomNumbers.includes(randomNumber) &&
            !randomNumbers.includes(indexOfAnswer)
          ) {
            randomNumbers.push(randomNumber)
            count++
          } else {
            while (true) {
              const newRandomNumber = Math.round(Math.random() * 3)
              if (
                !randomNumbers.includes(newRandomNumber) &&
                newRandomNumber !== indexOfAnswer
              ) {
                randomNumbers.push(newRandomNumber)
                count++
                break
              }
            }
          }
        }
      } while (count < 2)

      options.forEach((option: any, index) => {
        if (randomNumbers.includes(index)) {
          option.style.visibility = 'hidden'
        }
      })
      this.setState((prevState) => ({
        fiftyFifty: prevState.fiftyFifty - 1,
        usedFiftyFifty: true,
      }))
    }
  }
  //Timer code
  startTimer = () => {
    const countDownTime = Date.now() + 180000
    this.interval = setInterval(() => {
      const now = Date.now()
      const distance = countDownTime - now

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(this.interval)
        this.setState(
          {
            time: {
              minutes: 0,
              seconds: 0,
            },
          },
          () => {
            this.endGame()
          }
        )
      } else {
        this.setState({
          time: {
            minutes,
            seconds,
            distance,
          },
        })
      }
    }, 1000)
  }

  handleDisableButton = () => {
    if (
      this.state.previousQuestion === undefined ||
      this.state.currentQuestionIndex === 0
    ) {
      this.setState({
        previousButtonDisabled: true,
      })
    } else {
      this.setState({
        previousButtonDisabled: false,
      })
    }

    if (
      this.state.nextQuestion === undefined ||
      this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions
    ) {
      this.setState({
        nextButtonDisabled: true,
      })
    } else {
      this.setState({
        nextButtonDisabled: false,
      })
    }
  }

  endGame = () => {
    alert('Quiz has ended!')
    const { state } = this
    const playerStats = {
      score: state.score,
      numberOfQuestions: state.numberOfQuestions,
      numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
      correctAnswers: state.correctAnswers,
      wrongAnswers: state.wrongAnswers,
      fiftyFiftyUsed: 2 - state.fiftyFifty,
      hintsUsed: 5 - state.hints,
    }
    setTimeout(() => {
      console.log(playerStats)
      this.props.router.navigate('/play/quizSummary', { state: playerStats })
    }, 1000)
  }

  render() {
    const {
      currentQuestion,
      currentQuestionIndex,
      currentStage,
      currentStageIndex,
      numberOfStages,
      fiftyFifty,
      hints,
      numberOfQuestions,
      time,
    } = this.state

    return (
      <Fragment>
        <Helmet>
          <title>SQL Injection Scenario</title>
        </Helmet>
        <Fragment>
          <audio ref={this.correctSound} src={correctNotification}></audio>
          <audio ref={this.wrongSound} src={wrongNotification}></audio>
          <audio ref={this.buttonSound} src={buttonSound}></audio>
        </Fragment>
        <div className="questions">
          <h2>SQL Injection Scenario</h2>
          <h3>{currentStage.stage}</h3>
          <div className="stages-container">
            <p onClick={this.handleOptionClick} className="stage">
              {currentStage.stage}
            </p>
          </div>
          <div className="lifeline-container">
            <p>
              <span
                onClick={this.handleFiftyFifty}
                className="Phone Icon" 
              > <LiveHelpIcon color="primary" />
                <span className="lifeline">{fiftyFifty}</span>
              </span>
            </p>
            <p>
              <span
                onClick={this.handleHints}
                className="Hint Icon"
              > <PhoneIcon color="primary" />
                <span className="lifeline">{hints}</span>
              </span>
            </p>
          </div>
          <div className="timer-container">
            <p>
              <span className="left" style={{ float: 'left' }}>
                {currentQuestionIndex + 1} of {numberOfQuestions}
              </span>
              <span
                className={classnames('right valid', {
                  warning: time.distance <= 120000,
                  invalid: time.distance < 30000,
                })}
              >
                {time.minutes}:{time.seconds}
                <span className="Time Icon">
                  <AccessTimeIcon />
                </span>
              </span>
            </p>
          </div>
          <h5>{currentQuestion.question}</h5>
          <div className="options-container">
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionA}
            </p>
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionB}
            </p>
          </div>
          <div className="options-container">
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionC}
            </p>
            <p onClick={this.handleOptionClick} className="option">
              {currentQuestion.optionD}
            </p>
          </div>

          <div className="button-container">
            <button
              className={classnames('', {
                disable: this.state.previousButtonDisabled,
              })}
              id="previous-button"
              onClick={this.handleButtonClick}
            >
              Previous
            </button>
            <button
              className={classnames('', {
                disable: this.state.nextButtonDisabled,
              })}
              id="next-button"
              onClick={this.handleButtonClick}
            >
              Next
            </button>
            <button id="quit-button" onClick={this.handleButtonClick}>
              Quit
            </button>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Play)
