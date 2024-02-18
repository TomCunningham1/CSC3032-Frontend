import { useEffect, useState } from 'react'
import questions from '../../questions/QuizQuestions'
import MainMenuButton from './MainMenuButton'
import { useNavigate } from 'react-router'
import BackendService from '../../services/backend-service'
import LoadingClock from '../LoadingClock/LoadingClock'

const MainMenuContainer = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [scenarios, setScenarios] = useState([])

  useEffect(() => {
    const getScenarios = async () => {
      const scenarios = await BackendService.getAllScenarios()
      setScenarios(scenarios.data)
      setLoading(false)
    }
    getScenarios()
  }, [])

  return (
    <>
      {loading ? (
        <LoadingClock />
      ) : (
        <div className="menu-container" data-testid={'main-menu-wrapper'}>
          {scenarios.map((playthrough) => {
            const navigateToQuiz = async () => {
              setLoading(true)
              const response = await BackendService.readScenario(playthrough)
              navigate('/play/instructions', {
                state: {
                  questions: response.data.questions,
                  title: playthrough,
                },
              })
            }

            return (
              <MainMenuButton
                id={playthrough}
                method={navigateToQuiz}
                text={playthrough}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

export default MainMenuContainer
