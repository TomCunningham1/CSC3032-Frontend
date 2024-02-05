import ClockLoader from 'react-spinners/ClockLoader'
import '../../styles/styles.scss'
import '../../App.css'

interface CustomClockLoaderInterface {
  loading: boolean
}

const CustomClockLoader = ({ loading }: CustomClockLoaderInterface) => {
  return <div className="background" > <ClockLoader color={'#F37A24'} loading={loading} size={50}/> </div>
}

export default CustomClockLoader
