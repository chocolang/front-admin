import React, { useContext } from 'react'
import qs from 'qs'
import { useHistory, useRouteMatch } from 'react-router';
import Pagination from '../../components/Pagination';
import { WordListContext } from '../../context/wordList';
import { IWordListContext } from '../../context/wordList/@types';
import { GAP_VIEW_HEIGHT } from '../../lib/constant';

interface Props {
    path: string
    page: number
}

const PaginationContainer = ({ path, page }: Props) => {
    const history = useHistory()
    const { pagination } = useContext<IWordListContext>(WordListContext);
    return pagination ? <Pagination
        style={{ marginTop: GAP_VIEW_HEIGHT }}
        pageSize={10}
        currentPage={page}
        totalItemCount={pagination.totalItemCount}
        onClick={(page) => {
            const query = qs.stringify({ page })
            history.push(`${path}?${query}`)
        }}
        onClickPrev={() => {
            const query = qs.stringify({ page: page - 1 })
            history.push(`${path}?${query}`)
        }}
        onClickNext={() => {
            const query = qs.stringify({ page: page + 1 })
            history.push(`${path}?${query}`)
        }} /> : <div></div>
}

export default PaginationContainer