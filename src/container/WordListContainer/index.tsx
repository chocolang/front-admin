import React, { useContext, useEffect } from 'react'
import { RouteComponentProps, useHistory, useLocation, withRouter } from 'react-router'
import { WordListContext, WordListContextProvider } from '../../context/wordList';
import { IWordListContext } from '../../context/wordList/@types';
import { GAP_VIEW_HEIGHT } from '../../lib/constant';
import { WordItem } from '../../model/api/Word';
import { StyledListHeaderItem, StyledListItem } from '../../styled/Text';

const WordListContainer = () => {
  console.log(`[WordListContainer] start...`);
  const location = useLocation();
  const history = useHistory();

  const { words, getWordList } = useContext<IWordListContext>(WordListContext);

  useEffect(() => {
    getWordList('1');
  }, [getWordList])

  console.log(JSON.stringify(location))
  console.log(JSON.stringify(history))

  const handleOnItemClick = (item: WordItem) => {
    history.push(`/wordEdit/${item.id}`);
  }

  return (
    <div>
      <div className='flex-row' style={{ marginTop: GAP_VIEW_HEIGHT }}>
        <StyledListHeaderItem style={{ flex: 1 }}>번호</StyledListHeaderItem>
        <StyledListHeaderItem style={{ flex: 4 }}>이름</StyledListHeaderItem>
        <StyledListHeaderItem style={{ flex: 4 }}>레벨</StyledListHeaderItem>
        <StyledListHeaderItem style={{ flex: 5 }}>설명</StyledListHeaderItem>
      </div>

      <div className='flex-column' style={{ marginTop: GAP_VIEW_HEIGHT }}>
        {words?.map((item) => WordItemView(item, handleOnItemClick))}
      </div>


    </div>
  )
}

const WordItemView = (item: WordItem, onItemClick?: (item: WordItem) => void) => {
  const handleOnClick = () => {
    console.log('clicked!', item.name)
    onItemClick && onItemClick(item)
  }
  return (
    <div className='flex-row' key={`word-item-${item.id}`} onClick={handleOnClick}>
      <StyledListItem style={{ flex: 1 }}>{item.id}</StyledListItem>
      <StyledListItem style={{ flex: 4 }}>{item.name}</StyledListItem>
      <StyledListItem style={{ flex: 4 }}>{item.level}</StyledListItem>
      <StyledListItem style={{ flex: 5 }}>{item.description}</StyledListItem>
    </div>
  );
};

export default (
  <div>ddd</div>
)

// export default () => {
//   return (
//     <WordListContextProvider>
//       <WordListContainer />
//     </WordListContextProvider>
//   );
// };

//export default WordListContainer

// export default () => {
//   return (
//     <WordListContextProvider>
//       <WordListContainer />
//     </WordListContextProvider>
//   )
// }

// export default (
//   <WordListContextProvider>
//     <WordListContainer/>
//   </WordListContextProvider>
// );