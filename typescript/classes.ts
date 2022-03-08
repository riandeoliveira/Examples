class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The person ${this.name} is ${this.age} years old.`);
  }
}

class Player extends Person {
  nickname: string;
  level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);

    this.nickname = nickname;
    this.level = level;
  }

  logDetails(): void {
    console.log(`The player ${this.nickname} is at level ${this.level}.`);
  }
}

const rick = new Person("Rick Parker", 20);
const grace = new Player("Grace Jackson", 18, "missfortune", 7);

rick.logDetails();
grace.logDetails();
