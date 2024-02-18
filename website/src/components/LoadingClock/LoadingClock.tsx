import ClockLoader from 'react-spinners/ClockLoader'
import '../../styles/styles.scss'
import '../../App.css'

const CustomClockLoader = () => {
  return (
      <ClockLoader color={'#F37A24'} loading={true} size={50} />
  )
}

export default CustomClockLoader
