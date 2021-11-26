export interface WordItem {
  id: string;
  name: string;
  level: number;
  description: string;
  synonyms?: Array<string>;
}

export interface WordDetail {
  id: string;
  name: string;
  level: number;
  point: number;
  description: string;
  synonyms?: Array<string>;
}
