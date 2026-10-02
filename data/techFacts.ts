export interface TechFact {
  topic: string;
  fact: string;
}

export const techFacts: TechFact[] = [
  {
    topic: "Floating point",
    fact: "0.1 + 0.2 can evaluate to 0.30000000000000004 because many decimal fractions have no exact finite binary representation.",
  },
  {
    topic: "HTTP",
    fact: "HTTP 418, “I'm a teapot,” was introduced as an intentionally amusing status in the 1998 Hyper Text Coffee Pot Control Protocol.",
  },
  {
    topic: "JavaScript",
    fact: "NaN is the one JavaScript value that is not equal to itself: NaN !== NaN.",
  },
  {
    topic: "Algorithms",
    fact: "Binary search takes O(log n) comparisons because each step halves a sorted search range.",
  },
];
