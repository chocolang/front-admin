import React from 'react'
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties
  totalPageCount: number,
  currentPage: number
  onClick: (page: number) => void
  onClickPrev: () => void
  onClickNext: () => void
}

const StyledPaginationButton = styled.div< { index: number, current: number }>`
  margin-left: ${(props) => props.index === 0 ? 0 : 16}px;
  border: ${(props) => props.current === props.index ? '1px solid red' : '1px solid yellow'};
  font-size: 16px;
`

const Pagination = ({ style, totalPageCount, currentPage, onClick, onClickNext, onClickPrev }: Props) => {
  var start = Math.floor((currentPage - 1) / 10) * 10 + 1
  var end = start + 9
  var cnt = totalPageCount < end ? 10 - (end - totalPageCount) : 10

  const range = Array.from(new Array(cnt), (_, key) => key + start)
  return (
    <div className='flex-row' style={{ ...style, justifyContent: 'center' }}>
      <div onClick={onClickPrev}>이전</div>
      {range.map((item, index) => {
        return (<StyledPaginationButton
          key={`pagination-${index}`}
          index={item}
          current={currentPage}
          onClick={() => {
            onClick && onClick(item)
          }}
        >{item}</StyledPaginationButton>)
      })}
      <div onClick={onClickNext}>다음</div>
    </div>
  )
}
export default Pagination