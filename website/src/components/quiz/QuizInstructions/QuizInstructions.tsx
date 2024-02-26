import { Fragment } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './quiz-instructions.css'

const QuizInstructionsHeader = ({ title }: { title: string }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3 className={'text-formatting'}>How to play</h3>
    </div>
  )
}

const QuizInstructions = () => {
  const location = useLocation()

  console.log(location.state)
  console.log(location.state.questions)

  const navigate = useNavigate()

  const handleStartQuiz = () => {
    navigate('/play/context', {
      state: {
        questions: location.state.questions,
        title: location.state.title,
      },
    })
  }

  const handleReturnToMain = () => {
    navigate('/')
  }

  return (
    <Fragment>
      <div className="menu-container">
        <QuizInstructionsHeader title={location.state.title} />
        <ul className="text-formatting" id="main-list">
          <li>
            The scenerio has a duration of 6 minutes and ends as soon the time
            ends.
          </li>
          <li>Each game consists of 5 questions.</li>
          <li>Each question has 4 options.</li>
          <li>
            Select the option which you believe answerstext-indent the question
            most accurately by clicking on it.
          </li>
          <li>
            Each game has 2 lifelines:
            <ul className="text-indent">
              <li>1 50/50 Chance</li>
              <li>2 Hints</li>
            </ul>
          </li>
          <li>
            Select a 50/50 lifeline by clicking on the icon
            <span className="mdi mdi-cellphone-basic mdi-24px lifeline-icon"></span>
            will leave 2 answers for you, one right and one wrong
            {/* <img src= alt="Quiz App Fifty-Fifty example"/> */}
          </li>
          <li>
            Select a hint by clicking on the icon
            <span className="mdi mdi-puzzle mdi-24px lifeline-icon"></span>
            will remove on wrong answer and leave three answers for you
            {/* <img src= alt="Quiz App hints example" /> */}
          </li>
          <li>
            Feel free to quit the scenerio at anytime. You will be given a score
            at the end
          </li>
          <li>The timer starts as soon as the game loads.</li>
        </ul>
        <div className="quiz-button-container">
          <button className="quiz-button" onClick={handleReturnToMain}>
            Back to main menu
          </button>
          <button className="quiz-button" onClick={handleStartQuiz}>
            Start the quiz
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default QuizInstructions
