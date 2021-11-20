import React, { useContext, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import '../../App.css'
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
  const { words, getWordList } = useContext<IWordListContext>(WordListContext);

  useEffect(() => {
    //이거 string 으로 path 에서 받고 pagenation 처리 시작하자
    getWordList('1');
  }, [getWordList])

  const handleOnItemClick = (item: WordItem) => {
    history.push(`/wordEdit/${item.id}`);
  }

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

      <div className='flex-row' style={{ marginTop: GAP_VIEW_HEIGHT }}>
        <StyledListHeaderItem style={{ flex: 1 }}>번호</StyledListHeaderItem>
        <StyledListHeaderItem style={{ flex: 4 }}>이름</StyledListHeaderItem>
        <StyledListHeaderItem style={{ flex: 4 }}>포인트</StyledListHeaderItem>
        <StyledListHeaderItem style={{ flex: 4 }}>레벨</StyledListHeaderItem>
        <StyledListHeaderItem style={{ flex: 5 }}>설명</StyledListHeaderItem>
      </div>

      <div className='flex-column' style={{ marginTop: GAP_VIEW_HEIGHT }}>
        {words?.map((item) => WordItemView(item, handleOnItemClick))}
      </div>
    </StyledPageBody>
  );
};

const WordItemView = (item: WordItem, onItemClick?: (item: WordItem) => void) => {
  const handleOnClick = () => {
    console.log('clicked!', item.name)
    onItemClick && onItemClick(item)
  }
  return (
    <div className='flex-row' key={`word-item-${item.id}`} onClick={handleOnClick}>
      <StyledListItem style={{ flex: 1 }}>{item.id}</StyledListItem>
      <StyledListItem style={{ flex: 4 }}>{item.name}</StyledListItem>
      <StyledListItem style={{ flex: 4 }}>{item.name}</StyledListItem>
      <StyledListItem style={{ flex: 4 }}>{item.level}</StyledListItem>
      <StyledListItem style={{ flex: 5 }}>{item.description}</StyledListItem>
    </div>
  );
};

const ExportWordList = (props: RouteComponentProps) => {
  return (
    <WordListContextProvider>
      <WordList {...props} />
    </WordListContextProvider>
  );
};

export default ExportWordList;
