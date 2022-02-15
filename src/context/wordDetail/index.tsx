import React, { createContext, useCallback, useState } from "react";
import * as wordAPI from "../../lib/api/Word";
import { BaseWord, WordDetail, WordUpdate } from "../../model/api/Word";
import { IWordDetailContext } from "./@types";

const defaultContext: IWordDetailContext = {
  getWordDetail: (id: number) => { },
  getWordUpdate: (id: number) => { },
  updateWordDetail: (id: number, word: BaseWord, callback: () => void) => { },
  createWordDetail: (word: BaseWord, callback: () => void) => { },
  wordDetail: undefined,
  wordUpdate: undefined
};
const WordDetailContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const WordDetailContextProvider = ({ children }: Props) => {
  const [wordDetail, setWordDetail] = useState<WordDetail>()
  const [wordUpdate, setWordUpdate] = useState<WordUpdate>()

  const getWordDetail = useCallback((id: number) => {
    console.log('getWordDetail...')
    // api call
    wordAPI.wordDetail(id)
      .then(data => {
        console.log(JSON.stringify(data))
        setWordDetail(data)
      })
  }, [])

  const getWordUpdate = useCallback((id: number) => {
    console.log('getWordUpdate...')
    // api call
    wordAPI.wordUpdate(id)
      .then(data => {
        console.log(JSON.stringify(data))
        setWordUpdate(data)
      })
  }, [])

  const updateWordDetail = useCallback((id: number, word: BaseWord, callback: () => void) => {
    console.log('updateWordDetail...')
    // api call
    wordAPI.updateWordDetail(id, word)
      .then(data => {
        console.log('update complete!', JSON.stringify(data))
      })
    callback()
  }, [])

  const createWordDetail = useCallback((word: BaseWord, callback: () => void) => {
    console.log('createWordDetail...')
    // api call
    wordAPI.createWordDetail(word)
      .then(data => {
        console.log('create complete', JSON.stringify(data))
      }).catch(error => {
        console.log(JSON.stringify(error))
      })
  }, [])

  return (
    <WordDetailContext.Provider
      value={{
        getWordDetail,
        getWordUpdate,
        createWordDetail,
        updateWordDetail,
        wordDetail,
        wordUpdate
      }}>
      {children}
    </WordDetailContext.Provider>
  );
};

export { WordDetailContextProvider, WordDetailContext };
