import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register'
import Play from '../components/quiz/Play'
import QuizInstructions from '../components/quiz/QuizInstructions'
import QuizSummary from '../components/quiz/QuizSummary'
import Data from '../components/quiz/Test'
import Home from '../pages/Home'
import App from '../App'
import TitleBar from '../components/TitleBar/TitleBar'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TitleBar>
        <App />
      </TitleBar>
    ),
  },
  {
    path: '/register',
    element: (
      <TitleBar>
        <Register />
      </TitleBar>
    ),
  },
  {
    path: '/home',
    element: (
      <TitleBar>
        <Home />
      </TitleBar>
    ),
  },
  {
    path: '/play/instructions',
    element: (
      <TitleBar>
        <QuizInstructions />
      </TitleBar>
    ),
  },
  {
    path: '/play/quiz',
    element: (
      <TitleBar>
        <Play />
      </TitleBar>
    ),
  },
  {
    path: 'play/quizSummary',
    element: (
      <TitleBar>
        <QuizSummary />
      </TitleBar>
    ),
  },
])

export default router
