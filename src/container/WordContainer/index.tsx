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

  enum EditModeType {
    UPDATE,
    CREATE
  }

  const history = useHistory()
  const {
    wordDetail,
    getWordDetail,
    updateWordDetail,
    createWordDetail } = useContext<IWordDetailContext>(WordDetailContext);
  const [id, setId] = useState<number>()
  const [from, setFrom] = useState<string>()
  const [to, setTo] = useState<string>('')
  const [level, setLevel] = useState<number>()
  const [point, setPoint] = useState<number>()

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
      setFrom(wordDetail.from.value)
      setTo(wordDetail.to.code)
      setLevel(wordDetail.level)
      setPoint(wordDetail.point)
      setSynonyms(wordDetail.synonyms)
    }
  }, [wordDetail])

  return (
    <div style={style}>
      <div className='flex-row'>
        <InputWithLabel label='아이디' defaultValue={id} fontSize={30} inputWidth={200} />
      </div>
      <div className='flex-row' style={{ paddingTop: GAP_CONTENT_HEIGHT }}>
        <InputWithLabel label='프롬' defaultValue={from} fontSize={30} inputWidth={200} onChange={(value) => {
          setFrom(value)
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
        <InputWithLabel label='설명' defaultValue={to} fontSize={16} inputWidth={200} onChange={(value) => {
          setTo(value)
        }} />
        <InputWithLabel label='멤버2' defaultValue={to} fontSize={16} inputWidth={200} onChange={(value) => {
          setTo(value)
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
          console.log(from, level, to, synonyms, point)
          var payload: any = {
            from: from,
            level: level,
            to: to,
            synonyms: synonyms,
            point: point
          }

          console.log('A1')
          if (wordId !== undefined) {
            updateWordDetail(wordId, payload, () => {
              alert('업데이트에 성공했습니다.')
            })
          } else {
            console.log('단어 생성! 합니다')
            createWordDetail(payload, () => {
              alert('단어 생성에 성공했습니다.')
            })
          }
          history.push('/wordList')
        }}
        onClickCancel={() => {
          history.goBack()
        }} />
    </div>
  )
}

export default WordContainer