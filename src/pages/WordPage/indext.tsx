import React from "react";
import { RouteComponentProps } from "react-router-dom";
import WordContainer from "../../container/WordContainer";
import WordPageContainer from "../../container/WordPageContainer";
import { WordDetailContextProvider } from "../../context/wordDetail";
import { GAP_VIEW_HEIGHT } from "../../lib/constant";
import { StyledPageBody } from "../../styled/Common";
import { StyledLargeMenu } from "../../styled/Text";
//import Layout from "../../components/Layout";

const Page = (props: RouteComponentProps) => {
  console.log("[WordPage] start...");
  const { history, location, match } = props
  const { id } = match.params as { id: string }

  return (
    <StyledPageBody>
      <StyledLargeMenu>단어</StyledLargeMenu>
      <WordPageContainer style={{ marginTop: GAP_VIEW_HEIGHT }} wordId={parseInt(id)} />
    </StyledPageBody>
  );
};

const WordPage = (props: any) => {
  console.log('------------', JSON.stringify(props, null, 4))
  return (
    <WordDetailContextProvider>
      <Page {...props} />
    </WordDetailContextProvider>
  );
}

export default WordPage;
