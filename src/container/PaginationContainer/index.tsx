import React, { useContext } from 'react'
import { useHistory, useRouteMatch } from 'react-router';
import Pagination from '../../components/Pagination';
import { WordListContext } from '../../context/wordList';
import { IWordListContext } from '../../context/wordList/@types';
import { GAP_VIEW_HEIGHT } from '../../lib/constant';

interface Props {
    page: number
}

const PaginationContainer = ({ page }: Props) => {
    const match = useRouteMatch()
    console.log('match......', JSON.stringify(match))
    const { words, getWordList } = useContext<IWordListContext>(WordListContext);
    return (
        <Pagination style={{ marginTop: GAP_VIEW_HEIGHT }} totalPageCount={35} currentPage={page} />
    )
}

export default PaginationContainer