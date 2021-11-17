import { WordDetail } from "../../../model/api/Word";

export interface IWordDetailContext {
  getWordDetail: (id: string) => void;
  wordDetail: WordDetail | undefined;
  setWordDetail: React.Dispatch<React.SetStateAction<WordDetail | undefined>>
}
