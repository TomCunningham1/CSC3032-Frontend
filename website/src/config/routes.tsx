import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register'
import Play from '../components/quiz/Play'
import QuizInstructions from '../components/quiz/QuizInstructions'
import QuizSummary from '../components/quiz/QuizSummary'
import Data from '../components/quiz/Test'
import Home from '../pages/Home'
import Leaderboard from '../pages/Leaderboard'
import App from '../App'
import TitleBar from '../components/TitleBar/TitleBar'


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <TitleBar hideOptions>
      
        <App />
      </TitleBar>
    ),
  },
  {
    path: '/register',
    element: (
      <TitleBar hideOptions>
        <Register />
      </TitleBar>
    ),
  },
  {
    path: '/home',
    element: (
      <TitleBar hideOptions>
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
  {
    path: '/leaderboard',
    element: <Leaderboard />,
  },
])

export default router
