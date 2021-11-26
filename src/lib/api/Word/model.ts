import { WordItem } from "../../../model/api/Word";

export interface WordListParam {
    sortType: number,
    page: number
    keyword: string
}

export interface WordListResult {
    items? : Array<WordItem>
}