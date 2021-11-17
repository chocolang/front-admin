export interface WordItem {
  id: number;
  name: string;
  level: number;
  description: string;
  synonyms: Array<string>;
}

export interface WordDetail {
  id: number;
  name: string;
  level: number;
  point: number;
  description: string;
  synonyms: Array<string>;
}

export function getSampleWords(): Array<WordItem> {
  return [
    { id: 1, name: "car", level: 1, description: "자동차", synonyms: ['truck'] },
    { id: 2, name: "hand", level: 1, description: "손", synonyms: ['foot'] },
    { id: 3, name: "sand", level: 1, description: "모레", synonyms: ['흙', '우레탄'] },
    { id: 4, name: "horse", level: 1, description: "말", synonyms: ['수다', '언어'] },
  ];
}

export function getSampleWordDetail(): WordDetail {
  return { id: 1, name: "car", level: 1, point: 100, description: "자동차", synonyms: ['비행기', '기차', '우주선'] }
}
