import React, { createContext, useCallback, useState } from "react";
import { TotalCountResult2 } from "../../lib/api/@types";
import * as wordAPI from "../../lib/api/Word";
import { WordItem } from "../../model/api/Word";
import { IWordListContext } from "./@types";

const defaultContext: IWordListContext = {
  getWordList: () => { },
  words: undefined,
  pagination: undefined
};
const WordListContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const WordListContextProvider = ({ children }: Props) => {
  const [words, setWords] = useState<Array<WordItem>>();
  const [pagination, setPagination] = useState<TotalCountResult2>()
  //여기 어떻게? 0으로> 셋팅?
  const [totalItemCount, setTotalItemCount] = useState()

  const getWordList = useCallback((sortType: number, page: number, keyword: string) => {
    console.log(`getWordList.. page: ${page}!`)
    // api call
    wordAPI.wordList({
      sortType,
      page,
      keyword
    }).then(data => {
      console.log(JSON.stringify(data))
      setWords(data.item)
      setPagination(data.pagination)
    })
  }, [])

  return (
    <WordListContext.Provider
      value={{
        getWordList,
        words,
        pagination
      }}>
      {children}
    </WordListContext.Provider>
  );
};

export { WordListContextProvider, WordListContext };
