import { WordDetail } from "../../../model/api/Word";

export interface IWordDetailContext {
  getWordDetail: (id: number) => void;
  wordDetail: WordDetail | undefined;
}
