import React, { createContext, useCallback, useState } from "react";
import { getSampleWordDetail, WordDetail } from "../../model/api/Word";
import { IWordDetailContext } from "./@types";

const defaultContext: IWordDetailContext = {
  getWordDetail: (id: string) => { },
  wordDetail: undefined,
  setWordDetail: () => { }
};
const WordDetailContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

// const initValue: WordDetail = {
//   name: '',
//   level: 0,
//   point: 0,
//   description: 'this word is easy',
//   synonyms: new Array('car', 'texi')
// }

const WordDetailContextProvider = ({ children }: Props) => {
  const [wordDetail, setWordDetail] = useState<WordDetail>()

  const getWordDetail = useCallback((id: string) => {
    console.log(`id is ${id}`)
    // api call
    const result = getSampleWordDetail();
    setWordDetail(result);
  }, [])

  return (
    <WordDetailContext.Provider
      value={{
        getWordDetail,
        wordDetail,
        setWordDetail
      }}>
      {children}
    </WordDetailContext.Provider>
  );
};

export { WordDetailContextProvider, WordDetailContext };
