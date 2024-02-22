import { useContext, useState } from 'react'
import PopUp from './PopUp'
import PopUpButton from './PopUpButton'
import BackendService from '../../services/backend-service'
import toast, { Toaster } from 'react-hot-toast'
import { LOADIPHLPAPI } from 'dns'
import { LoadingContext } from '../LoadingContext/LoadingContext'

const ResetLeaderboardPopup = ({ open, onClose }: any) => {
  if (!open) return null

  const [value, setValue] = useState('')

  const expected = 'permanently delete'

  const disabled = expected !== value

  const { updateLoading } = useContext(LoadingContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClick = async () => {
    updateLoading(true)
    await BackendService.resetLeaderboard()
      .then(() => {
        onClose()
      })
      .catch((err) => {
        toast.error(err.message)
      })
    updateLoading(false)
  }

  return (
    <PopUp
      id={'delete-scenario-popup'}
      title="Delete Scenario"
      onClose={onClose}
    >
      <Toaster />
      <div className="PopUpText">
        This will empty the results from the database removing all user results.
        <br />
        To confirm enter <i>permanently delete</i> into the below text box.
        <br />
        <input onChange={handleChange}></input>
        <br />
        *Deleting is permenant and cannot be undone
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

export default ResetLeaderboardPopup
