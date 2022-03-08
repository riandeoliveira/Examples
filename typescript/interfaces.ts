// Forma de descrever a estrutura de objetos.

interface Game {
  readonly title: string;
  readonly description: string;
  readonly genre: string;
  readonly platform?: string[];

  readonly getSimilars?: (title: string) => void;
}

interface DLC extends Game {
  originalGame: Game;
  newContent: string[];
}

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(title: string, description: string, genre: string) {
    this.title = title;
    this.description = description;
    this.genre = genre;
  }
}

const newGame = new CreateGame(
  "Cyberpunk 2077",
  "A futuristic open world game",
  "Action"
);

const game: Game = {
  title: "Horizon Zero Dawn",
  description: "One of my favorite games",
  genre: "Open world",
  platform: ["PS4", "PS5", "PC"],

  getSimilars: (title: string) => {
    console.log(
      `Similar games to ${title} - The Witcher 3: Wild Hunt, Monster Hunter: World and The Elder Scrolls V: Skyrim`
    );
  },
};

const dlc: DLC = {
  title: "Frozen Wilds",
  description: "A Horizon Zero Dawn DLC",
  genre: "Open world",
  platform: ["PS4", "PS5", "PC"],
  originalGame: game,
  newContent: ["More game hours", "new characters", "new story"],
};

console.log(newGame);
if (game.getSimilars) game.getSimilars(game.title);
console.log(dlc);
