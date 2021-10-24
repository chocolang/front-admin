import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

interface Props {
  sideBarWidth: number;
  headerTopHeight: number;
}

const SideBar = ({ sideBarWidth, headerTopHeight }: Props) => {
  return (
    <nav
      style={{
        position: "fixed",
        width: sideBarWidth,
        top: headerTopHeight,
        left: 0,
        bottom: 0,
        backgroundColor: "gray",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <StyledMenu>
          <Link style={{ color: "blue" }} to="/">
            홈
          </Link>
        </StyledMenu>
        <StyledMenu>
          <Link style={{ color: "white" }} to="/wordList">
            단어
          </Link>
        </StyledMenu>
        <StyledMenu>
          <Link style={{ color: "white" }} to="/wordList">
            문장
          </Link>
        </StyledMenu>
        <StyledMenu>
          <Link style={{ color: "white" }} to="/more">
            더보기
          </Link>
        </StyledMenu>
      </div>
    </nav>
  );
};

export default SideBar;
