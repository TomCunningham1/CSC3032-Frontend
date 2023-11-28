import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/Register'
import App from '../App'
import Play from '../components/quiz/Play'
import QuizInstructions from '../components/quiz/QuizInstructions'
import QuizSummary from '../components/quiz/QuizSummary'
import Data from '../components/quiz/Test'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/home',
    element: <>Home</>,
  },
  {
    path: '/play/instructions',
    element: <QuizInstructions />
  },
  {
    path: '/play/quiz',
    element: <Play />
  },
  {
    path: 'play/quizSummary',
    element: <Data />
  }
])

export default router
