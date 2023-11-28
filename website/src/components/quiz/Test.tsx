import { useLocation } from "react-router"
import QuizSummary from "./QuizSummary";

const Data = () => {
    const {state} = useLocation()
    console.log(state);
    return (
        <>
            <QuizSummary data={state}/>
        </>
    )
}

export default Data;