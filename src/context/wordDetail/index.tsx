import React, { createContext, useCallback, useState } from "react";
import * as wordAPI from "../../lib/api/Word";
import { WordDetail } from "../../model/api/Word";
import { CreateWordDetail } from "../../model/binding/CreateWordDetail";
import { UpdateWordDetail } from "../../model/binding/UpdateWordDetail";
import { IWordDetailContext } from "./@types";

const defaultContext: IWordDetailContext = {
  getWordDetail: (id: string) => { },
  updateWordDetail: (id: string, wordDetail: UpdateWordDetail, callback: () => void) => { },
  createWordDetail: (wordDetail: CreateWordDetail, callback: () => void) => { },
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
    wordAPI.wordDetail(id)
      .then(data => {
        console.log(JSON.stringify(data))
        setWordDetail(data)
      })
  }, [])

  const updateWordDetail = useCallback((id: string, wordDetail: UpdateWordDetail, callback: () => void) => {
    console.log('updateWordDetail...')
    // api call
    wordAPI.updateWordDetail(id, wordDetail)
      .then(data => {
        console.log('update complete!', JSON.stringify(data))
      })
    callback()
  }, [])

  const createWordDetail = useCallback((wordDetail: CreateWordDetail, callback: () => void) => {
    console.log('createWordDetail...')
    // api call
    wordAPI.createWordDetail(wordDetail)
      .then(data => {
        console.log('create complete', JSON.stringify(data))
      })
  }, [])

  return (
    <WordDetailContext.Provider
      value={{
        getWordDetail,
        createWordDetail,
        updateWordDetail,
        wordDetail,
      }}>
      {children}
    </WordDetailContext.Provider>
  );
};

export { WordDetailContextProvider, WordDetailContext };
