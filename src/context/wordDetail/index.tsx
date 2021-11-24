import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import { getSampleWordDetail, getSampleWords, updateSampleWordDetail, WordDetail, WordItem } from "../../model/api/Word";
import { IWordDetailContext } from "./@types";

const defaultContext: IWordDetailContext = {
  getWordDetail: () => { },
  updateWordDetail: (wordDetail: WordDetail, callback: () => void) => { },
  wordDetail: undefined,
};
const WordDetailContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const WordDetailContextProvider = ({ children }: Props) => {
  const refSampleWordDetails = useRef<Array<WordItem>>(getSampleWords())
  const [wordDetail, setWordDetail] = useState<WordDetail>()

  const getWordDetail = useCallback((id: string) => {
    console.log('getWordDetail...')
    // api call
    const result = getSampleWordDetail(id);
    setWordDetail(result);
  }, [])

  const updateWordDetail = useCallback((wordDetail: WordDetail, callback: () => void) => {
    console.log('updateWordDetail...')
    // api call
    updateSampleWordDetail(wordDetail)
    callback()
  }, [])

  const createWordDetail = useCallback((wordDetail: WordDetail, callback: () => void) => {
    console.log('updateWordDetail...')
    // api call

  }, [])

  return (
    <WordDetailContext.Provider
      value={{
        getWordDetail,
        updateWordDetail,
        wordDetail,
      }}>
      {children}
    </WordDetailContext.Provider>
  );
};

export { WordDetailContextProvider, WordDetailContext };
