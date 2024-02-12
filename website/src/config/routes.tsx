import { createBrowserRouter } from 'react-router-dom'
import Play from '../components/quiz/Play'
import QuizInstructions from '../components/quiz/QuizInstructions'
import QuizSummary from '../components/quiz/QuizSummary'
import Home from '../pages/Home'
import Leaderboard from '../pages/Leaderboard'
import TitleBar from '../components/TitleBar/TitleBar'
import AdminLogin from '../pages/AdminLogin'
import AdminMenu from '../pages/AdminMenu'
import AdminScenarioEditor from '../pages/AdminScenarioEditor'

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
      {
        path: '/admin-login',
        element: <AdminLogin />
      },
      {
        path: 'admin-menu',
        element: <AdminMenu />
      },
      {
        path: 'admin-scenario',
        element: <AdminScenarioEditor />
      }
    ],
  },
])

export default router
