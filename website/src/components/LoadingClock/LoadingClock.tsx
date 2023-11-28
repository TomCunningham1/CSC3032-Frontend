import ClockLoader from 'react-spinners/ClockLoader'

interface CustomClockLoaderInterface {
  loading: boolean
}

const CustomClockLoader = ({ loading }: CustomClockLoaderInterface) => {
  return <ClockLoader color={'#F37A24'} loading={loading} size={50} />
}

export default CustomClockLoader
