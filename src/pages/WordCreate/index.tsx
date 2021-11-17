import React from "react";
import { RouteComponentProps } from "react-router";
import WordContainer from "../../container/WordContainer";
import { GAP_VIEW_HEIGHT } from "../../lib/constant";
import { StyledPageBody } from "../../styled/Common";
import { StyledLargeMenu } from "../../styled/Text";

const WordCreate = (props: RouteComponentProps) => {
  console.log("[WordCreate] start...");

  return (
    <StyledPageBody>
      <StyledLargeMenu>단어 생성</StyledLargeMenu>
      <WordContainer style={{ marginTop: GAP_VIEW_HEIGHT }} wordId={undefined} />
    </StyledPageBody>
  );
};

export default WordCreate;
