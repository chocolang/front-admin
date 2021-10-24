import React from 'react'
import { StyledStatInput } from "../../styled/Input"

interface Props {
  style?: React.CSSProperties
  isEditMode: boolean
  inputWidth: number
  fontSize: number
  label?: string
  value?: string | number
}

const InputWithLabel = ({ style, isEditMode, inputWidth, fontSize, label, value }: Props) => {
  return (
    <div className='flex-row' style={{ ...style, alignItems: 'center' }}>
      {label && <div style={{ fontSize, paddingLeft: 4, paddingRight: 4 }}>{`${label}`}</div>}
      <StyledStatInput
        style={{ outline: 'none', fontSize: fontSize, width: inputWidth }}
        value={value}
        readOnly={!isEditMode}
        isEditMode={isEditMode} />
    </div>
  )
}

export default InputWithLabel;
