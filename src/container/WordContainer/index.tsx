import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import InputWithLabel from "../../components/InputWithLabel";
import { WordDetailContext, WordDetailContextProvider } from "../../context/wordDetail";
import { IWordDetailContext } from "../../context/wordDetail/@types";
import { GAP_CONTENT_HEIGHT, GAP_VIEW_HEIGHT } from "../../lib/constant";
import ConfirmCancelView from "../../view/ConfirmCancelView";
import { produce } from 'immer'

interface Props {
  style?: React.CSSProperties
  wordId?: number
}

const WordContainer = ({ style, wordId }: Props) => {
  console.log(`[WordContainer] start... wordId : ${wordId}}`);

  const { wordDetail, setWordDetail, getWordDetail } = useContext<IWordDetailContext>(WordDetailContext);
  const [name, setName] = useState<string>()
  const [level, setLevel] = useState<number>()
  const [point, setPoint] = useState<number>()
  const [description, setDescription] = useState<string>()
  const [synonyms, setSynonyms] = useState<Array<string>>()
  const contentsImages = ['이미지1', '이미지2', '이미지3']

  useEffect(() => {
    if (wordId) {
      getWordDetail(wordId)
    }
  }, [wordId, getWordDetail])

  useEffect(() => {
    if (wordDetail) {
      setName(wordDetail.name)
      setLevel(wordDetail.level)
      setPoint(wordDetail.point)
      setDescription(wordDetail.description)
      setSynonyms(wordDetail.synonyms)
    }
  }, [wordDetail])

  const history = useHistory()
  return (
    <div style={style}>
      <div className='flex-row'>
        <InputWithLabel value={name} fontSize={30} inputWidth={200} onChange={(value) => {
          setName(value)
        }} />
        <InputWithLabel label='레벨' value={level} fontSize={16} inputWidth={50} onChange={(value) => {
          setLevel(Number(value))
        }} />
        <InputWithLabel label='포인트' value={point} fontSize={16} inputWidth={80} onChange={(value) => {
          setPoint(Number(value))
        }} />
      </div>
      <div className='flex-row' style={{ paddingTop: GAP_CONTENT_HEIGHT }}>
        {contentsImages.map((image, index) => <img key={`img-${index}`} style={{ height: 100, width: 100 }}></img>)}
      </div>
      <div className='flex-row' style={{ paddingTop: GAP_CONTENT_HEIGHT }}>
        <InputWithLabel label='설명' value={description} fontSize={16} inputWidth={200} onChange={(value) => {
          setDescription(value)
        }} />
        <InputWithLabel label='멤버2' value={description} fontSize={16} inputWidth={200} onChange={(value) => {
          setDescription(value)
        }} />
      </div>
      <div className='flex-column' style={{ paddingTop: GAP_CONTENT_HEIGHT }}>
        {synonyms?.map((item, index) => <InputWithLabel key={`synonyms-${index}`} label='유의어' value={item} fontSize={16} inputWidth={200} onChange={(value) => {
          setSynonyms(produce(synonyms, draft => {
            draft[index] = value
            console.log(draft.toString())
          }))
        }} />)}
      </div>
      <ConfirmCancelView
        style={{ marginTop: GAP_VIEW_HEIGHT, justifyContent: 'flex-end' }}
        onClickConfirm={() => {
          // api post call
        }}
        onClickCancel={() => {
          history.goBack()
        }} />
    </div>
  )
}

const ExportWordContainer = (props: any) => {
  return (
    <WordDetailContextProvider>
      <WordContainer {...props} />
    </WordDetailContextProvider>
  );
};

export default ExportWordContainer