export interface IWordListContext {
  getWordList: (sortType: number, page: number, keyword: string) => void;
  words: Array<Word> | undefined;
}
