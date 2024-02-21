import { useState } from "react"
import ViewScenarioPopUp from "../../popups/ViewScenarioPopUp"
import AdminOptionButton from "./AdminOptionButton"

const ViewScenarioButton = ({ setScenario }: any) => {
    const [openPopup, setOpenPopup] = useState(false)
  
    return (
      <>
        <AdminOptionButton
          id="view-scenario"
          title="View Scenario"
          method={() => {
            setOpenPopup(true)
          }}
        />
        <ViewScenarioPopUp
          open={openPopup}
          setScenario={setScenario}
          onClose={() => {
            setOpenPopup(false)
          }}
        />
      </>
    )
  }

  
  export default ViewScenarioButton