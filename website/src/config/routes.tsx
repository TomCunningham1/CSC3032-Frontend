import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import TitleBar from '../components/TitleBar/TitleBar'
import Play from '../components/quiz/Play'
import QuizInstructions from '../components/quiz/QuizInstructions/QuizInstructions'
import QuizSummary from '../components/quiz/QuizSummary/QuizSummary'
import AdminLogin from '../pages/AdminLogin'
import AdminMenu from '../pages/AdminMenu'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { useContext } from 'react'
import { AccountContext } from '../auth/Account'
import LoadingClock from '../components/LoadingClock/LoadingClock'
import QuizContext from '../components/quiz/QuizContext/QuizContext'

interface RouteConfig {
  path: string
  element: ReactJSXElement
  isPrivate?: boolean
}

const routes: RouteConfig[] = [
  { path: '/', element: <Home /> },
  { path: '/play/instructions', element: <QuizInstructions /> },
  { path: '/play/context', element: <QuizContext /> },
  { path: '/play/quiz', element: <Play /> },
  { path: '/play/quizSummary', element: <QuizSummary /> },
  { path: '/admin-login', element: <AdminLogin /> },
  { path: '/admin-menu', element: <AdminMenu />, isPrivate: true },
]

const RenderRoutes = () => {
  const { authenticated } = useContext(AccountContext)

  return (
    <Routes>
      <Route path="/" element={<TitleBar />}>
        {routes.map((route, index) => {
          if (route.isPrivate && !authenticated) {
            return (
              <Route key={index} path={route.path} element={<LoadingClock />} />
            )
          }
          return <Route key={index} path={route.path} element={route.element} />
        })}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RenderRoutes
