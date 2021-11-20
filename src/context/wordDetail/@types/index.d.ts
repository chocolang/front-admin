import { WordDetail } from "../../../model/api/Word";

export interface IWordDetailContext {
  getWordDetail: (id: string) => void;
  postWordDetail: (wordDetail: WordDetail, callback: () => void) => void;
  wordDetail: WordDetail | undefined;
}
