import React from "react";
import WordContainer from "../../container/WordContainer";
import { GAP_VIEW_HEIGHT } from "../../lib/constant";
import { WordItem } from "../../model/api/Word";
import { StyledPageBody } from "../../styled/Common";
import { StyledLargeMenu } from "../../styled/Text";
//import Layout from "../../components/Layout";

interface Props {
  word: WordItem
}

const WordPage = ({ word }: Props) => {
  console.log("[WordWrite] start...");
  return (
    <StyledPageBody>
      <StyledLargeMenu>단어</StyledLargeMenu>
      <WordContainer style={{ marginTop: GAP_VIEW_HEIGHT }} />
    </StyledPageBody>
  );
};

export default WordPage;
