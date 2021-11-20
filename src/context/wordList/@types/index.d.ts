export interface IWordListContext {
  getWordList: (page: string) => void;
  words: Array<Word> | undefined;
}
