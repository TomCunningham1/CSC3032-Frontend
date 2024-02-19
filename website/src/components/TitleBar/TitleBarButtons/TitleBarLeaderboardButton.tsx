import { useNavigate } from 'react-router'
import TitleBarButton from './TitleBarButton'

const TitleBarLeaderboardButton = () => {
  const navigate = useNavigate()

  const onClickLeaderboard = () => {
    navigate('/leaderboard')
  }

  return (
    <TitleBarButton
      id={'leaderboard'}
      text={'Leaderboard'}
      method={onClickLeaderboard}
    />
  )
}

export default TitleBarLeaderboardButton
