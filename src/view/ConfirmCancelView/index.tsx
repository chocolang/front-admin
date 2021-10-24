
import React from "react";
import { StyledConfirmCancelButton } from "../../styled/Button";

interface Props {
  style?: React.CSSProperties,
  onClickConfirm?: () => void
  onClickCancel?: () => void
}

const ConfirmCancelView = ({ style, onClickConfirm, onClickCancel }: Props) => {
  return (
    <div className='flex-row' style={style}>
      <StyledConfirmCancelButton onClick={() => {
        onClickConfirm && onClickConfirm()
      }} >확인</StyledConfirmCancelButton>
      <StyledConfirmCancelButton onClick={() => {
        onClickCancel && onClickCancel()
      }}>취소</StyledConfirmCancelButton>
    </div>
  )
}

export default ConfirmCancelView