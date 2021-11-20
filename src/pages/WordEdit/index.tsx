import React from "react";
import { RouteComponentProps } from "react-router";
import WordContainer from "../../container/WordContainer";
import { GAP_VIEW_HEIGHT } from "../../lib/constant";
import { StyledPageBody } from "../../styled/Common";
import { StyledLargeMenu } from "../../styled/Text";

const WordEdit = (props: RouteComponentProps) => {
  console.log("[WordWrite] start...");

  const params = props.match.params as { id: string }
  console.log('이것은 param', JSON.stringify(params))

  return (
    <StyledPageBody>
      <StyledLargeMenu>단어 수정/생성</StyledLargeMenu>
      <WordContainer style={{ marginTop: GAP_VIEW_HEIGHT }} wordId={Number(params.id)} />
    </StyledPageBody>
  );
};

export default WordEdit;
