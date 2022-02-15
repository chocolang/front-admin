import React from 'react'
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties
  pageSize: number,
  currentPage: number
  totalItemCount: number,
  onClick: (page: number) => void
  onClickPrev: () => void
  onClickNext: () => void
}

const StyledPaginationButton = styled.div< { index: number, current: number }>`
  margin-left: ${(props) => props.index === 1 ? 0 : 16}px;
  padding: 4px;
  border: ${(props) => props.current === props.index ? '1px solid red' : '1px solid yellow'};
  font-size: 16px;
`
const StyledPreNextButton = styled.div`
  padding: 4px;
  margin-left: 4px;
  margin-right: 4px;
`

const Pagination = ({ style, pageSize, totalItemCount, currentPage, onClick, onClickNext, onClickPrev }: Props) => {
  var start = Math.floor((currentPage - 1) / pageSize) * pageSize + 1
  var totalPageCount = Math.ceil(totalItemCount / pageSize)
  var lastCnt = totalPageCount % 10
  var lastStart = (Math.floor(totalPageCount / 10) * 10) + 1
  var cnt = (start === lastStart) ? lastCnt : 10

  console.log('currentPage:', currentPage)
  console.log('totalItemCount:', totalItemCount)
  console.log('totalPageCount:', totalPageCount)
  console.log('start:', start)
  console.log('lastCnt:', lastCnt)
  console.log('lastStart:', lastStart)
  console.log('cnt:', cnt)

  const range = Array.from(new Array(cnt), (_, key) => key + start)
  return (
    <div className='flex-row' style={{ ...style, justifyContent: 'center' }}>
      {(currentPage > 10) && <StyledPreNextButton onClick={onClickPrev}>이전</StyledPreNextButton>}
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
      {totalPageCount !== currentPage && <StyledPreNextButton onClick={onClickNext}>다음</StyledPreNextButton>}
    </div>
  )
}
export default Pagination