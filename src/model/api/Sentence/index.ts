export interface Sentence {
  id: number;
  name: string;
  level: number;
  description: string;
  synonyms: Array<number>;
}

function getSampleSentences(): Array<Sentence> {
  return [
    {
      id: 1,
      name: "this is my house",
      level: 1,
      description: "이것은 나의 집이다",
      synonyms: [1],
    },
    {
      id: 2,
      name: "how old are you?",
      level: 1,
      description: "몇살이세요?",
      synonyms: [2, 3],
    },
    {
      id: 3,
      name: "do you like milk?",
      level: 1,
      description: "우유를 좋아하세요?",
      synonyms: [3, 4],
    },
    {
      id: 4,
      name: "can you help me?",
      level: 1,
      description: "저를 도와주실수 있나요?",
      synonyms: [1, 4],
    },
  ];
}
