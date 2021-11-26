import { WordDetail } from "../../../model/api/Word";

export interface IWordDetailContext {
  getWordDetail: (id: string) => void;
  updateWordDetail: (id: string, wordDetail: WordDetail, callback: () => void) => void;
  createWordDetail: (wordDetail: CreateWordDetail, callback: () => void) => void;
  wordDetail: WordDetail | undefined;
}
