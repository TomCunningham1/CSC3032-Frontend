import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Play from '../components/quiz/Play'
import QuizInstructions from '../components/quiz/QuizInstructions'
import QuizSummary from '../components/quiz/QuizSummary'
import Home from '../pages/Home'
import Leaderboard from '../pages/Leaderboard'
import TitleBar from '../components/TitleBar/TitleBar'
import AdminLogin from '../pages/AdminLogin'
import AdminMenu from '../pages/AdminMenu'
import { AccountContext } from '../auth/Account'
import { useContext } from 'react'

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    isPrivate: false,
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    element: <Leaderboard />,
    isPrivate: true,
  },
]

const RenderRoutes = () => {
  const { getSession, logout } = useContext(AccountContext)

  const authenticated = getSession().then((session) => true)

  return routes.map((r, i) => {
    if (r.isPrivate && !authenticated) {
      return
    }
    return {
      path: r.path,
      element: r.element,
    }
  })
}

console.log(RenderRoutes())

const router = createBrowserRouter([
  {
    path: '/',
    element: <TitleBar />,
    children: [],

    // {
    //   path: '/',
    //   element: <Home />,
    // },
    // {
    //   path: '/play/instructions',
    //   element: <QuizInstructions />,
    // },
    // {
    //   path: '/play/quiz',
    //   element: <Play />,
    // },
    // {
    //   path: 'play/quizSummary',
    //   element: <QuizSummary />,
    // },
    // {
    //   path: '/leaderboard',
    //   element: <Leaderboard />,
    // },
    // {
    //   path: '/admin-login',
    //   element: <AdminLogin />,
    // },
    // {
    //   path: 'admin-menu',
    //   element: <AdminMenu />,
    // },
    // {
    //   path: 'admin-scenario',
    //   element: <AdminScenarioEditor />,
    // },,
  },
])

export default router

// {
//   path: '/',
//   element: <Home />,
// },
// {
//   path: '/play/instructions',
//   element: <QuizInstructions />,
// },
// {
//   path: '/play/quiz',
//   element: <Play />,
// },
// {
//   path: 'play/quizSummary',
//   element: <QuizSummary />,
// },
// {
//   path: '/leaderboard',
//   element: <Leaderboard />,
// },
// {
//   path: '/admin-login',
//   element: <AdminLogin />,
// },
// {
//   path: 'admin-menu',
//   element: <AdminMenu />,
// },
// {
//   path: 'admin-scenario',
//   element: <AdminScenarioEditor />,
// },
