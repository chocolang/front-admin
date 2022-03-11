import { FromTo, IncludedClassType } from "..";
import { Reply } from "../Reply";
import { Sentence } from "../Sentence";

export interface BaseWord {
  from: FromTo;
  to: FromTo;
  level: number;
  includedClass: IncludedClassType
  partsOfSpeech: PartsOfSpeechType
  imageUrls: Array<string>,
  description: string;
  synonyms?: Array<string>;
  point: number;
}

export interface WordItem extends BaseWord {
  id: number
}

export interface WordUpdate extends BaseWord {
  id: number,
  sentences: Array<Sentence>
}

export interface WordDetail extends BaseWord {
  id: number
  replys: Array<Reply>
  sentences: Array<Sentence>
}

export enum PartsOfSpeechType {
  VERB = '동사',
  NOUN = '명사',
  PRONOUN = '대명사',
  ADJECTIVE = '형용사',
  ADVERB = '부사',
  ARTICLE = '관사',
  PREPOSITION = '전치사',
  CONJUNCTION = '접속사',
}
