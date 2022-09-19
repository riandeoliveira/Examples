interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "",
  age: 0,
};

const person1: keyof Person = "name"; // "name" | "age"
const person2: keyof typeof person = "name"; // "name" | "age"
