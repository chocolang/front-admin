import React, { createContext, useCallback, useState } from "react";
import { getSampleWordDetail, WordDetail } from "../../model/api/Word";
import { IWordDetailContext } from "./@types";

const defaultContext: IWordDetailContext = {
  getWordDetail: () => { },
  wordDetail: undefined,
};
const WordDetailContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const WordDetailContextProvider = ({ children }: Props) => {
  const [wordDetail, setWordDetail] = useState<WordDetail>()

  const getWordDetail = useCallback((id: number) => {
    console.log('getWordDetail...')
    // api call
    const result = getSampleWordDetail(id);
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
