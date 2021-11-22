import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import '../../App.css'
import ExportWordContainer from "../../container/WordContainer";
import WordListContainer from "../../container/WordListContainer";
import ExportWordListContainer from "../../container/WordListContainer";
import { WordListContext, WordListContextProvider } from "../../context/wordList";
import { IWordListContext } from "../../context/wordList/@types";
import { GAP_VIEW_HEIGHT } from "../../lib/constant";
import { WordItem } from "../../model/api/Word";
import { StyledActionButton } from "../../styled/Button";
import { StyledPageBody } from "../../styled/Common";
import { StyledLargeMenu, StyledListItem, StyledListHeaderItem } from "../../styled/Text";

const WordList = (props: RouteComponentProps) => {
  console.log("[WordList] start...");
  const { history, /*location, match*/ } = props

  return (
    <StyledPageBody>
      <div className='flex-row' style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <StyledLargeMenu>단어 리스트</StyledLargeMenu>
        <div>
          <StyledActionButton onClick={() => {
            history.push('/wordCreate');
          }}>생성</StyledActionButton>
          <StyledActionButton onClick={() => {
            history.push('/wordList')
          }}>목록</StyledActionButton>
        </div>
      </div>
      <WordListContainer />
    </StyledPageBody>
  );
};

export default WordList;
