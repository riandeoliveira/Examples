// Classes abstratas não podem ter instâncias, mas podem ser extendidas.

abstract class Animal {
  abstract sound: string;
  abstract makeSound(): void;
}

class Dog extends Animal {
  public sound: string;

  constructor(sound: string) {
    super();
    this.sound = sound;
  }

  makeSound(): void {
    console.log(`The dog says ${this.sound}.`);
  }
}

const dog = new Dog("'Au Au'");

dog.makeSound();
