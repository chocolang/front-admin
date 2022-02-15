import { WordDetail, WordUpdate } from "../../../model/api/Word";

export interface IWordDetailContext {
  getWordDetail: (id: number) => void;
  getWordUpdate: (id: number) => void;
  updateWordDetail: (id: number, wordDetail: WordDetail, callback: () => void) => void;
  createWordDetail: (wordDetail: CreateWordDetail, callback: () => void) => void;
  wordDetail: WordDetail | undefined;
  wordUpdate: WordUpdate | undefined;
}
