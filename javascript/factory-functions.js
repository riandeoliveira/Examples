function createPerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,

    getDetails() {
      console.log(`${firstName} ${lastName} is ${age} years old.`);
    },
  };
}

const person = createPerson("Rick", "Parker", 20);

person.getDetails();
