function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getDetails = () => {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
  };
}

const person = new Person("Rick", "Parker", 20);

person.getDetails();
