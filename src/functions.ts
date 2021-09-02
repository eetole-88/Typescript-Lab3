import Player from "./models/Player";

// TODO export displayHeroes

export function playAndPickWinner(
  player1: Player,
  player2: Player
): Player | null {
  // get each players symbol
  const symbol1: string = player1.pickSymbol();
  const symbol2: string = player2.pickSymbol();
  // log name & symbol
  console.log(`${player1.name} plays ${symbol1}.`);
  console.log(`${player2.name} plays ${symbol2}.`);
  // return the winner
  if (
    (symbol1 === "rock" && symbol2 === "scissors") ||
    (symbol1 === "scissors" && symbol2 === "paper") ||
    (symbol1 === "paper" && symbol2 == "rock")
  ) {
    return player1;
  } else if (
    (symbol2 === "rock" && symbol1 === "scissors") ||
    (symbol2 === "scissors" && symbol1 === "paper") ||
    (symbol2 === "paper" && symbol1 === "rock")
  ) {
    return player2;
  } else {
    return null;
  }
}
// ***********EXAMPLE OF forEach()**********
// const displayHeroes = (arrayOfHeroes: Player[]) => {
//   arrayOfHeroes.forEach((hero) => {
//     console.log(`-${hero.name} (${hero.winCount} wins)`);
//   });
// };
export const displayHeroes = (arrayOfHeroes: Player[]) => {
  for (let hero of arrayOfHeroes) {
    console.log(`-${hero.name} (${hero.winCount} wins)`);
  }
};
