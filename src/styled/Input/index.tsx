import styled, { css } from "styled-components";

export const StyledStatInput = styled.input< { isEditMode: boolean }>`
  ${props => (props.isEditMode === false) && css`
    border-style: none;
  `}
  text-align: center;
`