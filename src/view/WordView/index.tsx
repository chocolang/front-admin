import React from "react";
import InputWithLabel from "../../components/InputWithLabel";
import { GAP_CONTENT_HEIGHT } from "../../lib/constant";
import { WordItem } from "../../model/api/Word";

const contentsImages = ['이미지1', '이미지2', '이미지3']

interface Props {
  style?: React.CSSProperties
  word: WordItem
}

const WordView = ({ style }: Props) => {
  console.log("[WordView] start...");

  return (
    <div style={{ ...style, border: '1px solid purple' }}>

    </div >
  )
}

export default WordView