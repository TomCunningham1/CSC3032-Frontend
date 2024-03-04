import React, { useRef, useState } from 'react'
import PopUp from './PopUp'
import './PopUp.css'
import { FormControlLabel, Slider, Switch } from '@mui/material'

const componentId = 'settings-popup'

const SettingsPopUp = ({ open, onClose }: any) => {
  const [value, setValue] = React.useState<number>(30)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number)
  }

  if (!open) return null
  return (
    <PopUp id={componentId} title={'Settings'} onClose={onClose}>
      <div data-testid="settings-popup-text" className="PopUpTextSettings">
        <ul>
          <li>
            <FormControlLabel
              label={'High Contrast Mode'}
              control={<Switch />}
            />
          </li>
          <li>
            <FormControlLabel label={'Dark Mode'} control={<Switch />} />
          </li>
          <li>
            Text Size
            <Slider
              aria-label="Volume"
              min={1}
              step={1}
              max={3}
              value={value}
              onChange={handleChange}
            />
          </li>
          <li>
            <FormControlLabel label={'Text To Speech'} control={<Switch />} />
          </li>
          <li>
            <FormControlLabel label={'Mute'} control={<Switch />} />
          </li>
          <li>
            <b>Volume</b>
            <Slider
              aria-label="Volume"
              min={1}
              step={1}
              max={100}
              value={value}
              onChange={handleChange}
            />
          </li>
        </ul>
      </div>
    </PopUp>
  )
}

export default SettingsPopUp
