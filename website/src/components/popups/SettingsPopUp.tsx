import React, { useRef, useState } from 'react'

const componentId = 'settings-popup';

const SettingsPopUp = ({ open, onClose }: any) => {
  const [listOpen, setListOpen] = useState(false)
  const dropDownRef = useRef<HTMLDivElement>(null)
  const handleDropDownFocus = (state: boolean) => {
    setListOpen(!state)
  }
  const handleClickOutside = (e: any) => {
    if (listOpen && !dropDownRef.current?.contains(e.target as Node))
      setListOpen(false)
  }

  window.addEventListener('click', handleClickOutside)

  if (!open) return null
  return (
    <div className="popup" data-testid={componentId}>
      <h1>Settings</h1>
      <button className="close-btn" onClick={onClose} data-testid={`${componentId}-close-button`}>
        X
      </button>
      <div className="dropDownContainer" ref={dropDownRef}>
        <button
          className="dropdown-btn"
          onClick={(e) => handleDropDownFocus(listOpen)}
        >
          Pick Text Size
        </button>
        {listOpen && (
          <ul>
            <li>Small</li>
            <li>Medium</li>
            <li>Large</li>
          </ul>
        )}
      </div>
      <div>
        <label>
          <input type="checkbox" />
          Text to Speech
        </label>
      </div>
    </div>
  )
}

export default SettingsPopUp
