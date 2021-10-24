export interface IWordListContext {
  getWordList: (id: string) => void;
  words: Array<Word> | undefined;
}
