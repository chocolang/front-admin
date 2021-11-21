export interface WordItem {
  id: string;
  name: string;
  level: number;
  description: string;
  synonyms: Array<string>;
}

export interface WordDetail {
  id: string;
  name: string;
  level: number;
  point: number;
  description: string;
  synonyms: Array<string>;
}

export function getSampleWords(): Array<WordItem> {
  const words = new Array<WordItem>()
  for(var i = 0; i < 100; i++){
    words.push({ id: String(i), name: `car${i}`, level: 1, description: "자동차", synonyms: ['truck'] },)
  }
  return words
  // return [
  //   { id: '1', name: "car", level: 1, description: "자동차", synonyms: ['truck'] },
  //   { id: '2', name: "hand", level: 2, description: "손", synonyms: ['foot'] },
  //   { id: '3', name: "sand", level: 3, description: "모레", synonyms: ['흙', '우레탄'] },
  //   { id: '4', name: "horse", level: 4, description: "말", synonyms: ['비행기', '기차', '우주선'] },
  //   { id: '5', name: "car", level: 1, description: "자동차", synonyms: ['truck'] },
  //   { id: '6', name: "hand", level: 2, description: "손", synonyms: ['foot'] },
  //   { id: '7', name: "sand", level: 3, description: "모레", synonyms: ['흙', '우레탄'] },
  //   { id: '8', name: "horse", level: 4, description: "말", synonyms: ['비행기', '기차', '우주선'] },
  // ];
}

export function getSampleWordDetail(id: string): WordDetail {
  console.log(`getSampleWordDetail... id:${id}`)
  const wordDetails = [
    { id: '1', name: "car", level: 1, point: 101, description: "자동차", synonyms: ['truck'] },
    { id: '2', name: "hand", level: 2, point: 102, description: "손", synonyms: ['foot'] },
    { id: '3', name: "sand", level: 3, point: 103, description: "모레", synonyms: ['흙', '우레탄'] },
    { id: '4', name: "horse", level: 4, point: 104, description: "말", synonyms: ['비행기', '기차', '우주선'] },
  ]
  const index = wordDetails.findIndex(item => item.id === id)
  return wordDetails[index]
}
