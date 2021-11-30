import React, { createContext, useCallback, useState } from "react";
import * as wordAPI from "../../lib/api/Word";
import { WordItem } from "../../model/api/Word";
import { IWordListContext } from "./@types";

const defaultContext: IWordListContext = {
  getWordList: () => { },
  words: undefined,
};
const WordListContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const WordListContextProvider = ({ children }: Props) => {
  const [words, setWords] = useState<Array<WordItem>>();

  const getWordList = useCallback((sortType: number, page: number, keyword: string) => {
    console.log(`getWordList.. page: ${page}!`)
    // api call
    wordAPI.wordList({
      sortType,
      page,
      keyword
    }).then(data => {
      console.log(JSON.stringify(data))
      setWords(data)
    })
  }, [])

  return (
    <WordListContext.Provider
      value={{
        getWordList,
        words,
      }}>
      {children}
    </WordListContext.Provider>
  );
};

export { WordListContextProvider, WordListContext };
