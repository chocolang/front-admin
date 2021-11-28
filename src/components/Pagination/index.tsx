import React from 'react'
import styled, { css } from "styled-components";

interface Props {
  style?: React.CSSProperties
  totalPageCount: number,
  currentPage: number
}

const StyledPaginationButton = styled.div< { index: number, current: number }>`
  margin-left: ${(props) => props.index === 0 ? 0 : 16}px;
  border: ${(props) => props.current === props.index ? '1px solid red' : '1px solid yellow'};
  font-size: 16px;
`

const Pagination = ({ style, totalPageCount, currentPage }: Props) => {
  var start = Math.floor((currentPage - 1) / 10) * 10 + 1
  var end = start + 9
  var cnt = totalPageCount < end ? 10 - (end - totalPageCount) : 10

  const range = Array.from(new Array(cnt), (_, key) => key + start)
  return (
    <div className='flex-row' style={{ ...style, justifyContent: 'center' }}>
      {range.map((item, index) => {
        return (<StyledPaginationButton
          key={`pagination-${index}`}
          index={item}
          current={currentPage}>{item}</StyledPaginationButton>)
      })}
    </div>
  )
}
export default Pagination