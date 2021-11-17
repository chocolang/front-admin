import React from 'react'
import { StyledStatInput } from "../../styled/Input"

interface Props {
  style?: React.CSSProperties
  isEditMode?: boolean
  inputWidth: number
  fontSize: number
  label?: string
  value?: string | number
  onChange?: (text: string) => void
}

const InputWithLabel = ({ style, isEditMode = true, inputWidth, fontSize, label, value, onChange }: Props) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value)
  }

  return (
    <div className='flex-row' style={{ ...style, alignItems: 'center' }}>
      {label && <div style={{ fontSize, paddingLeft: 4, paddingRight: 4 }}>{`${label}`}</div>}
      <StyledStatInput
        style={{ outline: 'none', fontSize: fontSize, width: inputWidth }}
        value={value}
        readOnly={!isEditMode}
        isEditMode={isEditMode}
        onChange={handleOnChange} />
    </div>
  )
}

export default InputWithLabel;
