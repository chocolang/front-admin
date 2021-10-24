import styled, { css } from "styled-components";
import { ChocoColor } from "../color";

export const StyledActionButton = styled.button`
  width: 80px;
  height: 30px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  background-color: ${ChocoColor.secondrayColor};
  border-color: transparent;
  border-radius: 4px;

  & + & {
    margin-left: 5px;
  }
  
  ${css`
    :hover {
      color: ${ChocoColor.secondrayColor};
      background-color: white;
    }
    :active {
      color: white;
      background-color: ${ChocoColor.activeColor};
    }
  `}
`;

export const StyledConfirmCancelButton = styled(StyledActionButton)`
  background-color: ${ChocoColor.confirmCancelColor};

  ${css`
    :hover {
      color: ${ChocoColor.confirmCancelColor};
      background-color: white;
    }
    :active {
      color: white;
      background-color: ${ChocoColor.activeColor};
    }
  `}
`

