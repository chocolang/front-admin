export interface Word {
  id: number;
  name: string;
  level: number;
  description: string;
  synonyms: Array<number>;
}

export function getSampleWords(): Array<Word> {
  return [
    { id: 1, name: "car", level: 1, description: "자동차", synonyms: [1] },
    { id: 2, name: "hand", level: 1, description: "손", synonyms: [2, 3] },
    { id: 3, name: "sand", level: 1, description: "모레", synonyms: [3, 4] },
    { id: 4, name: "horse", level: 1, description: "말", synonyms: [1, 4] },
  ];
}
