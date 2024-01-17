import { useLocation } from 'react-router'
import QuizSummary from './QuizSummary'

const Data = () => {
  // const { state } = useLocation()
  const location = useLocation()
  console.log(location.state)
  // console.log(state)
  return <>{/* {state} */}</>
}

export default Data
