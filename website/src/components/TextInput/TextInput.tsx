import { useState } from 'react'

interface TextInputInterface {
  onChange: (arg: string) => void
  label: string
  placeholder: string
  id: string
  type: string
}

const TextInput = ({
  onChange,
  label,
  placeholder,
  id,
  type,
}: TextInputInterface) => {
  const [data, setData] = useState('')

  const handleOnChange = (e: any) => {
    setData(e.target.value)
    onChange(e.target.value)
  }
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        value={data}
        onChange={handleOnChange}
        type={type || 'text'}
        placeholder={placeholder}
        id={id}
        name={id}
      />
    </>
  )
}
