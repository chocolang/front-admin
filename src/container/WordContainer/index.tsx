import React from "react";
import { useHistory } from "react-router";
import { gapView } from "../../lib/constant";
import ConfirmCancelView from "../../view/ConfirmCancelView";
import WordView from "../../view/WordView";

interface Props {
  style?: React.CSSProperties
}

const WordContainer = ({ style }: Props) => {
  console.log("[WordContainer] start...");

  const history = useHistory()
  return (
    <div style={style}>
      <WordView />
      <ConfirmCancelView
        style={{ marginTop: gapView, justifyContent: 'flex-end' }}
        onClickConfirm={() => {
          // api post call
        }}
        onClickCancel={() => {
          history.goBack()
        }} />
    </div>
  )
}

export default WordContainer