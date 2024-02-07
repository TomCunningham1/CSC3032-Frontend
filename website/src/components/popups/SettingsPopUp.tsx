import React, { useRef, useState } from 'react'
import PopUp from './PopUp';
import './PopUp.css'
import { FormControlLabel, Slider, Switch } from '@mui/material';

const componentId = 'settings-popup'

function valuetext(value: number) {
  return `${value}°C`;
}

// const SettingsPopUp = ({ open, onClose }: any) => {
//   const [listOpen, setListOpen] = useState(false)
//   const dropDownRef = useRef<HTMLDivElement>(null)
//   const handleDropDownFocus = (state: boolean) => {
//     setListOpen(!state)
//   }
//   const handleClickOutside = (e: any) => {
//     if (listOpen && !dropDownRef.current?.contains(e.target as Node))
//       setListOpen(false)
//   }

//   window.addEventListener('click', handleClickOutside)

//   if (!open) return null
//   return (
//     <div className="popup" data-testid={componentId}>
//       <h1>Settings</h1>
//       <button
//         className="close-btn"
//         onClick={onClose}
//         data-testid={`${componentId}-close-button`}
//       >
//         X
//       </button>
//       <div className="dropDownContainer" ref={dropDownRef}>
//         <button
//           className="dropdown-btn"
//           onClick={(e) => handleDropDownFocus(listOpen)}
//         >
//           Pick Text Size
//         </button>
//         {listOpen && (
//           <ul>
//             <li>Small</li>
//             <li>Medium</li>
//             <li>Large</li>
//           </ul>
//         )}
//       </div>
//       <div>
//         <label>
//           <input type="checkbox" />
//           Text to Speech
//         </label>
//       </div>
//     </div>
//   )
// }

const SettingsPopUp = ({ open, onClose }: any) => {
  let darkMode = false;
  const [value, setValue] = React.useState<number>(30);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  if (!open) return null;
  return (
    <PopUp id={componentId} title={'Settings'} onClose={onClose}>
      <div className='PopUpTextSettings'>
        <ul>
          <li>
            <FormControlLabel label={'High Contrast Mode'} control={
              <Switch />
            } />
          </li>
          <li>
            <FormControlLabel label={'Dark Mode'} control={
              <Switch />
            }/>
          </li>
          <li>Text Size
            <Slider aria-label="Volume" min={1} step={1} max={3} value={value} onChange={handleChange} />
          </li>
          <li>
          <FormControlLabel label={'Text To Speech'} control={
              <Switch />
            }/>
          </li>
          <li>
          <FormControlLabel label={'Mute'} control={
              <Switch />
            }/>
          </li>
          <li>
            <b>Volume</b>
            <Slider aria-label="Volume" min={1} step={1} max={100} value={value} onChange={handleChange} />
          </li>
        </ul>
      </div>
    </PopUp>
  )
}

export default SettingsPopUp
