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
    { id: 2, name: "hand", level: 2, description: "손", synonyms: ['foot'] },
    { id: 3, name: "sand", level: 3, description: "모레", synonyms: ['흙', '우레탄'] },
    { id: 4, name: "horse", level: 4, description: "말", synonyms: ['비행기', '기차', '우주선'] },
  ];
}

export function getSampleWordDetail(id: number): WordDetail {
  console.log(`getSampleWordDetail... id:${id}`)
  const wordDetails = [
    { id: 1, name: "car", level: 1, point: 101, description: "자동차", synonyms: ['truck'] },
    { id: 2, name: "hand", level: 2, point: 102, description: "손", synonyms: ['foot'] },
    { id: 3, name: "sand", level: 3, point: 103, description: "모레", synonyms: ['흙', '우레탄'] },
    { id: 4, name: "horse", level: 4, point: 104, description: "말", synonyms: ['비행기', '기차', '우주선'] },
  ]
  const index = wordDetails.findIndex(item => item.id === id)
  return wordDetails[index]
}
