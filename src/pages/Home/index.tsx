import React from "react";
import { StyledPageBody } from "../../styled/Common";
import { StyledLargeMenu, StyledMiddleMenu } from "../../styled/Text";
//import Layout from "../../components/Layout";

const Home = () => {
  return (
    <StyledPageBody>
      <StyledLargeMenu>Summary</StyledLargeMenu>
      <StyledMiddleMenu>유저수</StyledMiddleMenu>
      <StyledMiddleMenu>단어수</StyledMiddleMenu>
      <StyledMiddleMenu>문장수</StyledMiddleMenu>
    </StyledPageBody>
  );
};

export default Home;
