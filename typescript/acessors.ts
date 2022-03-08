class PersonName {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get getFirstName(): string {
    return this.firstName;
  }

  get getLastName(): string {
    return this.lastName;
  }

  set setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  set setLastName(lastName: string) {
    this.lastName = lastName;
  }

  getFullName(): void {
    console.log(`This person is called ${this.firstName} ${this.lastName}.`);
  }
}

const personName = new PersonName("Rick", "Parker");

personName.getFullName();

personName.setFirstName = "Alex";
personName.setLastName = "Richard";

personName.getFullName();
