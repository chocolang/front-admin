export interface Sentence {
  id: number;
  from: string;
  to: string;
  level: number;
  synonyms: Array<number>;
}

function getSampleSentences(): Array<Sentence> {
  return [
    {
      id: 1,
      from: "this is my house",
      to: "이것은 나의 집이다",
      level: 1,
      synonyms: [1],
    },
    {
      id: 2,
      from: "how old are you?",
      to: "몇살이세요?",
      level: 1,
      synonyms: [2, 3],
    },
    {
      id: 3,
      from: "do you like milk?",
      to: "우유를 좋아하세요?",
      level: 1,
      synonyms: [3, 4],
    },
    {
      id: 4,
      from: "can you help me?",
      to: "저를 도와주실수 있나요?",
      level: 1,
      synonyms: [1, 4],
    },
  ];
}
