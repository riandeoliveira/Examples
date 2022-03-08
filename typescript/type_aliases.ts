// union
type Anime = "Dragon Ball" | "Naruto" | "Pokémon";
type Score = number | undefined;

const logAnime = (anime: Anime, score: Score) => {
  console.log(`A nota do anime ${anime} é ${score}.`);
};

logAnime("Pokémon", 8.1);

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

type CharInfo = {
  nickname: string;
  level: number;
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const account: AccountInfo = {
  id: 123,
  name: "Rian",
};

const char: CharInfo = {
  nickname: "riandeoliveira",
  level: 10,
};

const player: PlayerInfo = {
  id: 123,
  name: "Rian",
  email: "riandiasdeoliveira2001@gmail.com",
  nickname: "riandeoliveira",
  level: 10,
};
