import setupPromptSync from "prompt-sync";
import { displayHeroes, playAndPickWinner } from "./functions";
import ConsistentPlayer from "./models/ConsistentPlayer";
import Player from "./models/Player";

const prompt = setupPromptSync({ sigint: true });

const name = prompt("Name, please: ");
console.log("You typed: " + name);

const player1: ConsistentPlayer = new ConsistentPlayer(
  "Dwayne Johnson",
  "rock"
);
const player2: ConsistentPlayer = new ConsistentPlayer("Edward", "scissors");
const winner: Player | null = playAndPickWinner(player1, player2);

const heroes: Player[] = [
  new ConsistentPlayer("Iron Man", "rock"),
  new ConsistentPlayer("Static Shock", "scissors"),
  new ConsistentPlayer("Homelander", "paper"),
  new ConsistentPlayer("Invinvible", "rock"),
];

displayHeroes(heroes);
