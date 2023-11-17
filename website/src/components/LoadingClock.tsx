import ClockLoader from "react-spinners/ClockLoader";


interface CustomClockLoader {
    loading: boolean
}


const CustomClockLoader = ({ loading }: CustomClockLoader) => {
    return (
        <ClockLoader
            color={'#F37A24'}
            loading={loading}
            size={50}
        />
    )
}

export default CustomClockLoader;