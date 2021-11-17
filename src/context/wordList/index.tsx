import React, { createContext, useCallback, useState } from "react";
import { getSampleWords, WordItem } from "../../model/api/Word";
import { IWordListContext } from "./@types";

const defaultContext: IWordListContext = {
  getWordList: (id: string) => { },
  words: undefined,
};
const WordListContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const WordListContextProvider = ({ children }: Props) => {
  const [words, setWords] = useState<Array<WordItem>>();

  const getWordList = useCallback((id: string) => {
    console.log(`id is ${id}`)
    // api call
    const result = getSampleWords();
    setWords(result);
  }, [])

  return (
    <WordListContext.Provider
      value={{
        getWordList,
        words,
      }}
    >
      {children}
    </WordListContext.Provider>
  );
};

export { WordListContextProvider, WordListContext };
