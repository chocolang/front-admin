import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import InputWithLabel from "../../components/InputWithLabel";
import { WordDetailContext } from "../../context/wordDetail";
import { IWordDetailContext } from "../../context/wordDetail/@types";
import { GAP_CONTENT_HEIGHT, GAP_VIEW_HEIGHT } from "../../lib/constant";
import { StyledCol, StyledRow } from "../../styled/Common";
import styled, { css } from "styled-components";
import { ChocoFont } from "../../styled/font";

interface Props {
  style?: React.CSSProperties
  wordId?: number
}

const WordPageContainer = ({ style, wordId }: Props) => {
  console.log(`[WordPageContainer] start... wordId : ${wordId}}`);
  const location = useLocation();
  const history = useHistory();
  const {
    wordDetail,
    getWordDetail } = useContext<IWordDetailContext>(WordDetailContext);

  useEffect(() => {
    if (wordId !== undefined) {
      getWordDetail(wordId)
    }
  }, [wordId, getWordDetail])

  console.log('aaaa', JSON.stringify(wordDetail, null, 4))

  return (
    <div style={style}>
      {wordDetail && <StyledRow>
        <StyledGroupLarge style={{ marginTop: 0 }}>
          <InputWithLabel
            label="ID"
            defaultValue={wordDetail.id}
            isEditMode={false}
            fontSize={ChocoFont.subContent}
            inputWidth={100} />
          <InputWithLabel
            style={{ marginLeft: 10 }}
            label="Lv"
            defaultValue={wordDetail.level}
            isEditMode={true}
            fontSize={ChocoFont.subContent}
            inputWidth={100} />
          <InputWithLabel
            style={{ marginLeft: 10 }}
            label="Point"
            defaultValue={wordDetail.point}
            isEditMode={false}
            fontSize={ChocoFont.subContent}
            inputWidth={100} />
        </StyledGroupLarge>
        <StyledGroupLarge>
          <div style={{ backgroundColor: 'blue' }}>
            <InputWithLabel
              label={wordDetail.from.code}
              defaultValue={wordDetail.from.value}
              isEditMode={false}
              fontSize={ChocoFont.content}
              inputWidth={200} />
          </div>
          <div style={{ marginLeft: 20 }}>
            <InputWithLabel
              label={wordDetail.to.code}
              defaultValue={wordDetail.to.value}
              isEditMode={false}
              fontSize={ChocoFont.content}
              inputWidth={200} />
          </div>
        </StyledGroupLarge>
        <StyledGroupLarge style={{ marginBottom: 0 }}>
          <InputWithLabel
            label={'클래스'}
            defaultValue={wordDetail.includedClass}
            isEditMode={false}
            fontSize={ChocoFont.subContent}
            inputWidth={100} />
          <InputWithLabel
            label={'품사'}
            defaultValue={wordDetail.partsOfSpeech}
            isEditMode={false}
            fontSize={ChocoFont.subContent}
            inputWidth={100} />
        </StyledGroupLarge>
      </StyledRow>}
    </div>
  )
}

const StyledGroupLarge = styled(StyledCol)`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: yellow;
`

export default WordPageContainer