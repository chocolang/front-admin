import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeToken } from "../../modules/auth";

const StyledHeader = styled.div`
  position: fixed;
  height: 50px;
  width: 100%;
  top: 0;
  background-color: #00aaff;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const Header = () => {
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <StyledContent>
        <div style={{ color: "white", fontWeight: "bold" }}>초코랭 어드민</div>
        <nav>
          <button
            onClick={() => {
              dispatch(changeToken(null));
            }}
          >
            로그아웃
          </button>
        </nav>
      </StyledContent>
    </StyledHeader>
  );
};

export default Header;
