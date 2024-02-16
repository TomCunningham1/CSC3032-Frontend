import { useState } from 'react'
import PopUp from './PopUp'
import PopUpButton from './PopUpButton'

const ResetLeaderboardPopup = ({ open, onClose }: any) => {
  if (!open) return null

  const [value, setValue] = useState('');

  const expected = 'permanently delete'

  const disabled = expected !== value;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    <PopUp
      id={'delete-scenario-popup'}
      title="Delete Scenario"
      onClose={onClose}
    >
      <div className="PopUpText">
        This will empty the results from the database removing all user results.
        <br />
        To confirm enter <i>permanently delete</i> into the below text box.
        <br />
        <input onChange={handleChange}></input>
        <br />
        *Deleting is permenant and cannot be undone
      </div>
      <PopUpButton id="close" text={'Proceed'} onClose={onClose} disabled={disabled} />
    </PopUp>
  )
}

export default ResetLeaderboardPopup
