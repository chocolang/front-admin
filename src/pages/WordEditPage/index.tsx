import React from "react";
import { RouteComponentProps } from "react-router";
import WordContainer from "../../container/WordContainer";
import { GAP_VIEW_HEIGHT } from "../../lib/constant";
import { StyledPageBody } from "../../styled/Common";
import { StyledLargeMenu } from "../../styled/Text";

const WordEditPage = (props: RouteComponentProps) => {
  console.log("[WordWrite] start...");
  const { id } = props.match.params as { id: string }

  return (
    <StyledPageBody>
      <StyledLargeMenu>단어 수정/생성</StyledLargeMenu>
      <WordContainer style={{ marginTop: GAP_VIEW_HEIGHT }} wordId={parseInt(id)} />
    </StyledPageBody>
  );
};

export default WordEditPage;
