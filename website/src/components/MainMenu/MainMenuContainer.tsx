import questions from '../../questions/QuizQuestions'
import MainMenuButton from './MainMenuButton'
import { useNavigate } from 'react-router'

const MainMenuContainer = () => {
  const navigate = useNavigate()

  return (
    <div className="menu-container" data-testid={'main-menu-wrapper'}>
      Test
      {questions.map((playthrough: { title: string; questions: object }) => {
        const navigateToQuiz = () => {
          navigate('/play/instructions', { state: playthrough.questions })
        }

        return (
          <MainMenuButton
            id={playthrough.title}
            method={navigateToQuiz}
            text={playthrough.title}
          />
        )
      })}
    </div>
  )
}

export default MainMenuContainer
