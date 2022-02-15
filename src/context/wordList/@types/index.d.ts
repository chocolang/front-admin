import { TotalCountResult2 } from "../../../lib/api/@types";

export interface IWordListContext {
  getWordList: (sortType: number, page: number, keyword: string) => void;
  words: Array<Word> | undefined;
  pagination: TotalCountResult2 | undefined;
}
