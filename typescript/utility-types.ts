interface Person {
  name: string;
  age: number;
}

type PersonType = "client" | "seller";

const person1: Omit<Person, "age"> = { name: "" }; // Omit a property
const person2: Partial<Person> = {}; // All optional
const person3: Pick<Person, "name"> = { name: "" }; // Get a specific property
const person4: Readonly<Person> = { name: "", age: 0 }; // All readonly
const person5: Record<PersonType, Person> = {
  // Map the properties of a type to another type
  client: { name: "", age: 0 },
  seller: { name: "", age: 0 },
};
const person6: Required<Person> = { name: "", age: 0 }; // All required
