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
      <div className='flex-row'>
        <InputWithLabel isEditMode={false} value='School' fontSize={30} inputWidth={200} />
        <InputWithLabel isEditMode={false} label='레벨' fontSize={16} inputWidth={50} />
        <InputWithLabel isEditMode={true} label='포인트' fontSize={16} inputWidth={80} />
      </div>
      <div className='flex-row' style={{ paddingTop: GAP_CONTENT_HEIGHT }}>
        {contentsImages.map(image => <img style={{ height: 100, width: 100 }}></img>)}
      </div>
      <div className='flex-row' style={{ paddingTop: GAP_CONTENT_HEIGHT }}>
        <div className='flex-column' style={{ flex: 1 }}>
          <InputWithLabel isEditMode={true} label='포인트' fontSize={16} inputWidth={200} />
          <InputWithLabel isEditMode={true} label='포인트' fontSize={16} inputWidth={200} />
        </div>
        <div className='flex-column' style={{ flex: 1 }}>
          <InputWithLabel isEditMode={true} label='포인트' fontSize={16} inputWidth={200} />
          <InputWithLabel isEditMode={true} label='포인트' fontSize={16} inputWidth={200} />
        </div>
        <div className='flex-column' style={{ flex: 1 }}>
          <InputWithLabel isEditMode={true} label='포인트' fontSize={16} inputWidth={200} />
          <InputWithLabel isEditMode={true} label='포인트' fontSize={16} inputWidth={200} />
        </div>
      </div>
    </div >
  )
}

export default WordView