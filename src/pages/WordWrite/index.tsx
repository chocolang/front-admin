import React from "react";
import { RouteComponentProps } from "react-router";
import WordContainer from "../../container/WordContainer";
import { gapView } from "../../lib/constant";
import { StyledPageBody } from "../../styled/Common";
import { StyledLargeMenu } from "../../styled/Text";

const WordWrite = (props: RouteComponentProps) => {
  console.log("[WordWrite] start...");
  return (
    <StyledPageBody>
      <StyledLargeMenu>단어</StyledLargeMenu>
      <WordContainer style={{ marginTop: gapView }} />
    </StyledPageBody>
  );
};

export default WordWrite;
