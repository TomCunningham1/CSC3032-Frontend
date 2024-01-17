import { Fragment } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const QuizInstructions = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const toQuiz = () => {
    navigate('/test', location.state)
  }

  return (
  <Fragment>
    <Helmet>
      <title>Quiz Instructions - Quiz App</title>
    </Helmet>
    <div className="instructions container">
      <h1>How to Play Hack Attack</h1>
      <p>Ensure you read this guide from start to finish.</p>
      <ul className="browser-default" id="main-list">
        <li>
          The scenerio has a duration of 6 minutes and ends as soon the time
          ends.
        </li>
        <li>Each game consists of 5 questions.</li>
        <li>
          Each question has 4 options.
          {/* <img src= alt="Quiz App options example" /> */}
        </li>
        <li>
          Select the option which you believe answers the question most
          accurately by clicking on it.
          {/* <img src= alt="Quiz App answer example" /> */}
        </li>
        <li>
          Each game has 2 lifelines:
          <ul id="sublist">
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
        <li>Do you think you have what it takes?</li>
      </ul>
      <div>
        <span className="left">
          <Link to="/">Take me back to the main menu</Link>
        </span>
        <span className="right">
          <Link to={'/play/quiz'} state={location.state} >Play Quiz</Link>
        </span>
      </div>
    </div>
  </Fragment>
  )
}

export default QuizInstructions
