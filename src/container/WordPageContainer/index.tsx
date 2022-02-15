import React, { useContext, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import InputWithLabel from "../../components/InputWithLabel";
import { WordDetailContext } from "../../context/wordDetail";
import { IWordDetailContext } from "../../context/wordDetail/@types";
import { GAP_CONTENT_HEIGHT, GAP_VIEW_HEIGHT } from "../../lib/constant";
import { StyledCol, StyledRow } from "../../styled/Common";
import styled, { css } from "styled-components";

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
            fontSize={20}
            inputWidth={100} />
          <InputWithLabel
            style={{ marginLeft: 10 }}
            label="Lv"
            defaultValue={wordDetail.level}
            isEditMode={true}
            fontSize={20}
            inputWidth={100} />
          <InputWithLabel
            style={{ marginLeft: 10 }}
            label="Point"
            defaultValue={wordDetail.point}
            isEditMode={false}
            fontSize={20}
            inputWidth={100} />
        </StyledGroupLarge>
        <StyledGroupLarge>
          <InputWithLabel
            label="From"
            defaultValue={wordDetail.from}
            isEditMode={false}
            fontSize={30}
            inputWidth={200} />
          <InputWithLabel
            label="To"
            defaultValue={wordDetail.to}
            isEditMode={false}
            fontSize={30}
            inputWidth={200} />
        </StyledGroupLarge>
        <StyledGroupLarge style={{ marginBottom: 0 }}>
          <InputWithLabel
            label="To"
            defaultValue={wordDetail.to}
            isEditMode={false}
            fontSize={30}
            inputWidth={200} />
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