import { useState } from 'react'
import PopUp from './PopUp'
import PopUpButton from './PopUpButton'
import BackendService from '../../services/backend-service'
import toast, { Toaster } from 'react-hot-toast'

const DeleteScenarioPopUp = ({ open, onClose }: any) => {
  if (!open) return null

  const [checkValue, setCheckValue] = useState('')
  const [titleValue, setTitleValue] = useState('')

  const expected = 'permanently delete'
  const disabled = expected !== checkValue || titleValue === ''

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value)
  }

  const handleChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckValue(e.target.value)
  }

  const handleClick = async () => {
    await BackendService.deleteScenario(titleValue).then((deleteSuccessful) => {
      console.log(deleteSuccessful)
      onClose()
    }).catch((err) => {
      toast.error(err.message)
    })
  }

  return (
    <PopUp
      id={'delete-scenario-popup'}
      title="Delete Scenario"
      onClose={onClose}
    >
      <Toaster />
      <div className="PopUpText">
        <p>
          Enter the <i>title</i> of the scenario which you want to delete.*
        </p>
        <input onChange={handleChangeTitle}></input>
        <br />
        <p>
          To confirm enter <i>permanently delete</i> into the below text box.
        </p>
        <input onChange={handleChangeCheck}></input>
        <br />
        <p>*Deleting is permenant and cannot be undone</p>
      </div>
      <PopUpButton
        id="close"
        text={'Proceed'}
        onClose={handleClick}
        disabled={disabled}
      />
    </PopUp>
  )
}

export default DeleteScenarioPopUp
