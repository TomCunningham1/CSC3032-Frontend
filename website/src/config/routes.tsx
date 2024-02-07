import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register'
import Play from '../components/quiz/Play'
import QuizInstructions from '../components/quiz/QuizInstructions'
import QuizSummary from '../components/quiz/QuizSummary'
import Home from '../pages/Home'
import Leaderboard from '../pages/Leaderboard'
import TitleBar from '../components/TitleBar/TitleBar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <TitleBar />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/play/instructions',
        element: <QuizInstructions />,
      },
      {
        path: '/play/quiz',
        element: <Play />,
      },
      {
        path: 'play/quizSummary',
        element: <QuizSummary />,
      },
      {
        path: '/leaderboard',
        element: <Leaderboard />,
      },
    ],
  },
])

export default router
