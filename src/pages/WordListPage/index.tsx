import { RouteComponentProps } from "react-router";
import qs from 'qs';
import '../../App.css'
import PaginationContainer from "../../container/PaginationContainer";
import WordListContainer from "../../container/WordListContainer";
import { WordListContextProvider } from "../../context/wordList";
import { StyledActionButton } from "../../styled/Button";
import { StyledPageBody } from "../../styled/Common";
import { StyledLargeMenu } from "../../styled/Text";

const Page = (props: RouteComponentProps) => {
  console.log("[WordList] start...");
  const { history, location } = props

  const { page = '1' } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  })

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
      <PaginationContainer path={'/wordList'} page={parseInt(page as string, 10)} />
    </StyledPageBody>
  );
};

const WordListPage = (props: any) => {
  return (
    <WordListContextProvider>
      <Page {...props} />
    </WordListContextProvider>
  );
}

export default WordListPage;
