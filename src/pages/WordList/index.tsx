import { RouteComponentProps } from "react-router";
import '../../App.css'
import WordListContainer from "../../container/WordListContainer";
import { StyledActionButton } from "../../styled/Button";
import { StyledPageBody } from "../../styled/Common";
import { StyledLargeMenu } from "../../styled/Text";

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
