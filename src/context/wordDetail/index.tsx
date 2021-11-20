import React, { createContext, useCallback, useState } from "react";
import { getSampleWordDetail, WordDetail } from "../../model/api/Word";
import { IWordDetailContext } from "./@types";

const defaultContext: IWordDetailContext = {
  getWordDetail: () => { },
  postWordDetail: (wordDetail: WordDetail, callback: () => void) => { },
  wordDetail: undefined,
};
const WordDetailContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const WordDetailContextProvider = ({ children }: Props) => {
  const [wordDetail, setWordDetail] = useState<WordDetail>()

  const getWordDetail = useCallback((id: string) => {
    console.log('getWordDetail...')
    // api call
    const result = getSampleWordDetail(id);
    setWordDetail(result);
  }, [])

  const postWordDetail = useCallback((wordDetai: WordDetail, callback: () => void) => {
    console.log('postWordDetail...')
    // api call
    callback()
  }, [])

  return (
    <WordDetailContext.Provider
      value={{
        getWordDetail,
        postWordDetail,
        wordDetail,
      }}>
      {children}
    </WordDetailContext.Provider>
  );
};

export { WordDetailContextProvider, WordDetailContext };
