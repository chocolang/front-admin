import { WordItem } from "../../../model/api/Word";
import { TotalCountResult } from "../@types";

export interface WordListParam {
    sortType: number,
    page: number
    keyword: string
}

export interface WordListResult {
    items? : Array<WordItem>
    pagination: TotalCountResult
}