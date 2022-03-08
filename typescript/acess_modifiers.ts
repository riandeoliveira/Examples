// public: permite modificação e leitura fora da classe.
// private: permite modificação e leitura APENAS dentro da classe.
// protected: permite modificação e leitura APENAS dentro da classe e de suas subclasses.
// readonly: permite apenas leitura fora da classe.

class User {
  public id: number;
  private name: string;
  protected registered: boolean;
  readonly characteristics: Array<string>;

  constructor(
    id: number,
    name: string,
    registered: boolean,
    characteristics: Array<string>
  ) {
    this.id = id;
    this.name = name;
    this.registered = registered;
    this.characteristics = characteristics;
  }
}

const user = new User(29183, "Rick", true, [
  "determinado",
  "persistente",
  "cofiante",
]);
