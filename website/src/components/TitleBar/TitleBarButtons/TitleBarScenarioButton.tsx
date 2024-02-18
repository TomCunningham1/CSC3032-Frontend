import { useNavigate } from 'react-router'
import TitleBarButton from './TitleBarButton'

const TitleBarScenarioButton = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('admin-menu')
    }

  return (
    <>
      <TitleBarButton
        id={'admin-menu'}
        text={'Admin Menu'}
        method={handleClick}
      />
    </>
  )
}

export default TitleBarScenarioButton
