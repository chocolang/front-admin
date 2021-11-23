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

console.log('여기는 호출이 되는거야------------------------------------------------?')
const words = new Array<WordDetail>()
for (var i = 0; i < 100; i++) {
  words.push({ id: String(i), name: `car${i}`, level: 1, description: "자동차", synonyms: ['truck'], point: 1000 + i },)
}

export function getSampleWords(): Array<WordItem> {
  console.log(`getSampleWords...`)
  return words as Array<WordItem>
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
  const index = words.findIndex(item => item.id === id)
  return words[index]
}
