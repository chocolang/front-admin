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
  wordId?: string
}

const WordContainer = ({ style, wordId }: Props) => {
  console.log(`[WordContainer] start... wordId : ${wordId}}`);

  enum EditModeType {
    UPDATE,
    CREATE
  }

  const history = useHistory()
  const { wordDetail, getWordDetail, updateWordDetail } = useContext<IWordDetailContext>(WordDetailContext);
  const [id, setId] = useState<string>()
  const [name, setName] = useState<string>()
  const [level, setLevel] = useState<number>()
  const [point, setPoint] = useState<number>()
  const [description, setDescription] = useState<string>('')
  const [synonyms, setSynonyms] = useState<Array<string>>()
  const contentsImages = ['이미지1', '이미지2', '이미지3']

  useEffect(() => {
    if (wordId) {
      getWordDetail(wordId)
    }
  }, [wordId, getWordDetail])

  useEffect(() => {
    if (wordDetail) {
      setId(wordDetail.id)
      setName(wordDetail.name)
      setLevel(wordDetail.level)
      setPoint(wordDetail.point)
      setDescription(wordDetail.description)
      setSynonyms(wordDetail.synonyms)
    }
  }, [wordDetail])

  return (
    <div style={style}>
      <div className='flex-row'>
        <InputWithLabel label='아이디' defaultValue={id} fontSize={30} inputWidth={200} onChange={(value) => {
          setId(value)
        }} />
      </div>
      <div className='flex-row' style={{ paddingTop: GAP_CONTENT_HEIGHT }}>
        <InputWithLabel label='이름' defaultValue={name} fontSize={30} inputWidth={200} onChange={(value) => {
          setName(value)
        }} />
        <InputWithLabel label='레벨' defaultValue={level} fontSize={16} inputWidth={50} onChange={(value) => {
          setLevel(Number(value))
        }} />
        <InputWithLabel label='포인트' defaultValue={point} fontSize={16} inputWidth={80} onChange={(value) => {
          setPoint(Number(value))
        }} />
      </div>
      <div className='flex-row' style={{ paddingTop: GAP_CONTENT_HEIGHT }}>
        {contentsImages.map((image, index) => <img key={`img-${index}`} style={{ height: 100, width: 100 }}></img>)}
      </div>
      <div className='flex-row' style={{ paddingTop: GAP_CONTENT_HEIGHT }}>
        <InputWithLabel label='설명' defaultValue={description} fontSize={16} inputWidth={200} onChange={(value) => {
          setDescription(value)
        }} />
        <InputWithLabel label='멤버2' defaultValue={description} fontSize={16} inputWidth={200} onChange={(value) => {
          setDescription(value)
        }} />
      </div>
      <div className='flex-column' style={{ paddingTop: GAP_CONTENT_HEIGHT }}>
        {synonyms?.map((item, index) => <InputWithLabel key={`synonyms-${index}`} label='유의어' defaultValue={item} fontSize={16} inputWidth={200} onChange={(value) => {
          setSynonyms(produce(synonyms, draft => {
            draft[index] = value
            console.log(draft.toString())
          }))
        }} />)}
      </div>
      <ConfirmCancelView
        style={{ marginTop: GAP_VIEW_HEIGHT, justifyContent: 'flex-end' }}
        onClickConfirm={() => {
          if (name && level && description && synonyms && point) {
            var payload: any = {
              name: name,
              level: level,
              description: description,
              synonyms: synonyms,
              point: point
            }

            if (wordId) {
              payload.id = wordId
              updateWordDetail(payload, () => {
                history.push('/wordList')
              })
            } else {
              // postWordDetail(payload, () => {
              //   history.push('/wordList')
              // })
            }
          }
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